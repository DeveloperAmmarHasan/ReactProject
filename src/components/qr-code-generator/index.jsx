import QRCode from 'react-qr-code';
import { useState } from 'react';

export default function QrCodeGenerator() {
  const [CodeQR, setQRCode] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleGenerateQRCode = () => {
    setQRCode(inputValue);
    setInputValue('');
  };
  return (
    <div className="flex justify-center items-center w-full flex-col gap-5 p-5 border-amber-400">
      <h1 className="font-bold text-3xl">QR code Generator</h1>
      <div>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          className="bg-amber-400 rounded-full p-3 placeholder-cyan-50"
        />
        <button
          disabled={!(inputValue && inputValue.trim() !== '')}
          onClick={handleGenerateQRCode}
          className={
            inputValue && inputValue.trim() !== ''
              ? 'bg-amber-400 rounded-full p-3'
              : 'bg-gray-400 rounded-full p-3'
          }
        >
          Generate QR Code
        </button>
      </div>
      <QRCode value={CodeQR} id="qr-code-value" size={400} bgColor="#fff" />
    </div>
  );
}
