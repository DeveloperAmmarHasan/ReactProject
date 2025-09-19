import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prev) => prev + 1);
  };

  const removeValue = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 min-w-full">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Counter: <span className="text-blue-600">{counter}</span>
      </h1>

      <div className="flex gap-4">
        <button
          onClick={addValue}
          className="px-5 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
        >
          Increase
        </button>

        <button
          onClick={removeValue}
          disabled={counter === 0}
          className={`px-5 py-2 rounded-xl shadow transition ${
            counter === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Counter;
