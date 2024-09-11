import PasswordGenerator from "./components/PasswordGenerator";
import PasswordStrengthChecker from "./components/PasswordStrengthChecker";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center py-10 space-y-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        Password Tools
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-10 lg:space-y-0">
        <PasswordGenerator />
        <PasswordStrengthChecker />
      </div>
    </div>
  );
}
