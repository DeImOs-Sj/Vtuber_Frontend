import { Radio } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Thumbnail from "../assets/f4.png";
const ExploreCards = () => {
  const liveStreams = [
    {
      id: 1,
      title: "Neko Gaming Hour 🎮",
      streamer: "NekoChan",
      viewers: "15.3K",
      category: "Gaming",
      thumbnail: Thumbnail,
      tags: ["English", "Entertainment"],
    },
    {
      id: 2,
      title: "Pixel Art & Chill ✨",
      streamer: "PixelPanda",
      viewers: "8.4K",
      category: "Art",
      thumbnail: Thumbnail,
      tags: ["Creative", "Art"],
    },
    {
      id: 3,
      title: "Late Night Stream 🌙",
      streamer: "MochiLive",
      viewers: "41.9K",
      category: "Just Chatting",
      thumbnail: Thumbnail,
      tags: ["English", "Cozy"],
    },
    {
      id: 4,
      title: "Meme Review Time!",
      streamer: "DankMemer",
      viewers: "10K",
      category: "Entertainment",
      thumbnail: Thumbnail,
      tags: ["Memes", "Fun"],
    },
    {
      id: 5,
      title: "Anime Discussion 🎌",
      streamer: "OtakuPro",
      viewers: "23K",
      category: "Anime",
      thumbnail: Thumbnail,
      tags: ["Anime", "Discussion"],
    },
  ];
  const navigate = useNavigate();
  const handleClick = (streamId: number) => {
    console.log("Stream Clicked!");
    navigate(`/streams/:${streamId}`);
  };

  return (
    <section className=" mx-auto p-4 md:p-8">
      {/* Section Header */}
      <div className="mb-8">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{
            fontFamily: "'Bangers', cursive",
            letterSpacing: "0.05em",
            textShadow: "2px 2px 0 #000",
          }}
        >
          <span className="bg-[#bbb4f1] px-4 py-2 inline-block transform -rotate-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Live Streams
          </span>
        </h2>
      </div>

      {/* Stream Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {["All", "Gaming", "Art", "Music", "Just Chatting", "Anime"].map(
          (category) => (
            <button
              key={category}
              className="px-4 py-2 bg-[#f5f5dc] border-2 border-black rounded-full font-bold whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Streams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {liveStreams.map((stream, index) => (
          <div key={index} className="group relative">
            {/* Thumbnail */}
            <div
              className="relative rounded-xl overflow-hidden border-2 border-black cursor-pointer"
              onClick={() => handleClick(stream.id)}
            >
              <img
                src={stream.thumbnail}
                alt={stream.title}
                className="w-full aspect-video object-cover"
              />
              {/* Live Badge */}
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-red-500 px-2 py-1 rounded-full">
                <Radio className="w-4 h-4 text-white animate-pulse" />
                <span className="text-white text-sm font-bold">LIVE</span>
              </div>
              {/* Viewer Count */}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded-full">
                <span className="text-white text-sm">
                  {stream.viewers} viewers
                </span>
              </div>
            </div>

            {/* Stream Info */}
            <div className="mt-3 space-y-1 cursor-pointer">
              <h3 className="font-bold text-lg leading-tight">
                {stream.title}
              </h3>
              <p className="text-gray-700">{stream.streamer}</p>
              <p className="text-gray-600 text-sm">{stream.category}</p>
              <div className="flex gap-2">
                {stream.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-[#bbb4f1] px-2 py-1 rounded-full border border-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 rounded-xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCards;
