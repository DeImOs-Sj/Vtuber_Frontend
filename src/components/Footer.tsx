const Footer = () => {
  return (
    <footer className="relative">
      {/* Checkered Pattern Top Border */}
      <div className="h-8 w-full bg-[url('data:image/png;base64,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')]"></div>

      <div className="bg-[#FFF8E7] p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Links Section */}
            <div>
              <h3 className="font-bold mb-4">STREAMING ATTIC</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Stream Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    VTuber Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gaming Zone
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Care Section */}
            <div>
              <h3 className="font-bold mb-4">CUSTOMER CARE</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs & Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Size Guide
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
                >
                  t
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
                >
                  i
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
                >
                  y
                </a>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className=" p-4 rounded-lg shadow-lg w-[30rem] border-2 border-black">
              <h3 className="font-bold mb-4">JOIN OUR MAILING LIST!</h3>
              <form className="space-y-4 p-2 ">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-2 rounded border-2 border-black"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-2 rounded border-2 border-black"
                  />
                </div>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="p-2 rounded-l border-2 border-r-0 border-black flex-grow"
                  />
                  <button className="bg-[#FFA500] text-black font-bold px-4 py-2 rounded-r border-2 border-black">
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-8 border-t border-gray-300 pt-6">
            <div className="flex gap-4 justify-center">
              <img src="/api/placeholder/40/25" alt="Visa" className="h-6" />
              <img
                src="/api/placeholder/40/25"
                alt="Mastercard"
                className="h-6"
              />
              <img src="/api/placeholder/40/25" alt="PayPal" className="h-6" />
              <img src="/api/placeholder/40/25" alt="Stripe" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
