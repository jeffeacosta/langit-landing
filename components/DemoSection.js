"use client";

import { useEffect } from "react";
import { useState, useRef } from "react";

export default function DemoSection() {
  /**
   * 1. We store messages in state to mimic your chat logic.
   * 2. We keep references to the DOM nodes (chatHistory, userInput, previewContent) so we can manipulate them (scrollTop, etc.).
   * 3. The "publish" and "save" buttons are included as well.
   */

  const [messages, setMessages] = useState([
    { type: "user", text: "Create a landing page for our car dealership." },
    { type: "ai", text: "Got it! Creating a landing page for your dealership." },
  ]);

  // This will store the "predefined prompt" from your main.js
  const predefinedPrompt = `Make sure the whole design is clean, modern, and responsive.`;
  // Local state for user input
  const [userInput, setUserInput] = useState(predefinedPrompt);

  // Refs to DOM elements (like your main.js IDs)
  const chatHistoryRef = useRef(null);
  const previewContentRef = useRef(null);

  // "Publish" and "Save" button logic
  function handlePublish() {
    const html = previewContentRef.current?.innerHTML || "";
    if (!html.trim() || html.includes("Your preview will appear here")) {
      alert("There's nothing to publish yet!");
    } else {
      alert("Your page has been published!");
      console.log("Published Content:", html);
    }
  }

  function handleSave() {
    const html = previewContentRef.current?.innerHTML || "";
    if (!html.trim() || html.includes("Your preview will appear here")) {
      alert("There's nothing to save yet!");
    } else {
      localStorage.setItem("savedPage", html);
      alert("Your page has been saved!");
    }
  }

  // Handle the "Send" click logic (similar to main.js)
  function handleSend() {
    const trimmed = userInput.trim();
    if (!trimmed) return;

    // 1. Append user's message to chat
    setMessages((prev) => [
      ...prev,
      { type: "user", text: trimmed },
    ]);

    // 2. Simulate short delay, then AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Ensuring the design is clean, modern, and responsive!",
        },
      ]);
    }, 500);

    // 3. Update the preview with your landing page HTML if user typed something
    if (trimmed !== "") {
      if (previewContentRef.current) {
        previewContentRef.current.innerHTML = `
          <div style="font-family: Arial, sans-serif; background: #f8f9fa; padding: 40px; border-radius: 5px; max-width: 800px; margin: auto; text-align: center;">
            <!-- Hero Section -->
            <h1 style="font-size: 36px; color: #333; margin-bottom: 10px;">Find Your Perfect Car Today</h1>
            <p style="font-size: 20px; color: #555;">Quality cars at unbeatable prices.</p>
            <!-- Call-to-Action Button -->
            <div style="margin: 20px 0;">
              <button style="padding: 15px 30px; font-size: 20px; background-color: green; color: white; border: none; border-radius: 5px; cursor: pointer;">
                View Our Inventory
              </button>
            </div>
            <!-- Image of a Car -->
            <div style="margin: 30px 0;">
              <img src="carsplash.jpg" alt="Shiny Red Sports Car" style="width: 100%; max-width: 600px; border-radius: 10px; box-shadow: 0px 6px 12px rgba(0,0,0,0.2);">
            </div>
            <!-- Features Section -->
            <div style="display: flex; justify-content: space-around; margin-top: 40px;">
              <div style="text-align: center;">
                <h2 style="font-size: 24px; color: #007bff;">Low Prices</h2>
                <p style="color: #666;">We offer the best deals on all models.</p>
              </div>
              <div style="text-align: center;">
                <h2 style="font-size: 24px; color: #007bff;">Certified Quality</h2>
                <p style="color: #666;">All vehicles are fully inspected.</p>
              </div>
              <div style="text-align: center;">
                <h2 style="font-size: 24px; color: #007bff;">Financing Available</h2>
                <p style="color: #666;">Get your dream car with flexible plans.</p>
              </div>
            </div>
            <!-- Footer -->
            <footer style="margin-top: 40px; font-size: 16px; color: #777;">
              <p>Contact us | <a href="#" style="color: #007bff; text-decoration: none;">Privacy Policy</a></p>
            </footer>
          </div>
        `;
      }
    } else {
      if (previewContentRef.current) {
        previewContentRef.current.innerHTML = "Your preview will appear here...";
      }
    }

    // 4. Clear input
    setUserInput("");
  }

  // Use an effect to auto-scroll chat to bottom whenever messages change
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="max-w-6xl mx-auto my-8 p-4 rounded shadow">
      {/* Top Buttons (Undo, Redo, History, Save, Publish) if needed */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-bold">Langit Demo</div>
        <div className="flex space-x-2">
          {/* Undo, Redo, History - placeholders if you want them */}
          <button id="undo-button" className="px-2 py-1 border rounded">←</button>
          <button id="redo-button" className="px-2 py-1 border rounded">→</button>
          <button id="history-button" className="px-2 py-1 border rounded">🕒</button>
          {/* Save & Publish from main.js */}
          <button
            id="save-button"
            onClick={handleSave}
            className="px-2 py-1 border rounded"
          >
            Save
          </button>
          <button
            id="publish-button"
            onClick={handlePublish}
            className="px-2 py-1 border rounded"
          >
            Publish
          </button>
        </div>
      </div>

      {/* 2-Column Layout: Left = Chat, Right = Preview */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* LEFT COL - 500px high, scrollable chat */}
        <div className="flex flex-col w-full md:w-1/2" style={{ height: 500 }}>
          <h2 className="text-lg font-bold mb-2 text-center">Message Langit</h2>
          {/* Chat history area */}
          <div
            ref={chatHistoryRef}
            id="chat-history"
            className="flex-1 overflow-y-auto border rounded p-2"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-1 max-w-[70%] rounded-2xl px-3 py-2 text-sm ${
                  msg.type === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-300 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          {/* Text input & Send */}
          <div className="mt-2 flex">
            <textarea
              id="user-input"
              className="flex-grow p-2 rounded-l text-sm border"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              id="send-button"
              onClick={handleSend}
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-r"
            >
              Send
            </button>
          </div>
        </div>

        {/* RIGHT COL - 500px high, scrollable preview */}
        <div className="flex flex-col w-full md:w-1/2" style={{ height: 500 }}>
          <h2 className="text-lg font-bold mb-2 text-center">Website Generated</h2>
          <div
            id="preview"
            className="flex-1 overflow-y-auto border rounded p-2"
          >
            <div
              id="preview-content"
              ref={previewContentRef}
              className="text-sm"
            >
              Your preview will appear here...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
