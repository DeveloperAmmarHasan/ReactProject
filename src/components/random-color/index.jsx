import React, { useEffect, useState } from 'react';

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function handleCreateRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRGBColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);
  return (
    <div className="min-h-screen min-w-screen" style={{ background: color }}>
      <div className="flex justify-center items-center gap-2">
        <button
          className="bg-white text-black px-4 py-2 rounded"
          onClick={() => setTypeOfColor('hex')}
        >
          Create HEX Color
        </button>
        <button
          className="bg-white text-black px-4 py-2 rounded"
          onClick={() => setTypeOfColor('rgb')}
        >
          Create RGB Color
        </button>
        <button
          className="bg-white text-black px-4 py-2 rounded"
          onClick={
            typeOfColor === 'hex'
              ? handleCreateRandomHexColor
              : handleCreateRandomRGBColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="flex justify-items-center text-white text-6xl mt-12">
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
