// src/components/CycleTracker.jsx
import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
import { useTranslation } from "react-i18next";

/* --- small helpers --- */
const toISO = (d) => new Date(d).toISOString().slice(0, 10);
const daysDiff = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);
const addDaysISO = (iso, days) => {
  const dt = new Date(iso);
  dt.setDate(dt.getDate() + days);
  return toISO(dt);
};

export default function CycleTracker() {
  const { t } = useTranslation();
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
    <div className="relative min-h-screen w-full font-montserrat bg-gradient-to-b from-rose-50 via-white to-rose-50 text-gray-700">
      {/* 🌸 Header */}
      <div className="pt-24 pb-12 text-center px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-rose-600 tracking-tight">
          {t("cycleTracker.title")}
        </h1>
        <p className="mt-2 text-sm text-rose-400">{t("cycleTracker.note")}</p>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 pb-24">
        {/* 🌕 LEFT – Visual Wheel */}
        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 flex flex-col items-center">
          {/* Status */}
          <div className="text-center mb-5">
            <div className="text-xs uppercase tracking-wide text-rose-400">
              {t("cycleTracker.status")}
            </div>
            <div className="text-xl font-medium text-rose-600 mt-1">
              {status}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {predictedNextStart
                ? `${predictedNextStart} • ${cycleLength}d`
                : t("cycleTracker.noPredictions")}
            </div>
          </div>

          {/* Donut */}
          <div className="relative" style={{ width: 300, height: 300 }}>
            <div
              aria-hidden
              className="rounded-full flex items-center justify-center"
              style={{
                width: 300,
                height: 300,
                background: wheelGradient,
                boxShadow: "0 12px 30px rgba(244,63,94,0.12)",
              }}
            >
              <div
                className="rounded-full flex flex-col items-center justify-center text-center"
                style={{
                  width: 190,
                  height: 190,
                  background: "rgba(255,255,255,0.97)",
                }}
              >
                <div className="text-xs text-rose-400">
                  {t("cycleTracker.day")}
                </div>
                <div className="text-3xl font-semibold text-rose-600 mt-1">
                  {cycleDayToday ?? "—"}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  {cycleLength}d • ~{periodLength}d
                </div>
              </div>
            </div>

            {/* Ovulation Dot */}
            {predictedOvulation &&
              cycleLength > 0 &&
              (() => {
                const pStart = new Date(predictedNextStart);
                const ov = new Date(predictedOvulation);
                const dayNum = daysDiff(pStart, ov) + 1;
                const angle = ((dayNum - 1) / cycleLength) * 360;
                const cx = 150,
                  cy = 150,
                  r = 128;
                const rad = (angle - 90) * (Math.PI / 180);
                const x = cx + Math.cos(rad) * r;
                const y = cy + Math.sin(rad) * r;

                return (
                  <div
                    className="absolute rounded-full border-2 border-white"
                    style={{
                      left: x - 8,
                      top: y - 8,
                      width: 16,
                      height: 16,
                      background: "#fb7185",
                      boxShadow: "0 6px 16px rgba(251,113,133,0.4)",
                    }}
                    title={`${t(
                      "cycleTracker.ovulation"
                    )} • ${predictedOvulation}`}
                  />
                );
              })()}
          </div>

          {/* Legend */}
          <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-gray-600 w-full">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              {t("cycleTracker.legend.period")}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-200" />
              {t("cycleTracker.legend.fertile")}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-400" />
              {t("cycleTracker.legend.ovulation")}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-50 border" />
              {t("cycleTracker.legend.normal")}
            </div>
          </div>
        </div>

        {/* 🌿 RIGHT – Controls */}
        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-6 flex flex-col gap-6">
          {/* Add cycle */}
          <div>
            <h2 className="text-lg font-medium text-rose-600">
              {t("cycleTracker.manage.title")}
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              {t("cycleTracker.manage.subtitle")}
            </p>
          </div>

          <form onSubmit={addCycle} className="space-y-4">
            <div>
              <label className="text-xs text-gray-500">
                {t("cycleTracker.manage.startDate")}
              </label>
              <input
                type="date"
                value={startInput}
                onChange={(e) => setStartInput(e.target.value)}
                className="w-full mt-1 rounded-xl border border-rose-200 px-3 py-2 text-sm focus:ring-rose-300"
                required
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">
                {t("cycleTracker.manage.periodLength")}
              </label>
              <input
                type="number"
                min="1"
                value={lengthInput}
                onChange={(e) => setLengthInput(e.target.value)}
                className="w-32 mt-1 rounded-xl border border-rose-200 px-3 py-2 text-sm"
              />
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-rose-500 hover:bg-rose-600 text-white rounded-xl py-2 text-sm transition">
                {t("cycleTracker.manage.add")}
              </button>
              <button
                type="button"
                onClick={markToday}
                className="px-4 py-2 rounded-xl border border-rose-200 text-rose-600 text-sm"
              >
                {t("cycleTracker.manage.markToday")}
              </button>
            </div>

            <button
              type="button"
              onClick={removeLast}
              className="text-xs text-rose-400 self-start hover:text-rose-600"
            >
              {t("cycleTracker.manage.removeLast")}
            </button>
          </form>

          {/* Records */}
          <div>
            <h3 className="text-sm font-medium text-rose-600 mb-2">
              {t("cycleTracker.recordedStarts")}
            </h3>

            {sorted.length === 0 ? (
              <p className="text-xs text-gray-400">
                {t("cycleTracker.records.empty")}
              </p>
            ) : (
              <ul className="space-y-2 max-h-44 overflow-auto">
                {sorted.map((c) => (
                  <li
                    key={c.id}
                    className="flex justify-between items-center border border-rose-100 rounded-xl px-3 py-2 text-sm"
                  >
                    <span>{c.startDate}</span>
                    <button
                      onClick={() =>
                        setCycles((s) => s.filter((x) => x.id !== c.id))
                      }
                      className="text-xs text-rose-400 hover:text-rose-600"
                    >
                      {t("cycleTracker.records.remove")}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
