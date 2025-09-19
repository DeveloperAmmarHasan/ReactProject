import React, { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    { id: 1, label: "First Section", color: "bg-red-500" },
    { id: 2, label: "Second Section", color: "bg-green-500" },
    { id: 3, label: "Third Section", color: "bg-yellow-400" },
    { id: 4, label: "Fourth Section", color: "bg-pink-400" },
    { id: 5, label: "Fifth Section", color: "bg-blue-500" },
  ];

  function handleScrollToSection() {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="sticky top-0 bg-white shadow z-10 flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">
          🎯 Scroll To Section
        </h1>
        <button
          onClick={handleScrollToSection}
          className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Go to 4th Section
        </button>
      </div>

      {/* Sections */}
      {data.map((item) => (
        <div
          key={item.id}
          ref={item.id === 4 ? ref : null}
          className={`${item.color} w-screen h-[600px] flex items-center justify-center`}
        >
          <h3 className="text-3xl font-semibold text-white drop-shadow-lg">
            {item.label}
          </h3>
        </div>
      ))}
    </div>
  );
}
