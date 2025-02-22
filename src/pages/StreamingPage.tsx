import { useState } from "react";
// import { useParams } from "react-router-dom";
import { Radio, Heart, MessageSquare, Send } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import Character from "../assets/f4.png";

const StreamDetails = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   const { id } = useParams();
  const [message, setMessage] = useState("");

  // Dummy data for the price chart
  const priceData = Array.from({ length: 20 }, (_, i) => ({
    time: `${i}:00`,
    value: 0.0004 + Math.random() * 0.0006,
  }));

  // Dummy chat messages
  const chatMessages = [
    { user: "CryptoFan_99", message: "Love the stream! 🚀", time: "2:31 PM" },
    { user: "MoonWarrior", message: "To the moon! 💎", time: "2:32 PM" },
    {
      user: "vTuberLover",
      message: "Amazing content as always! ✨",
      time: "2:33 PM",
    },
    { user: "BlockchainBro", message: "Holding strong! 💪", time: "2:34 PM" },
    { user: "CoinMaster", message: "Great analysis! 📊", time: "2:35 PM" },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCE6] ">
      <div className="mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Stream and Info */}
        <div className="lg:col-span-2 space-y-4">
          {/* Stream Container */}
          <div className="relative aspect-video bg-black rounded-xl border-2 border-black overflow-hidden">
            <img
              src="/api/placeholder/1200/675"
              alt="Stream Preview"
              className="w-full h-full object-cover"
            />
            {/* Live Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 px-3 py-1 rounded-full">
              <Radio className="w-4 h-4 text-white animate-pulse" />
              <span className="text-white font-bold">LIVE</span>
            </div>
            {/* Stream Stats */}
            <div className="absolute top-4 right-4 flex gap-4">
              <div className="flex items-center gap-1 bg-black bg-opacity-70 px-3 py-1 rounded-full">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-white">1.2k</span>
              </div>
              <div className="flex items-center gap-1 bg-black bg-opacity-70 px-3 py-1 rounded-full">
                <MessageSquare className="w-4 h-4 text-white" />
                <span className="text-white">324</span>
              </div>
            </div>
          </div>

          {/* Stream Info */}
          <div className="bg-[#008080] p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-2xl font-bold mb-2 text-white">
              Neko Gaming Hour 🎮
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={Character}
                alt="Streamer"
                className="w-10 h-10 rounded-full border-2 border-black"
              />
              <div>
                <h2 className="font-bold text-white">NekoChan</h2>
                <p className="text-sm  text-white">15.3K followers</p>
              </div>
            </div>
            <p className=" text-white">
              Join me for some awesome gaming action! Don't forget to follow and
              subscribe! 🎮✨
            </p>
          </div>
        </div>

        {/* Right Sidebar - Price Chart and Chat */}
        <div className="space-y-4">
          {/* Price Chart */}
          <div className="bg-[#b4c5ff] p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">$MEME Price</h3>
              <span className="text-green-500 font-bold">+15.4%</span>
            </div>
            <LineChart width={320} height={200} data={priceData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                dot={false}
              />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>

          {/* Live Chat */}
          <div className="bg-[#b4c5ff] rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="p-4 border-b-2 border-black">
              <h3 className="font-bold">Live Chat</h3>
              <p className="text-sm text-gray-600">324 chatting</p>
            </div>

            {/* Chat Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#bbb4f1] flex items-center justify-center border border-black">
                    {msg.user[0]}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold">{msg.user}</span>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    <p className="text-gray-700">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t-2 border-black">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Send a message..."
                  className="flex-1 px-4 py-2 rounded-full border-2 border-black bg-[#f5f5dc] focus:outline-none focus:border-[#bbb4f1]"
                />
                <button className="p-2 bg-[#bbb4f1] rounded-full border-2 border-black hover:bg-[#a5a0d8] transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamDetails;
