import { Check, Star, Zap, Crown } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "19",
      icon: <Star className="w-6 h-6" />,
      color: "bg-[#bbb4f1]",
      features: [
        "1 AI VTuber Character",
        "Basic Stream Features",
        "720p Streaming Quality",
        "Community Chat",
        "5 Hours Monthly Streaming",
      ],
    },
    {
      name: "Pro",
      price: "49",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-amber-300",
      popular: true,
      features: [
        "3 AI VTuber Characters",
        "Advanced Stream Features",
        "1080p Streaming Quality",
        "Custom Emotes",
        "Unlimited Streaming",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: "99",
      icon: <Crown className="w-6 h-6" />,
      color: "bg-red-300",
      features: [
        "Unlimited VTubers",
        "Premium Features",
        "4K Streaming Quality",
        "Custom Branding",
        "API Access",
        "24/7 Support",
        "Analytics Dashboard",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCE6] pt-20 pb-12">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{
            fontFamily: "'Bangers', cursive",
            letterSpacing: "0.1em",
            textShadow: "2px 2px 0 #000",
          }}
        >
          <span className="bg-[#bbb4f1] px-6 py-2 inline-block transform -rotate-1 border-2 border-black">
            Choose Your Plan
          </span>
        </h1>
        <p
          className="text-xl font-bold max-w-2xl mx-auto"
          style={{
            fontFamily: "monospace",
            textShadow: "1px 1px 0 #000",
          }}
        >
          Level up your streaming game with our AI-powered VTuber solutions!
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative ${
                plan.popular ? "transform lg:-translate-y-4" : ""
              }`}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full border-2 border-black font-bold text-sm"
                  style={{ fontFamily: "monospace" }}
                >
                  MOST POPULAR
                </div>
              )}
              <div
                className={`${plan.color} rounded-xl border-2 border-black p-6 space-y-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow`}
              >
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                    {plan.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Bangers', cursive" }}
                  >
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="text-center border-y-2 border-black py-4">
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-2xl font-bold">$</span>
                    <span
                      className="text-6xl font-black"
                      style={{ fontFamily: "'Bangers', cursive" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-xl">/mo</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600" />
                      <span
                        className="font-bold"
                        style={{ fontFamily: "monospace" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full bg-black text-white font-bold py-3 rounded-lg border-2 border-black hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-lg font-bold" style={{ fontFamily: "monospace" }}>
            Need a custom plan?
            <a href="#" className="underline ml-2 hover:text-[#bbb4f1]">
              Contact us!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
