import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // use ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(
    function () {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
      }

      setPassword(pass);
    },
    [length, numberAllowed, charAllowed, setPassword]
  );

  const copyPasswordToClipBoard = useCallback(
    function () {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 100);
      window.navigator.clipboard.writeText(password);
    },
    [password]
  );

  useEffect(
    function () {
      passwordGenerator();
    },
    [length, numberAllowed, charAllowed, passwordGenerator]
  );

  return (
    // Added a wrapper to center everything and give a dark background
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 text-3xl font-bold">
        Password Generator
      </h1>

      {/* Input and Button Section */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-gray-700">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 bg-gray-700 text-white placeholder-gray-400"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipBoard}
          className="outline-none bg-blue-700 text-white px-4 py-1 shrink-0 hover:bg-blue-600 transition-colors font-medium"
        >
          Copy
        </button>
      </div>

      {/* Controls Section */}
      <div className="flex text-sm gap-x-4">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer accent-blue-500"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white font-medium">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="w-4 h-4 accent-blue-500 cursor-pointer"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="cursor-pointer font-medium">
            Numbers
          </label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            className="w-4 h-4 accent-blue-500 cursor-pointer"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label
            htmlFor="characterInput"
            className="cursor-pointer font-medium"
          >
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
