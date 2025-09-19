import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_[]{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-6 my-10 text-orange-400 bg-gray-800">
      <h1 className="text-2xl font-bold text-center text-white mb-6">
        🔐 Password Generator
      </h1>

      {/* Proper input box */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          value={password}
          placeholder="Generated password"
          readOnly
          ref={passwordRef}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={copyPasswordToclipboard}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition font-medium"
        >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4 text-sm">
        <div className="flex items-center gap-x-3">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer accent-blue-500"
            onChange={(e) => setlength(e.target.value)}
          />
          <label className="text-white font-medium">
            Length: <span className="text-blue-400">{length}</span>
          </label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="accent-blue-500"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="text-white">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            className="accent-blue-500"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput" className="text-white">
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
