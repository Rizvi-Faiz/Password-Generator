'use client'
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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto transition-colors duration-300 ease-in-out">
      <h1 className="text-2xl font-bold mb-4 text-center">Password Strength Checker</h1>
        
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        className="border px-4 py-2 mb-4 w-full"
      />

      <div className={`text-lg font-bold mb-4 ${strength === 'Strong' ? 'text-green-600' : strength === 'Medium' ? 'text-yellow-500' : 'text-red-600'}`}>
        {strength ? `Password Strength: ${strength}` : 'Password Strength: N/A'}
      </div>

      <ul className="list-disc text-left ml-4">
        <li className={password.length >= 8 ? 'text-green-500' : 'text-red-500'}>At least 8 characters</li>
        <li className={/[a-z]/.test(password) ? 'text-green-500' : 'text-red-500'}>Lowercase letter</li>
        <li className={/[A-Z]/.test(password) ? 'text-green-500' : 'text-red-500'}>Uppercase letter</li>
        <li className={/[0-9]/.test(password) ? 'text-green-500' : 'text-red-500'}>Number</li>
        <li className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-green-500' : 'text-red-500'}>Symbol</li>
      </ul>
    </div>
  );
};

export default PasswordStrengthChecker;
