import React from "react";

export default function Suggestions({ data, handleClick }) {
  return (
    <ul
      className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 
                 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50"
    >
      {data && data.length ? (
        data.map((item, index) => (
          <li
            key={index}
            onClick={handleClick}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100 
                       transition-colors duration-150"
          >
            {item}
          </li>
        ))
      ) : (
        <li className="px-4 py-2 text-gray-500">No results found</li>
      )}
    </ul>
  );
}
