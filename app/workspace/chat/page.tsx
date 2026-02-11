"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#E8EBF2] px-24 py-24">
      <h1 className="text-4xl mb-8">RM Chat</h1>

      <div className="bg-white/5 rounded-2xl p-6 h-[400px] overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className="mb-3 text-sm">
            {m}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-white/5 p-4 rounded-xl outline-none"
        />
        <button onClick={send} className="px-6 bg-indigo-500 rounded-xl">
          Send
        </button>
      </div>
    </main>
  );
}
