import d from "../assets/d.png";
import e from "../assets/e.mp4";

const Middle = () => {
  return (
    <div className="max-w-full mx-auto p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        {/* Left Section */}
        <div className="lg:col-span-7 space-y-4">
          {/* Top Section with Title and Star */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 border-black border-2 rounded-lg p-4 relative">
              <h2
                className="text-lg md:text-xl font-bold leading-relaxed"
                style={{
                  textShadow: "1px 1px 0 #000",
                  fontFamily: "monospace",
                }}
              >
                Create AI VTubers for Your Memecoin Project
              </h2>
              {/* Black Star Button */}
              <div className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2">
                <div className="absolute inset-0 bg-black transform rotate-45"></div>
                <div
                  className="relative bg-black text-white p-4 md:p-6 transform rotate-12 
                          flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                >
                  <div className="transform -rotate-12 text-center">
                    <div className="font-bold text-sm md:text-base">Start</div>
                    <div className="text-xs md:text-sm">Now</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="w-full md:w-1/2 rounded-lg p-4 border-black border-2">
              <p
                className="text-base md:text-xl font-bold leading-relaxed"
                style={{
                  textShadow: "1px 1px 0 #000",
                  fontFamily: "monospace",
                }}
              >
                Transform your memecoin community with AI-powered VTubers.
                Real-time price tracking, automated interactions, and smart
                rewards system to boost engagement and create unique
                experiences.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-black">
            <video
              src={e}
              className="w-full h-full object-cover"
              loop
              autoPlay
              playsInline
              muted
            />
          </div>

          {/* Bottom Section with Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-black text-white rounded-lg p-3 md:p-4 flex items-center justify-between cursor-pointer hover:bg-gray-800 transition-colors">
              <span className="text-sm md:text-base">
                View Live VTuber Streams
              </span>
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="bg-red-500 text-white rounded-lg p-3 md:p-4 flex items-center justify-between cursor-pointer hover:bg-red-600 transition-colors">
              <span className="text-sm md:text-base">
                Deploy Your Memecoin VTuber
              </span>
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Center Divider - Hidden on mobile */}
        <div className="hidden lg:flex lg:col-span-1 justify-center bg-black rounded-2xl">
          <div className="h-full w-1 bg-black rounded-full relative">
            <div
              className="absolute top-1/2 -translate-y-1/2 -right-10 
                          bg-[#ffd700] text-black px-3 py-1 rounded-full 
                          text-sm font-bold h-32 flex items-center"
            >
              <h1>AI VTubers</h1>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-4 h-[300px] md:h-[500px] lg:h-auto">
          <div className="h-full rounded-lg overflow-hidden border-2 border-black">
            <img
              src={d}
              alt="Featured Image"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
