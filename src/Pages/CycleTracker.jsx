// src/components/CycleTracker.jsx
import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

/* --- small helpers --- */
const toISO = (d) => new Date(d).toISOString().slice(0, 10);
const daysDiff = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);
const addDaysISO = (iso, days) => {
  const dt = new Date(iso);
  dt.setDate(dt.getDate() + days);
  return toISO(dt);
};

export default function CycleTracker() {
  // stored shape: [{ id, startDate, length? }]
  const [cycles, setCycles] = useLocalStorage("cycles", []);
  const [startInput, setStartInput] = useState(toISO(new Date()));
  const [lengthInput, setLengthInput] = useState("");

  /* --- derived & predictions --- */
  const sorted = useMemo(
    () =>
      [...cycles].sort((a, b) => new Date(a.startDate) - new Date(b.startDate)),
    [cycles]
  );

  const lengths = useMemo(() => {
    const arr = [];
    for (let i = 1; i < sorted.length; i++) {
      arr.push(daysDiff(sorted[i - 1].startDate, sorted[i].startDate));
    }
    return arr;
  }, [sorted]);

  const averageCycle = useMemo(() => {
    if (lengths.length === 0) return 28;
    const sum = lengths.reduce((s, v) => s + v, 0);
    return Math.round(sum / lengths.length);
  }, [lengths]);

  const lastStart = sorted.length ? sorted[sorted.length - 1].startDate : null;
  const predictedNextStart = lastStart
    ? addDaysISO(lastStart, averageCycle)
    : null;
  const predictedOvulation = predictedNextStart
    ? addDaysISO(predictedNextStart, -14)
    : null;
  const fertileStart = predictedOvulation
    ? addDaysISO(predictedOvulation, -5)
    : null;
  const fertileEnd = predictedOvulation
    ? addDaysISO(predictedOvulation, 1)
    : null;

  const periodLength = useMemo(() => {
    if (!sorted.length) return 5; // default
    const lastWithLen = [...sorted].reverse().find((s) => s.length);
    return lastWithLen ? lastWithLen.length : 5;
  }, [sorted]);

  /* --- cycle geometry for wheel --- */
  const cycleLength = averageCycle || 28;
  const todayISO = toISO(new Date());
  const cycleDayToday = lastStart
    ? (((daysDiff(lastStart, todayISO) % cycleLength) + cycleLength) %
        cycleLength) +
      1
    : null;

  // Simple status label
  const status = (() => {
    if (!predictedNextStart) return "No predictions yet";
    const today = new Date(todayISO);
    const pStart = new Date(predictedNextStart);
    const pEnd = new Date(addDaysISO(predictedNextStart, periodLength - 1));
    const ov = predictedOvulation ? new Date(predictedOvulation) : null;
    const fStart = fertileStart ? new Date(fertileStart) : null;
    const fEnd = fertileEnd ? new Date(fertileEnd) : null;

    if (today >= pStart && today <= pEnd) return "Period";
    if (ov && toISO(today) === toISO(ov)) return "Ovulation";
    if (fStart && fEnd && today >= fStart && today <= fEnd) return "Fertile";
    return cycleDayToday ? `Day ${cycleDayToday}` : "No data";
  })();

  /* --- actions --- */
  function addCycle(e) {
    e?.preventDefault();
    if (!startInput) return;
    const newItem = {
      id: uuidv4(),
      startDate: startInput,
      length: lengthInput ? Number(lengthInput) : null,
    };
    setCycles((s) =>
      [...s, newItem].sort(
        (a, b) => new Date(a.startDate) - new Date(b.startDate)
      )
    );
    setLengthInput("");
  }

  function markToday() {
    const today = toISO(new Date());
    const already = cycles.some((c) => c.startDate === today);
    if (already) return;
    const n = { id: uuidv4(), startDate: today, length: null };
    setCycles((s) =>
      [...s, n].sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    );
  }

  function removeLast() {
    if (!sorted.length) return;
    const lastId = sorted[sorted.length - 1].id;
    setCycles((s) => s.filter((c) => c.id !== lastId));
  }

  /* --- build conic gradient for clear bold ring --- */
  const wheelGradient = useMemo(() => {
    // map each day 1..cycleLength to a color stop (period, fertile, ovulation, normal)
    const stops = [];
    for (let d = 1; d <= cycleLength; d++) {
      const startPct = ((d - 1) / cycleLength) * 100;
      const endPct = (d / cycleLength) * 100;

      // compute ISO for this logical day in predicted cycle (if available)
      let color = "#f8fafc"; // normal (tailwind slate-50)
      if (predictedNextStart) {
        const dayISO = toISO(addDaysISO(predictedNextStart, d - 1));
        const isPeriod =
          new Date(dayISO) >= new Date(predictedNextStart) &&
          new Date(dayISO) <=
            new Date(addDaysISO(predictedNextStart, periodLength - 1));
        const isOv =
          predictedOvulation && dayISO === toISO(new Date(predictedOvulation));
        const isFert =
          fertileStart &&
          fertileEnd &&
          new Date(dayISO) >= new Date(fertileStart) &&
          new Date(dayISO) <= new Date(fertileEnd);
        if (isPeriod) color = "#ef4444"; // rose-500
        else if (isOv) color = "#fb923c"; // orange-400
        else if (isFert) color = "#fde68a"; // yellow-200
      }
      stops.push(`${color} ${startPct}% ${endPct}%`);
    }
    return `conic-gradient(${stops.join(", ")})`;
  }, [
    cycleLength,
    predictedNextStart,
    predictedOvulation,
    fertileStart,
    fertileEnd,
    periodLength,
  ]);

  /* --- UI --- */
  return (
    <div className="min-h-[80vh] w-full bg-gradient-to-b from-rose-100 via-rose-200/60 to-rose-300/40 p-8 font-montserrat flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 drop-shadow-sm">
        Cycle Tracker
      </h1>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT: big visual wheel */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col items-center">
          <div className="mb-4 text-center">
            <div className="text-sm text-gray-600">Current</div>
            <div className="text-xl font-semibold text-slate-800">{status}</div>
            <div className="text-xs text-gray-500 mt-1">
              {predictedNextStart
                ? `Next period: ${predictedNextStart} • Avg ${cycleLength}d`
                : "Add a few cycle starts to get predictions"}
            </div>
          </div>

          {/* big donut */}
          <div style={{ width: 320, height: 320 }} className="relative">
            <div
              aria-hidden
              style={{
                width: 320,
                height: 320,
                borderRadius: 9999,
                background: wheelGradient,
                display: "grid",
                placeItems: "center",
                boxShadow: "0 8px 30px rgba(15,23,42,0.08)",
              }}
            >
              <div
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 9999,
                  background: "rgba(255,255,255,0.95)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="text-center p-3"
              >
                <div className="text-sm text-gray-500">Cycle day</div>
                <div className="text-3xl font-semibold text-slate-800 mt-1">
                  {cycleDayToday ?? "—"}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Avg {cycleLength}d • Period ~{periodLength}d
                </div>
              </div>
            </div>

            {/* ovulation dot (clear and bold) */}
            {predictedOvulation &&
              cycleLength > 0 &&
              (() => {
                const pStart = new Date(predictedNextStart);
                const ov = new Date(predictedOvulation);
                const dayNum = daysDiff(pStart, ov) + 1;
                const angle = ((dayNum - 1) / cycleLength) * 360;
                const cx = 160,
                  cy = 160,
                  r = 136;
                const rad = (angle - 90) * (Math.PI / 180);
                const x = cx + Math.cos(rad) * r;
                const y = cy + Math.sin(rad) * r;
                return (
                  <div
                    style={{
                      position: "absolute",
                      left: x - 10,
                      top: y - 10,
                      width: 20,
                      height: 20,
                      borderRadius: 9999,
                      background: "#fb923c",
                      boxShadow: "0 6px 18px rgba(251,146,60,0.25)",
                      border: "3px solid white",
                    }}
                    title={`Ovulation: ${predictedOvulation}`}
                  />
                );
              })()}
          </div>

          {/* legend */}
          <div className="mt-6 grid grid-cols-2 gap-2 text-sm w-full">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-rose-500" />
              <div>Period</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-amber-200 border border-amber-300" />
              <div>Fertile window</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-orange-400" />
              <div>Ovulation</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-slate-50 border" />
              <div>Normal</div>
            </div>
          </div>
        </div>

        {/* RIGHT: simple controls + compact list */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Add / Manage
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Only local storage — no accounts required.
            </p>
          </div>

          <form onSubmit={addCycle} className="flex flex-col gap-3">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Start date
              </label>
              <input
                type="date"
                value={startInput}
                onChange={(e) => setStartInput(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mt-1"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Period length (optional)
              </label>
              <input
                type="number"
                min="1"
                placeholder="e.g. 5"
                value={lengthInput}
                onChange={(e) => setLengthInput(e.target.value)}
                className="w-32 border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-xl">
                Add cycle
              </button>
              <button
                type="button"
                onClick={markToday}
                className="bg-white border px-3 py-2 rounded-xl"
              >
                Mark today
              </button>
              <button
                type="button"
                onClick={removeLast}
                className="bg-white border px-3 py-2 rounded-xl text-red-600"
              >
                Remove last
              </button>
            </div>
          </form>

          {/* compact recorded starts */}
          <div className="mt-2">
            <h3 className="text-sm font-semibold text-slate-800 mb-2">
              Recorded starts
            </h3>
            {sorted.length === 0 ? (
              <div className="text-sm text-gray-500">
                No recorded starts yet.
              </div>
            ) : (
              <ul className="space-y-2 max-h-48 overflow-auto">
                {sorted.map((c) => (
                  <li
                    key={c.id}
                    className="flex justify-between items-center bg-white rounded-xl px-3 py-2 border"
                  >
                    <div>
                      <div className="font-medium text-slate-800">
                        {c.startDate}
                      </div>
                      {c.length && (
                        <div className="text-xs text-gray-500">
                          Period {c.length}d
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        setCycles((s) => s.filter((x) => x.id !== c.id))
                      }
                      className="text-sm text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* stats */}
          <div className="mt-3 text-sm text-gray-700">
            <div>
              Average cycle length: <strong>{averageCycle} days</strong>
            </div>
            {predictedNextStart && (
              <>
                <div className="mt-1">
                  Next predicted start: <strong>{predictedNextStart}</strong>
                </div>
                <div>
                  Ovulation: <strong>{predictedOvulation}</strong>
                </div>
                <div>
                  Fertile window: <strong>{fertileStart}</strong> —{" "}
                  <strong>{fertileEnd}</strong>
                </div>
              </>
            )}
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <strong>Note:</strong> Data is stored locally only on this device.
          </div>
        </div>
      </div>
    </div>
  );
}
