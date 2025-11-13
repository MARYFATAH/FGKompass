// src/components/CycleTracker.jsx
import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

/* small helpers */
const toISO = (d) => new Date(d).toISOString().slice(0, 10);
const daysDiff = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);
const addDaysISO = (iso, days) => {
  const dt = new Date(iso);
  dt.setDate(dt.getDate() + days);
  return toISO(dt);
};

export default function CycleTracker() {
  const [cycles, setCycles] = useLocalStorage("cycles", []); // {id, startDate, length}
  const [startInput, setStartInput] = useState(toISO(new Date()));
  const [lengthInput, setLengthInput] = useState("");
  const [importJson, setImportJson] = useState("");

  // sorted ascending
  const sorted = useMemo(
    () =>
      [...cycles].sort((a, b) => new Date(a.startDate) - new Date(b.startDate)),
    [cycles]
  );

  // computed lengths between starts
  const lengths = useMemo(() => {
    const res = [];
    for (let i = 1; i < sorted.length; i++) {
      res.push(daysDiff(sorted[i - 1].startDate, sorted[i].startDate));
    }
    return res;
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

  function addCycle(e) {
    e.preventDefault();
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

  function removeCycle(id) {
    setCycles((s) => s.filter((c) => c.id !== id));
  }

  function exportData() {
    const blob = new Blob([JSON.stringify(cycles, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cycles-export.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function importData() {
    try {
      const parsed = JSON.parse(importJson);
      if (!Array.isArray(parsed))
        throw new Error("Invalid format: expected array");
      const filtered = parsed
        .filter((p) => p && p.startDate)
        .map((p) => ({
          id: p.id || uuidv4(),
          startDate: p.startDate,
          length: p.length || null,
        }));
      setCycles(
        filtered.sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
      );
      setImportJson("");
    } catch (err) {
      alert("Import failed: " + err.message);
    }
  }

  /* simple month renderer: current month */
  function renderMonth(year, month) {
    const first = new Date(year, month, 1);
    const startDay = first.getDay(); // 0-6
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < startDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = toISO(new Date(year, month, d));
      const isPeriod = (() => {
        if (!predictedNextStart) return false;
        const avgPeriodLenGuess = 5; // UI-friendly guess
        const pStart = new Date(predictedNextStart);
        const pEnd = new Date(predictedNextStart);
        pEnd.setDate(pEnd.getDate() + avgPeriodLenGuess - 1);
        return new Date(iso) >= pStart && new Date(iso) <= pEnd;
      })();
      const isFertile =
        fertileStart &&
        fertileEnd &&
        new Date(iso) >= new Date(fertileStart) &&
        new Date(iso) <= new Date(fertileEnd);
      const isRecorded = cycles.some((c) => c.startDate === iso);
      cells.push({ iso, day: d, isPeriod, isFertile, isRecorded });
    }
    return (
      <div className="grid grid-cols-7 gap-1">
        {cells.map((c, idx) =>
          c === null ? (
            <div key={"empty" + idx} className="h-10" />
          ) : (
            <div
              key={c.iso}
              className={`h-10 flex items-center justify-center text-sm rounded-md
                ${c.isPeriod ? "bg-rose-500 text-white" : ""}
                ${c.isFertile ? "bg-rose-200 text-rose-700" : ""}
                ${c.isRecorded ? "ring-2 ring-rose-600" : "bg-white"}
                border`}
            >
              {c.day}
            </div>
          )
        )}
      </div>
    );
  }

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold">Cycle Tracker (Local only)</h2>

      <form
        onSubmit={addCycle}
        className="flex flex-col sm:flex-row gap-3 items-center"
      >
        <label className="text-sm">Start date</label>
        <input
          type="date"
          value={startInput}
          onChange={(e) => setStartInput(e.target.value)}
          className="border p-2 rounded"
        />
        <label className="text-sm">Period length (optional days)</label>
        <input
          type="number"
          min="1"
          placeholder="e.g. 5"
          value={lengthInput}
          onChange={(e) => setLengthInput(e.target.value)}
          className="border p-2 rounded w-24"
        />
        <button
          type="submit"
          className="bg-rose-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Recorded cycles</h3>
          <ul className="mt-3 space-y-2">
            {sorted.length === 0 && (
              <li className="text-gray-500">No cycles recorded yet.</li>
            )}
            {sorted.map((c) => (
              <li key={c.id} className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{c.startDate}</div>
                  {c.length && (
                    <div className="text-sm text-gray-600">
                      Length: {c.length} days
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    className="text-sm text-red-600"
                    onClick={() => removeCycle(c.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-sm text-gray-700">
            <div>
              Average cycle length: <strong>{averageCycle} days</strong>
            </div>
            {predictedNextStart && (
              <>
                <div>
                  Predicted next period starts:{" "}
                  <strong>{predictedNextStart}</strong>
                </div>
                <div>
                  Estimated ovulation: <strong>{predictedOvulation}</strong>
                </div>
                <div>
                  Fertile window: <strong>{fertileStart}</strong> to{" "}
                  <strong>{fertileEnd}</strong>
                </div>
              </>
            )}
          </div>

          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={exportData}
              className="bg-gray-100 px-3 py-1 rounded"
            >
              Export JSON
            </button>
            <button
              type="button"
              onClick={() => setImportJson(JSON.stringify(cycles, null, 2))}
              className="bg-gray-100 px-3 py-1 rounded"
            >
              Pre-fill Import
            </button>
          </div>

          <div className="mt-3">
            <textarea
              value={importJson}
              onChange={(e) => setImportJson(e.target.value)}
              className="w-full h-24 border rounded p-2"
              placeholder="Paste JSON here to import"
            />
            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={importData}
                className="bg-rose-500 text-white px-3 py-1 rounded"
              >
                Import
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Calendar (this month)</h3>
          {renderMonth(year, month)}
          <div className="mt-3 text-sm text-gray-600">
            Period (predicted):{" "}
            <span className="text-rose-600 font-medium">
              {predictedNextStart || "n/a"}
            </span>
            <br />
            Ovulation estimate:{" "}
            <span className="font-medium">{predictedOvulation || "n/a"}</span>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-600">
        <strong>Important:</strong> This tracker stores data locally on this
        device only. Predictions are estimates and not medical advice.
      </div>
    </div>
  );
}
