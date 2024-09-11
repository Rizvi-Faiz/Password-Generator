'use client';
import { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const evaluatePasswordStrength = (password: string) => {
    let score = 0;
    const lengthBonus = password.length >= 12 ? 2 : password.length >= 8 ? 1 : 0;

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLowercase) score++;
    if (hasUppercase) score++;
    if (hasNumbers) score++;
    if (hasSymbols) score++;
    score += lengthBonus;

    if (score >= 5) {
      setStrength('Strong');
    } else if (score >= 3) {
      setStrength('Medium');
    } else {
      setStrength('Weak');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    evaluatePasswordStrength(newPassword);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 rounded-lg shadow-xl max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-4">Password Strength Checker</h1>

      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out mb-4"
      />

      <div className={`text-2xl font-bold mb-4 ${strength === 'Strong' ? 'text-green-400' : strength === 'Medium' ? 'text-yellow-400' : 'text-red-500'}`}>
        {strength ? `Password Strength: ${strength}` : 'Password Strength: N/A'}
      </div>

      <ul className="list-none ml-6 text-gray-300 space-y-2">
        <li className={` transition duration-300 ease-in-out ${password.length >= 8 ? 'text-green-400' : 'text-gray-400'}`}>
          {password.length >= 8 ? '✔️ ' : '✘ '}
          At least 8 characters
        </li>
        <li className={` transition duration-300 ease-in-out ${/[a-z]/.test(password) ? 'text-green-400' : 'text-gray-400'}`}>
          {/[a-z]/.test(password) ? '✔️ ' : '✘ '}
          Lowercase letters
        </li>
        <li className={` transition duration-300 ease-in-out ${/[A-Z]/.test(password) ? 'text-green-400' : 'text-gray-400'}`}>
          {/[A-Z]/.test(password) ? '✔️ ' : '✘ '}
          Uppercase letters
        </li>
        <li className={` transition duration-300 ease-in-out ${/[0-9]/.test(password) ? 'text-green-400' : 'text-gray-400'}`}>
          {/[0-9]/.test(password) ? '✔️ ' : '✘ '}
          Numbers
        </li>
        <li className={` transition duration-300 ease-in-out ${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-400' : 'text-gray-400'}`}>
          {/[!@#$%^&*(),.?":{}|<>]/.test(password) ? '✔️ ' : '✘ '}
          Symbols
        </li>
      </ul>
    </div>
  );
};

export default PasswordStrengthChecker;
