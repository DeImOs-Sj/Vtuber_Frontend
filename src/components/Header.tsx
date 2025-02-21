import Logo from "../assets/Dragon-Ball-Logo-2012-present.jpg";
const Header = () => {
  return (
    <div>
      <header className="bg-[#FCFCE6] border-b-2 border-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 animate-[bounce_1s_ease-in-out_infinite]"></div>
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src={Logo}
                alt="logo"
                className="w-40 h-20 "
                style={{
                  background: "transparent",
                  mixBlendMode: "normal",
                }}
              />
              <div className="flex items-center">
                <span
                  className="font-bold text-2xl"
                  style={{
                    textShadow: "2px 2px 0 #000",
                    fontFamily: "monospace",
                  }}
                >
                  V
                </span>
                <span
                  className="text-2xl font-bold text-red-500 ml-2"
                  style={{
                    textShadow: "2px 2px 0 #000",
                    fontFamily: "monospace",
                  }}
                >
                  Tuber
                </span>
              </div>
            </div>
            <nav className="flex gap-8">
              {["HOME", "MENU", "LOCATION", "CRAFT BEER", "CONTACT"].map(
                (item) => (
                  <button
                    key={item}
                    className="font-bold hover:text-yellow-500 transition-colors hover:animate-pulse"
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
