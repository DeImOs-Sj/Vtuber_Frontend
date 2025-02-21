import React, { useState, useEffect } from "react";
import { Radio, Heart, Star, MessageSquare } from "lucide-react";
import f from "../assets/f.png";

const AnimatedHeroChat = () => {
  const [messages, setMessages] = useState([
    {
      user: "CryptoFan_99",
      message: "Love the stream! 🚀",
      time: "2:31 PM",
      color: "#FF6B6B",
    },
    {
      user: "MoonWarrior",
      message: "To the moon! 💎",
      time: "2:32 PM",
      color: "#4ECDC4",
    },
    {
      user: "VTuberLover",
      message: "Amazing content as always! ✨",
      time: "2:33 PM",
      color: "#FFD93D",
    },
    {
      user: "BlockchainBro",
      message: "Holding strong! 💪",
      time: "2:34 PM",
      color: "#95E1D3",
    },
    {
      user: "CoinMaster",
      message: "Great analysis! 📊",
      time: "2:35 PM",
      color: "#F38181",
    },
  ]);

  const [isHovered, setIsHovered] = useState(false);

  // Animated background positions
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({
        x: Math.sin(Date.now() / 1000) * 10,
        y: Math.cos(Date.now() / 1000) * 10,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* VTuber Avatar Section */}
        <div
          className="w-full lg:w-3/5 relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500/20 rounded-full animate-pulse delay-700"></div>
          </div>

          {/* Main VTuber Image Container */}
          <div className="relative rounded-3xl overflow-hidden bg-[#FCFCE6] border-4 border-black p-4">
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 px-3 py-1 rounded-full z-20">
              <Radio className="w-4 h-4 text-white animate-pulse" />
              <span className="text-white font-bold text-sm">LIVE</span>
            </div>

            {/* Stats overlay */}
            <div className="absolute top-4 right-4 flex gap-4 z-20">
              <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-white text-sm">1.2k</span>
              </div>
              <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full">
                <MessageSquare className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm">324</span>
              </div>
            </div>

            {/* VTuber Image with Animation */}
            <div
              className="relative"
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <img
                src={f}
                alt="VTuber"
                className={`w-full h-full object-cover rounded-2xl transform 
                           ${isHovered ? "scale-105" : "scale-100"} 
                           transition-transform duration-500`}
              />
            </div>

            {/* Interactive elements */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
              <div className="bg-black/50 px-4 py-2 rounded-full">
                <span className="text-white font-bold">AnimeVTuber_01</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((star) => (
                  <Star
                    key={star}
                    className="w-6 h-6 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${star * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="w-full lg:w-2/5">
          <div className="bg-[#FCFCE6] border-4 border-black rounded-3xl overflow-hidden h-[600px] flex flex-col">
            <div className="bg-black p-4 flex items-center justify-between">
              <h2
                className="text-white font-bold text-xl"
                style={{ fontFamily: "monospace" }}
              >
                Live Chat
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white text-sm">324 chatting</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4"
              style={{ fontFamily: "monospace" }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 animate-fadeIn"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-white text-xs">
                      {msg.user.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold" style={{ color: msg.color }}>
                      {msg.user}
                    </span>
                    <span className="text-gray-400 text-xs ml-2">
                      {msg.time}
                    </span>
                    <p className="text-black mt-1">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t-4 border-black">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Send a message..."
                  className="flex-1 px-4 py-2 rounded-full border-2 border-black focus:outline-none focus:border-purple-500"
                />
                <button className="bg-purple-500 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-600 transition-colors">
                  Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeroChat;
