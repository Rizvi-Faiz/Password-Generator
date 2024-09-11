'use client';
import { useState } from "react";
import { motion } from 'framer-motion'; // For animations
import { FaCopy } from "react-icons/fa";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includelowercase, setIncludelowercase] = useState(true);
  const [includeuppercase, setIncludeuppercase] = useState(false);
  const [includeSpecialChar, setIncludeSpecialChar] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const generatePassword = () => {
    const numbers = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+{}[]<>?,.";

    let password = "";
    if (includeNumbers) password += numbers;
    if (includelowercase) password += lowercase;
    if (includeuppercase) password += uppercase;
    if (includeSpecialChar) password += symbols;

    if (!password) {
      alert("Please select at least one character set");
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      let randomIdx = Math.floor(Math.random() * password.length);
      generatedPassword += password[randomIdx];
    }

    setPassword(generatedPassword);
    setCopySuccess(false);  // Reset animation state
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => setCopySuccess(true))
        .catch(() => setCopySuccess(false));
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-lg shadow-xl max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-4">Strong Password Generator</h1>

      <label htmlFor="length" className="block text-gray-300 mb-2">Password Length:</label>
      <input
        type="range"
        id="length"
        min="4"
        max="50"
        value={passwordLength}
        onChange={(e) => setPasswordLength(Number(e.target.value))}
        className="w-full mb-4"
      />
      <p className="text-center text-gray-400">Length: {passwordLength}</p>

      <div className="grid grid-cols-2 gap-4 mb-6 text-gray-400">
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="form-checkbox h-5 w-5 text-purple-500" />
          <span>Numbers</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={includelowercase} onChange={(e) => setIncludelowercase(e.target.checked)} className="form-checkbox h-5 w-5 text-purple-500" />
          <span>Lowercase</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={includeuppercase} onChange={(e) => setIncludeuppercase(e.target.checked)} className="form-checkbox h-5 w-5 text-purple-500" />
          <span>Uppercase</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={includeSpecialChar} onChange={(e) => setIncludeSpecialChar(e.target.checked)} className="form-checkbox h-5 w-5 text-purple-500" />
          <span>Symbols</span>
        </label>
      </div>

      <button
        onClick={generatePassword}
        className="w-full bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 mb-4"
      >
        Generate Password
      </button>

      {password && (
        <div className="text-center mb-6">
          <p className="bg-gray-800 text-gray-200 rounded-lg py-2 px-4 inline-block text-xl tracking-wide mb-4">
            {password}
          </p>

          <motion.button
            onClick={copyToClipboard}
            initial={{ scale: 0 }}
            animate={copySuccess ? { scale: 1.2, rotate: 360 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-gray-200"
          >
            <FaCopy className="text-2xl" />
          </motion.button>

          {copySuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-green-400 mt-2"
            >
              Copied!
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
