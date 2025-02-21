import React from "react";
import a from "../assets/a.jpg";
import b from "../assets/b.jpeg";
import c from "../assets/c.jpeg";
import { motion } from "framer-motion";
import { Sparkles, Star, Play, Tv } from "lucide-react";

const Main = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className="container  p-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500/10 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/10 rounded-full animate-ping"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Left side - Main image */}
        <div className="w-full lg:w-1/2 relative group">
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl 
                        transform group-hover:scale-105 transition-transform duration-500"
          ></div>
          <div className="rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img
              src={a}
              alt="Main VTuber"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            {/* Animated overlay elements */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white font-bold">FEATURED</span>
            </div>
            <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-yellow-400 animate-bounce z-20" />
          </div>
        </div>

        {/* Right side - Grid layout and text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-evenly gap-8">
          {/* Grid of VTuber thumbnails */}
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden relative cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <img
                  src={c}
                  alt={`VTuber ${i}`}
                  className="w-full h-full object-cover"
                />
                {hoveredIndex === i && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <Play className="w-12 h-12 text-white animate-pulse" />
                  </div>
                )}
                <div className="absolute bottom-2 left-2 z-20 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white text-sm font-bold">
                    Channel {i}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Text section below grid */}
          <div className="max-w-4xl mx-auto p-8 space-y-6">
            <div className="flex flex-col gap-6">
              {/* Main Title */}
              <h1
                className="text-5xl font-bold text-red-500"
                style={{
                  textShadow: "2px 2px 0 #000",
                  fontFamily: "monospace",
                }}
              >
                Watch your favorite VTubers
              </h1>

              {/* Description Text */}
              <p
                className="text-2xl font-bold leading-relaxed"
                style={{
                  textShadow: "1px 1px 0 #000",
                  fontFamily: "monospace",
                }}
              >
                Our streams are available live or archived, and whole or in
                clips. Methods have been developed to overcome challenges such
                as stream lag and provide the best viewing experience.
              </p>
            </div>
          </div>
          <button
            className="bg-black w-1/2 hover:bg-green-500 text-white px-4 py-2 rounded flex items-center  transition-colors justify-center font-bold text-2xl "
            style={{
              textShadow: "2px 2px 0 #000",
              fontFamily: "monospace",
            }}
          >
            {/* <Link /> */}
            STREAM NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
