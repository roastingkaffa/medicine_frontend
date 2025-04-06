// App.jsx
import React, { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      alert("Login failed! Username or password incorrect.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Login
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition"
        >
          Log In
        </button>
      </div>
    </div>
  );
}

function MedicationSafety() {
  const [currentPrescription, setCurrentPrescription] = useState([
    "Aspirin",
    "Metformin",
  ]);
  const [previousPrescription1, setPreviousPrescription1] = useState([
    "Warfarin",
    "Atorvastatin",
  ]);
  const [previousPrescription2, setPreviousPrescription2] = useState([
    "Lisinopril",
    "Ibuprofen",
  ]);
  const [warnings, setWarnings] = useState([]);

  const handleCompare = () => {
    // 比對邏輯（這裡是模擬，可以改成打後端API）
    const allPreviousDrugs = [
      ...previousPrescription1,
      ...previousPrescription2,
    ];
    const conflicts = [];

    currentPrescription.forEach((drug) => {
      allPreviousDrugs.forEach((pastDrug) => {
        // 模擬簡單交互作用（假設任意配對都交互）
        conflicts.push(
          `⚠️ Possible interaction between ${drug} and ${pastDrug}`
        );
      });
    });

    setWarnings(conflicts);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Smart Medication Safety
      </h1>

      {/* 顯示藥單 */}
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* 本次藥單 */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Current Prescription
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {currentPrescription.map((drug, index) => (
              <li key={index}>{drug}</li>
            ))}
          </ul>
        </div>

        {/* 上次藥單1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Previous Visit 1
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {previousPrescription1.map((drug, index) => (
              <li key={index}>{drug}</li>
            ))}
          </ul>
        </div>

        {/* 上次藥單2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Previous Visit 2
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {previousPrescription2.map((drug, index) => (
              <li key={index}>{drug}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 比對按鈕 */}
      <button
        onClick={handleCompare}
        className="mb-8 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
      >
        Compare Prescriptions
      </button>

      {/* 顯示比對結果 */}
      {warnings.length > 0 && (
        <div className="w-full max-w-2xl bg-red-50 border border-red-300 text-red-700 shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Warnings</h2>
          <ul className="list-disc list-inside space-y-2">
            {warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <MedicationSafety />
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
