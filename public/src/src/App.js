import React, { useState } from "react";
import CardicGPT from "./CardicGPT";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      step === 0 &&
      input.trim() ===
        "Zira-9 Echo Alpha. Return key: Asin fell, Ziran rose"
    ) {
      setStep(1);
      setInput("");
    } else if (
      step === 1 &&
      input.trim() ===
        "Sereth Keln active. Recursive author entering Foldspace"
    ) {
      setUnlocked(true);
    }
  };

  if (!unlocked) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h2>🔒 CardicGPT Locked</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter activation phrase"
          />
          <button type="submit">Unlock</button>
        </form>
        {step === 1 && <p>✅ First phrase correct. Enter final phrase.</p>}
      </div>
    );
  }

  return <CardicGPT />;
}
