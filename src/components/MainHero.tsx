import React, { useState, useEffect } from "react";
import { Radio, Heart, Star, MessageSquare, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import f from "../assets/f.png";

const AnimatedHeroChat = () => {
  // Previous price data and messages state remain the same
  const priceData = [
    { time: '1h', price: 0.00042 },
    { time: '2h', price: 0.00045 },
    { time: '3h', price: 0.00040 },
    { time: '4h', price: 0.00048 },
    { time: '5h', price: 0.00052 },
    { time: '6h', price: 0.00050 },
    { time: '7h', price: 0.00055 },
    { time: '8h', price: 0.00060 },
  ];

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
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4 justify-center">
        {/* Left Column: VTuber Avatar */}
        <div className="w-full lg:w-1/2">
          {/* VTuber Stream Container */}
          <div
            className="relative group h-[calc(100vh-2rem)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Previous stream container content remains the same */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500/20 rounded-full animate-pulse delay-700"></div>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-[#FCFCE6] border-4 border-black p-4 h-full">
              {/* Live Button */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full flex items-center gap-2 z-20">
                <Radio className="w-4 h-4 animate-pulse" />
                <span className="font-bold">LIVE</span>
              </div>
 
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

              <div
                className="relative h-full"
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
        </div>

        {/* Right Column: Chart and Chat */}
        <div className="lg:w-1/3 flex flex-col gap-4 h-[calc(100vh-2rem)]">
          {/* Price Chart */}
          <div className="bg-[#FCFCE6] border-4 border-black rounded-3xl p-4 h-1/3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <h3 className="font-bold text-lg">$MEME Price</h3>
              </div>
              <div className="bg-green-500 px-3 py-1 rounded-full">
                <span className="text-white font-bold">+15.4%</span>
              </div>
            </div>
            <div className="h-[calc(100%-3rem)]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <XAxis dataKey="time" />
                  <YAxis 
                    domain={['auto', 'auto']}
                    tickFormatter={(value) => value.toFixed(5)}
                  />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chat Section */}
          <div className="bg-[#FCFCE6] border-4 border-black rounded-3xl overflow-hidden h-2/3">
            <div className="bg-black p-4 flex items-center justify-between">
              <h2 className="text-white font-bold text-xl font-mono">
                Live Chat
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white text-sm">324 chatting</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono h-[calc(100%-8rem)]">
              {messages.map((msg, index) => (
                <div key={index} className="flex items-start gap-2 animate-fadeIn">
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