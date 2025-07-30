import React, { useState } from "react";

export default function CardicGPT() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "You", text: input };
    setMessages((prev) => [...prev, userMsg]);

    let reply = "I'm CardicGPT 🤖, your AI assistant!";

    if (input.toLowerCase().includes("gold")) {
      reply =
        "CNgpt says: Gold bias looks bullish, watch key levels around 2400!";
    }

    setMessages((prev) => [...prev, { sender: "CNgpt", text: reply }]);
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>💠 CardicGPT Active</h2>
      <div
        style={{
          border: "1px solid #ccc",
          height: 300,
          overflowY: "auto",
          padding: 10,
          marginBottom: 10,
        }}
      >
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
