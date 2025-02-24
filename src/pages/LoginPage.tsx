import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Retro Animation */}
        <div className="w-full lg:w-1/2 p-4 md:p-8 lg:p-12 relative">
          {/* Background Elements */}
          <div className="absolute top-1.5 left-4.5 w-32 h-32">
            <div className="w-16 h-16 border-t-4 border-l-4 border-black opacity-60"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 mt-8 lg:mt-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-2">
              JOIN
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-2">
              MEME
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
              TUBER
            </h1>

            {/* Decorative Lines */}
            <div className="mt-4 lg:mt-8 space-y-2">
              <div className="w-24 lg:w-32 h-1 bg-black"></div>
              <div className="w-20 lg:w-24 h-1 bg-black opacity-60"></div>
              <div className="w-16 h-1 bg-black opacity-40"></div>
            </div>

            {/* Additional Text */}
            <div className="mt-6 lg:mt-12">
              <p className="text-lg lg:text-xl font-medium opacity-75 max-w-md">
                Join the revolution of content creators and make your mark in
                the digital world
              </p>
            </div>

            {/* Retro Decorative Elements - Hide on small screens */}
            <div className="hidden md:block absolute bottom-0 left-0 opacity-10">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 border-2 border-black mb-2"
                ></div>
              ))}
            </div>

            {/* Circle Pattern - Hide on small screens */}
            <div className="hidden md:block absolute -right-8 bottom-12 opacity-20">
              <div className="w-24 h-24 border-4 border-black rounded-full"></div>
              <div className="w-16 h-16 border-4 border-black rounded-full -mt-20 ml-12"></div>
            </div>

            {/* Stats Section */}
            <div className="mt-8 lg:mt-16 flex gap-6 lg:gap-12">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold">50K+</h3>
                <p className="text-sm font-medium opacity-75">Active Users</p>
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold">24/7</h3>
                <p className="text-sm font-medium opacity-75">Live Support</p>
              </div>
            </div>
          </div>

          {/* Bottom Corner Decoration - Hide on small screens */}
          <div className="hidden md:block absolute -bottom-14.5 left-4.5 w-32 h-32">
            <div className="w-16 h-16 border-b-4 border-l-4 border-black opacity-60"></div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-12 bg-[#FCFCE6] relative">
          {/* Corner Decorations - Hide on small screens */}
          <div className="hidden md:block absolute top-1.5 right-1.5 w-32 h-32">
            <div className="w-16 h-16 border-t-4 border-r-4 border-black opacity-60"></div>
          </div>
          <div className="hidden md:block absolute -bottom-14.5 right-0 w-32 h-32">
            <div className="w-16 h-16 border-b-4 border-r-4 border-black opacity-60"></div>
          </div>

          {/* Form Container */}
          <div className="relative w-full max-w-md">
            <form className="relative p-4 md:p-8 bg-blue-200 flex flex-col items-start justify-center gap-4 md:gap-5 rounded-md border-2 border-black shadow-[4px_4px_black]">
              {/* Decorative Corner Lines */}
              <div className="absolute top-1.5 left-2 w-8 h-8 border-t-2 border-l-2 border-black opacity-30"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-black opacity-30"></div>

              <div className="text-[#323232] font-bold text-xl mb-4 md:mb-6">
                Welcome,
                <br />
                <span className="text-[#666] font-semibold text-lg">
                  sign up to continue
                </span>
              </div>

              <input
                className="w-full max-w-[300px] h-[40px] rounded-md border-2 border-black bg-[#f5f5dc] shadow-[4px_4px_black] 
                   text-[15px] font-semibold text-[#323232] px-3 py-1 outline-none 
                   placeholder:text-[#666] placeholder:opacity-80 focus:border-blue-500"
                name="email"
                placeholder="Email"
                type="email"
              />
              <input
                className="w-full max-w-[300px] h-[40px] rounded-md border-2 border-black bg-[#f5f5dc] shadow-[4px_4px_black] 
                   text-[15px] font-semibold text-[#323232] px-3 py-1 outline-none 
                   placeholder:text-[#666] placeholder:opacity-80 focus:border-blue-500"
                name="streamKey"
                placeholder="Stream Key"
                type="text"
              />
              <input
                className="w-full max-w-[300px] h-[40px] rounded-md border-2 border-black bg-[#f5f5dc] shadow-[4px_4px_black] 
                   text-[15px] font-semibold text-[#323232] px-3 py-1 outline-none 
                   placeholder:text-[#666] placeholder:opacity-80 focus:border-blue-500"
                name="secretKey"
                placeholder="Secret Key"
                type="password"
              />

              <div className="flex gap-5">
                <div
                  className="cursor-pointer w-10 h-10 rounded-full border-2 border-black bg-[#f5f5dc] 
                        shadow-[4px_4px_black] flex justify-center items-center text-xl"
                >
                  <b>t</b>
                </div>
                <div
                  className="cursor-pointer w-10 h-10 rounded-full border-2 border-black bg-[#f5f5dc] 
                        shadow-[4px_4px_black] flex justify-center items-center"
                >
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 56.6934 56.6934"
                    className="fill-black"
                  >
                    <path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z" />
                  </svg>
                </div>
              </div>

              <button
                className="mt-6 lg:mt-10 mx-auto w-[120px] h-[40px] rounded-md border-2 border-black bg-[#f5f5dc] 
                         shadow-[4px_4px_black] text-lg font-semibold text-[#323232] cursor-pointer 
                         transition-transform active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
              >
                Let's go →
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
