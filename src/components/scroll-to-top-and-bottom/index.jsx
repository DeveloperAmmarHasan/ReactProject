import React, { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (pending) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg font-medium text-gray-700 min-w-full">
        ⏳ Data is loading, please wait...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 min-w-full">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-md w-full max-w-3xl px-6 py-4 flex justify-between items-center rounded-b-2xl">
        <h1 className="text-2xl font-bold text-gray-800">
          📜 Scroll To Top & Bottom
        </h1>
        <button
          onClick={handleScrollToBottom}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Scroll to Bottom
        </button>
      </div>

      {/* Error */}
      {error && (
        <h1 className="text-red-600 text-lg font-semibold mt-4">
          {error.message}
        </h1>
      )}

      {/* Product List */}
      <ul className="mt-6 space-y-2 w-full max-w-3xl">
        {data && data.products && data.products.length
          ? data.products.map((item) => (
              <li
                key={item.id}
                className="p-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition"
              >
                {item.title}
              </li>
            ))
          : null}
      </ul>

      {/* Footer Button */}
      <div className="mt-6">
        <button
          onClick={handleScrollToTop}
          className="px-5 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
        >
          Scroll to Top
        </button>
      </div>

      {/* Bottom Ref */}
      <h3 ref={bottomRef} className="mt-10 text-gray-600 font-medium text-lg">
        ⬇️ This is the bottom of the page
      </h3>
    </div>
  );
}
