import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    setMessages([...messages, { text: newMessage, sender: "You" }]);
    setNewMessage("");
  };

  return (
    <div className="p-4">
      <div className="border p-4 h-64 overflow-y-scroll">
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}: </strong>
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="p-2 border w-full"
      />
      <button
        onClick={sendMessage}
        className="mt-2 bg-green-500 text-white p-2 rounded-lg"
      >
        Send
      </button>
    </div>
  );
}
