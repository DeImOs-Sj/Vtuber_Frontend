import d from "../assets/d.png";
import e from "../assets/e.mp4";

const Middle = () => {
  return (
    <div className="max-w-[100%] mx-auto p-8">
      <div className="grid grid-cols-12 gap-4">
        {/* Left Section */}
        <div className="col-span-7 space-y-4">
          {/* Top Section with Title and Star */}
          <div className="flex gap-2 ">
            <div className="flex flex-col items-start w-1/2  border-black border-2 rounded-lg p-4">
              <h2
                className="text-xl font-bold leading-relaxed"
                style={{
                  textShadow: "1px 1px 0 #000",
                  fontFamily: "monospace",
                }}
              >
                Create AI VTubers for Your Memecoin Project
              </h2>
              {/* Black Star Button */}
              <div className="relative mt-20 mb-20 left-40">
                <div className="absolute inset-0 bg-black transform rotate-45"></div>
                <div
                  className="relative bg-black text-white p-6 transform rotate-12 
                          flex items-center justify-center "
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                >
                  <div className="transform -rotate-12 text-center">
                    <div className="font-bold">Start</div>
                    <div className="text-sm">Now</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className=" rounded-lg p-4  w-1/2  border-black border-2">
              <p
                className="text-xl font-bold leading-relaxed"
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

          {/* Large Image Section */}

          {/* <div className=""> */}
          <div className="w-full aspect-video  rounded-lg overflow-hidden">
            <video
              src={e}
              className="w-full h-full object-cover"
              loop
              autoPlay
              playsInline
            />
          </div>
          {/* Bottom Section with Empty Box and Button */}
          <div className="grid grid-cols-2 gap-4 ">
            <button className="bg-black text-white rounded-lg p-4 flex items-center justify-between cursor-pointer">
              View Live VTuber Streams
              <svg
                className="w-6 h-6"
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
            <button className="bg-red-500 text-white rounded-lg p-4 flex items-center justify-between cursor-pointer">
              Deploy Your Memecoin VTuber
              <svg
                className="w-6 h-6"
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

        {/* Center Divider */}
        <div className="col-span-1 flex justify-center bg-black rounded-2xl">
          <div className="h-full w-1 bg-black rounded-full relative ">
            <div
              className="absolute top-1/2 -translate-y-1/2 -right-10 
                          bg-[#ffd700] text-black px-3 py-1 rounded-full 
                          text-sm font-bold h-[8rem]  "
            >
              <h1 className="pt-[38px]">AI VTubers</h1>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-4">
          <div className="aspect-[1/2] bg-gray-900 rounded-lg overflow-hidden">
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
