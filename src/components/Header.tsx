const Header = () => {
  return (
    <div>
      <header className="bg-[#FCFCE6] border-b-2 border-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 animate-[bounce_1s_ease-in-out_infinite]"></div>
        <div className="max-w-7xl mx-auto py-4">
          <div className="flex justify-between items-center px-8">
            <div className="flex-1 flex items-center">
              <span className="font-black text-6xl tracking-wider"
                    style={{
                      fontFamily: "'Bangers', cursive",
                      letterSpacing: "0.1em"
                    }}>
                <span className="text-yellow-400"
                      style={{
                        textShadow: "4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000"
                      }}>
                  MEME
                </span>
                <span className="text-white ml-2"
                      style={{
                        textShadow: "4px 4px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000"
                      }}>
                  TUBER
                </span>
              </span>
            </div>
            <nav className="flex-1 flex justify-end items-center">
              {["HOME", "FEATURES", "PRICING", "DASHBOARD", "CONTACT"].map(
                (item) => (
                  <button
                    key={item}
                    className="font-bold text-lg px-6 py-3 mx-2 hover:text-yellow-400 transition-colors duration-300"
                    style={{
                      fontFamily: "'Bangers', cursive",
                      letterSpacing: "0.05em",
                      textShadow: "1px 1px 0px #000"
                    }}
                  >
                    {item}
                  </button>
                )
              )}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

  export default Header;
