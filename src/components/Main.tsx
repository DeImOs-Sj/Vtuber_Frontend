import React from "react";
import a from "../assets/a.jpg";
import b from "../assets/b.jpeg";
import c from "../assets/c.jpeg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Main image */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-3xl overflow-hidden">
            <img src={a} alt="anime" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right side - Grid layout and text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-evenly gap-6">
          {/* Grid layout */}
          <div className="grid grid-cols-3 gap-4">
            {/* First column */}
            <div className="rounded-3xl overflow-hidden">
              <img src={c} alt="anime" className="w-full h-full object-cover" />
            </div>

            {/* Second column */}
            <div className="rounded-3xl overflow-hidden">
              <img src={c} alt="anime" className="w-full h-full object-cover" />
            </div>

            {/* Third column */}
            <div className="rounded-3xl overflow-hidden">
              <img src={c} alt="anime" className="w-full h-full object-cover" />
            </div>
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
