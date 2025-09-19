import { useState, useRef } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 min-w-full">
      {showContent ? (
        <div
          ref={ref}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 max-w-md w-full"
        >
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            This is a random content
          </h1>
          <p className="text-gray-600">
            Please click <span className="font-medium">outside</span> of this to
            close it. It won’t close if you click inside it.
          </p>
        </div>
      ) : (
        <button
          onClick={() => setShowContent(true)}
          className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Show Content
        </button>
      )}
    </div>
  );
}
