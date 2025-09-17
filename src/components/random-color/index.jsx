import React, { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRGBColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      className="min-h-screen w-screen flex flex-col items-center justify-center"
      style={{ background: color }}
    >
      {/* Buttons */}
      <div className="flex gap-4">
        <button
          className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100"
          onClick={() => setTypeOfColor("hex")}
        >
          Create HEX Color
        </button>
        <button
          className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100"
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB Color
        </button>
        <button
          className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100"
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRGBColor
          }
        >
          Generate Random Color
        </button>
      </div>

      {/* Color Info */}
      <div className="flex flex-col items-center text-white mt-12 space-y-4">
        <h3 className="text-2xl font-medium">
          {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        </h3>
        <h1 className="text-6xl font-bold">{color}</h1>
      </div>
    </div>
  );
}
