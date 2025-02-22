import a from "../assets/a.jpg";
import f1 from "../assets/1f.png";
import f2 from "../assets/2f.png";
import f3 from "../assets/3f.png";
import f4 from "../assets/f4.png";
import { Heart, MessageSquare } from "lucide-react";
import Workspace from "./Workspace";

const Main = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      {/* Main heading */}
      <div className="bg-[#FCFCE6] border-4 border-black rounded-xl p-6 mb-8">
        <h1 className="text-4xl font-bold text-center md:text-2xl">
          Top MemeTuber Streams
        </h1>
      </div>
      <Workspace />

      <div className="flex flex-col lg:flex-row gap-12 md:gap-6">
        {/* Left side - Featured stream */}
        <div className="w-full lg:w-2/5 relative">
          <div className="rounded-xl overflow-hidden relative cursor-pointer border-4 border-black">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img
              src={a}
              alt="Featured Stream"
              className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <div className="bg-black/80 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-bold">FEATURED LIVE</span>
                </div>
                <h2 className="text-white text-xl font-bold mb-1">
                  Crypto Market Analysis
                </h2>
                <p className="text-gray-300 text-sm">
                  Join MemeVTuber for live market updates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Stream grid and info */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          {/* Stream grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                image: f1,
                title: "PEPE Coin Analysis",
                streamer: "CryptoMemeKing",
                viewers: "1.2K",
                time: "2:30:15",
              },
              {
                image: f2,
                title: "DogeCoin To The Moon",
                streamer: "MoonWarrior",
                viewers: "856",
                time: "1:45:30",
              },
              {
                image: f3,
                title: "Weekly Meme Review",
                streamer: "MemeVTuber",
                viewers: "2.1K",
                time: "0:58:20",
              },
              {
                image: f4,
                title: "NFT Market Updates",
                streamer: "CryptoArtist",
                viewers: "1.5K",
                time: "1:15:45",
              },
            ].map((stream, i) => (
              <div key={i} className="relative group cursor-pointer">
                <div className="w-full h-[200px] bg-[#FCFCE6] rounded-xl border-4 border-black overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src={stream.image}
                    alt={stream.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0">
                    {/* Stream Info */}
                    <div className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded text-white text-sm font-bold">
                      LIVE
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 px-2 py-1 rounded text-white text-sm">
                      {stream.viewers} watching
                    </div>

                    {/* Interactive Icons */}
                    <div className="flex flex-col items-end p-2 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black p-1.5 rounded hover:bg-black/70">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-black p-1.5 rounded hover:bg-black/70">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Stream Details */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 text-white">
                      <div className="text-sm font-bold truncate">
                        {stream.title}
                      </div>
                      <div className="text-xs text-gray-300 flex justify-between items-center">
                        <span>{stream.streamer}</span>
                        <span className="bg-black px-2 py-0.5 rounded">
                          {stream.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="flex justify-center mt-6">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
