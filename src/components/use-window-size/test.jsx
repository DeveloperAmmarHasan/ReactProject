import React from "react";
import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const { width, height } = useWindowResize();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 min-w-full">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          🖥️ Window Resize Test
        </h1>
        <p className="text-gray-700">
          <span className="font-medium text-blue-600">Width:</span> {width}px
        </p>
        <p className="text-gray-700">
          <span className="font-medium text-green-600">Height:</span> {height}px
        </p>
      </div>
    </div>
  );
}
