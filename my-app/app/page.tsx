import PasswordGenerator from "./components/PasswordGenerator";
import PasswordStrengthChecker from "./components/PasswordStrengthChecker";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col justify-center items-center py-10 space-y-10">
      <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">
        Password Tools
      </h1>
      <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-10 lg:space-y-0 w-full max-w-screen-lg">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <PasswordGenerator />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <PasswordStrengthChecker />
        </div>
      </div>
    </div>
  );
}
