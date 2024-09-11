'use client'
import { useState } from "react";
import { FaCopy } from "react-icons/fa"; // For the copy icon

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includelowercase, setIncludelowercase] = useState(true);
  const [includeuppercase, setIncludeuppercase] = useState(false);
  const [includeSpecialChar, setIncludeSpecialChar] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const generatePassword = () => {
    const numbers = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+{}[]<>?,.";

    let password = "";
    
    if (includeNumbers) {
        password += numbers;
    }
    if (includelowercase) {
        password += lowercase;
    }
    if (includeuppercase) {
        password += uppercase;
    }
    if (includeSpecialChar) {
        password += symbols;
    }
    
    if (!password) {
        alert("Please select at least one character set");
        return;
    }

    let generatePassword = '';
    for(let i = 0; i < passwordLength; i++) {
        let randomIdx = Math.floor(Math.random() * password.length);
        generatePassword += password[randomIdx];
    }

    setPassword(generatePassword);
    setCopySuccess('');  // Reset copy status after generating a new password
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => setCopySuccess('Copied!'))
        .catch(() => setCopySuccess('Failed to copy!'));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Strong Password Generator</h1>

        {/* Password Length Slider */}
        <label htmlFor="length" className="block mb-2 text-gray-700 font-semibold">Password Length:</label>
        <input
          type="range"
          id="length"
          min="4"
          max="50"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
          className="w-full mb-4"
        />
        <p className="text-center text-gray-700">Length: {passwordLength}</p>

        {/* Checkbox Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span>Numbers</span>
          </label>
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              checked={includelowercase}
              onChange={(e) => setIncludelowercase(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span>Lowercase</span>
          </label>
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeuppercase}
              onChange={(e) => setIncludeuppercase(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span>Uppercase</span>
          </label>
          <label className="flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              checked={includeSpecialChar}
              onChange={(e) => setIncludeSpecialChar(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span>Symbols</span>
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mb-4 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Generate Password
        </button>

        {/* Generated Password Display */}
        {password && (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800">Generated Password:</h2>
            <p className="mt-2 text-gray-600 bg-gray-100 p-2 rounded-lg">{password}</p>

            {/* Copy Button with Icon */}
            <button
              onClick={copyToClipboard}
              className="mt-4 inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaCopy className="mr-2" /> Copy to Clipboard
            </button>

            {/* Copy Success Message */}
            {copySuccess && (
              <p className={`mt-2 ${copySuccess === 'Copied!' ? 'text-green-600' : 'text-red-600'}`}>
                {copySuccess}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
