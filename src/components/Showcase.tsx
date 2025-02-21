import { Radio } from "lucide-react";
import d from "../assets/d.png";

const VTuberStreamPromo = () => {
  return (
    <div className=" mx-auto p-8">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side - Stream Preview */}
          <div className="w-full md:w-1/2">
            <div className="relative bg-amber-300 p-6 rounded-3xl">
              {/* Live Indicator */}
              <div className="absolute top-0 left-4 flex items-center gap-2">
                <Radio className="w-6 h-6 text-red-500 animate-pulse" />
                <span className="font-bold">LIVE NOW</span>
              </div>

              {/* Stream Grid */}
              <div className="grid grid-cols-4 gap-4">
                {/* Main Stream */}
                <div className="col-span-2 row-span-2">
                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <img
                      src={d}
                      alt="Main VTuber"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-3 py-1 rounded-full">
                      <span className="text-white font-bold">Neko Chan</span>
                    </div>
                  </div>
                </div>

                {/* Side Streams */}
                <div className="col-span-2 space-y-4">
                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <img
                      src={d}
                      alt="Guest VTuber 1"
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded-full">
                      <span className="text-white text-sm">Pixel Panda</span>
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <img
                      src={d}
                      alt="Guest VTuber 2"
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded-full">
                      <span className="text-white text-sm">Mochi Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 space-y-6 ">
            <h2
              className="text-5xl font-bold "
              style={{
                textShadow: "2px 2px 0 #000",
                fontFamily: "monospace",
              }}
            >
              <span className="block transform -rotate-2 inline-block bg-[#bbb4f1] px-4 py-2 mb-2 border">
                Go Live or Record
              </span>
              <span className="block transform rotate-1 inline-block bg-red-300 px-4 py-2 border">
                Streams with Friends
              </span>
            </h2>

            <p
              className="text-xl font-bold leading-relaxed"
              style={{
                textShadow: "1px 1px 0 #000",
                fontFamily: "monospace",
              }}
            >
              It's easy for VTubers to join from their browser or phone in a few
              clicks. No software downloads needed!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side - Stream Preview */}
          <div className="w-full md:w-1/2">
            <div className="relative bg-[#bcd4ff] p-6 rounded-3xl">
              {/* Live Indicator */}
              <div className="absolute top-0  left-4 flex items-center gap-2">
                <Radio className="w-6 h-6 text-red-500 animate-pulse" />
                <span className="font-bold">LIVE NOW</span>
              </div>

              {/* Stream Grid */}
              <div className="grid grid-cols-4 gap-4">
                {/* Main Stream */}
                <div className="col-span-2 row-span-2">
                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <img
                      src={d}
                      alt="Main VTuber"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-3 py-1 rounded-full">
                      <span className="text-white font-bold">Neko Chan</span>
                    </div>
                  </div>
                </div>

                {/* Side Streams */}
                <div className="col-span-2 space-y-4">
                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <img
                      src={d}
                      alt="Guest VTuber 1"
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded-full">
                      <span className="text-white text-sm">Pixel Panda</span>
                    </div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <img
                      src={d}
                      alt="Guest VTuber 2"
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-1 rounded-full">
                      <span className="text-white text-sm">Mochi Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2
              className="text-5xl font-bold"
              style={{
                textShadow: "2px 2px 0 #000",
                fontFamily: "monospace",
              }}
            >
              <span className="block transform -rotate-2 inline-block bg-[#bbb4f1] px-4 py-2 mb-2 border">
                Go Live or Record
              </span>
              <span className="block transform rotate-1 inline-block bg-red-300 px-4 py-2 border">
                Streams with Friends
              </span>
            </h2>

            <p
              className="text-xl font-bold leading-relaxed"
              style={{
                textShadow: "1px 1px 0 #000",
                fontFamily: "monospace",
              }}
            >
              It's easy for VTubers to join from their browser or phone in a few
              clicks. No software downloads needed!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VTuberStreamPromo;
