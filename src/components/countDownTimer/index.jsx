import { useState, useRef, useEffect } from "react";

function CountDownTimer({ initialTime, onTimeFinish }) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    if (isRunning && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            if (onTimeFinish) onTimeFinish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, time, onTimeFinish]);

  function handlePauseAndResume() {
    setIsRunning((prev) => !prev);
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setTime(initialTime);
    setIsRunning(false);
  }

  function handleStart() {
    if (time > 0) setIsRunning(true);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded-xl shadow-lg w-64 mx-auto">
      {/* Timer Display */}
      <p className="text-5xl font-mono font-bold mb-4 text-cyan-400">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handlePauseAndResume}
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
        >
          {isRunning ? "Pause" : "Resume"}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition"
        >
          Reset
        </button>
        <button
          onClick={handleStart}
          className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 transition"
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default CountDownTimer;
