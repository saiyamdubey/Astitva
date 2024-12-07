import React, { useState } from 'react';
import './Chatbot.css';

interface Message {
    role: 'user' | 'bot';
    content: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = async (message: string) => {
        if (!message.trim()) return;

        const userMessage: Message = { role: "user", content: message };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");

        try {
            const response = await fetch("https://astitva-backend.onrender.com/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: userMessage.content })
            });

            if (!response.ok) throw new Error("Server error");

            const data = await response.json();
            const botMessage: Message = { role: "bot", content: data.reply };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: "bot", content: "Sorry, I'm having trouble responding right no." }
            ]);
        }
    };

    return (
        <div className="chatbot-container fixed bottom-4 right-4 z-50 mb-10 mr-6">
        {!isOpen ? (
          <button
            className="chatbot-icon bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg focus:outline-none transition-all duration-300 md:p-4"
            onClick={toggleChat}
          >
            💬
          </button>
        ) : (
          <div className="chatbot bg-white dark:bg-neutral-900 shadow-xl rounded-lg mb-10 mr-6 w-[80%] md:w-[450px] h-[60%] md:h-[600px] fixed bottom-4 right-4 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="chatbot-header flex justify-between items-center bg-teal-500 text-black p-3 md:p-4 shadow-md">
              <h4 className="text-lg md:text-xl font-semibold">Ask Astitva</h4>
              <button
                className="text-lg font-bold hover:text-teal-200 transition-all"
                onClick={toggleChat}
              >
                <img src="https://cdn-icons-png.flaticon.com/128/9339/9339208.png" alt="" className='text-lg font-bold hover:text-teal-200 transition-all w-9 h-9'/>
              </button>
            </div>
      
            {/* Chat Window */}
            <div className="chat-window flex-1 p-3 overflow-y-auto space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.role === "user" ? "text-right" : "text-left"
                  } p-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-teal-100 dark:bg-teal-800 text-teal-900 dark:text-teal-100"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>
      
            {/* Input Area */}
            <div className="input-area p-3 flex gap-2 border-t dark:border-gray-800">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                onKeyPress={(e) => e.key === "Enter" && sendMessage(input)}
                className="flex-1 p-2 border rounded-lg dark:bg-neutral-800 dark:border-gray-700 text-sm md:text-base"
              />
              <button
                onClick={() => sendMessage(input)}
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 focus:outline-none transition-all text-sm md:text-base"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
      
    );
};

export default Chatbot;
