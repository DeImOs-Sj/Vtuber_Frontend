import { Radio } from "lucide-react";
import d from "../assets/d.png";

const VTuberStreamPromo = () => {
  const StreamSection = ({
    bgColor,
    streamTitle = "Neko Chan",
  }: {
    bgColor: string;
    streamTitle?: string;
  }) => (
    <div className="w-full">
      <div className={`relative ${bgColor} p-4 sm:p-6 rounded-3xl`}>
        {/* Live Indicator */}
        <div className="absolute top-2 left-4 flex items-center gap-2">
          <Radio className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 animate-pulse" />
          <span className="font-bold text-sm sm:text-base">LIVE NOW</span>
        </div>

        {/* Stream Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-8">
          {/* Main Stream */}
          <div className="col-span-2 row-span-2">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              <img
                src={d}
                alt="Main VTuber"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 sm:px-3 py-1 rounded-full">
                <span className="text-white font-bold text-sm sm:text-base">
                  {streamTitle}
                </span>
              </div>
            </div>
          </div>

          {/* Side Streams */}
          <div className="col-span-2 space-y-2 sm:space-y-4">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              <img
                src={d}
                alt="Guest VTuber 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded-full">
                <span className="text-white text-xs sm:text-sm">
                  Pixel Panda
                </span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              <img
                src={d}
                alt="Guest VTuber 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded-full">
                <span className="text-white text-xs sm:text-sm">
                  Mochi Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TextContent = () => (
    <div className="w-full space-y-4 sm:space-y-6">
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold"
        style={{
          textShadow: "2px 2px 0 #000",
          fontFamily: "monospace",
        }}
      >
        <span className="block transform -rotate-2 inline-block bg-[#bbb4f1] px-4 py-2 mb-2 border-2 border-black">
          Go Live or Record
        </span>
        <span className="block transform rotate-1 inline-block bg-red-300 px-4 py-2 border-2 border-black">
          Streams with Friends
        </span>
      </h2>

      <p
        className="text-base sm:text-lg lg:text-xl font-bold leading-relaxed"
        style={{
          textShadow: "1px 1px 0 #000",
          fontFamily: "monospace",
        }}
      >
        It's easy for VTubers to join from their browser or phone in a few
        clicks. No software downloads needed!
      </p>
    </div>
  );

  return (
    <section className="mx-auto p-4 sm:p-6 lg:p-8" id="features">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
        {/* First Stream Section */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12 flex-1">
          <div className="w-full md:w-1/2">
            <StreamSection bgColor="bg-amber-300" streamTitle="Neko Chan" />
          </div>
          <div className="w-full md:w-1/2">
            <TextContent />
          </div>
        </div>

        {/* Second Stream Section */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-12 flex-1">
          <div className="w-full md:w-1/2">
            <StreamSection bgColor="bg-[#bcd4ff]" streamTitle="Pixel Master" />
          </div>
          <div className="w-full md:w-1/2">
            <TextContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VTuberStreamPromo;
