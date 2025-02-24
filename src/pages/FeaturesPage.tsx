import {
  Radio,
  Bot,
  MessageSquare,
  Gift,
  Zap,
  LineChart,
  Shield,
  Coins,
  Users,
  Palette,
  Video,
  Share2,
} from "lucide-react";

const FeaturesPage = () => {
  const features = [
    {
      title: "AI-Powered VTubers",
      description:
        "Create intelligent, interactive VTuber personalities that engage with your community in real-time.",
      icon: <Bot className="w-6 h-6" />,
      color: "bg-[#bbb4f1]",
    },
    {
      title: "Live Streaming",
      description:
        "Stream in high quality with built-in support for multiple platforms and integrated chat.",
      icon: <Video className="w-6 h-6" />,
      color: "bg-amber-300",
    },
    {
      title: "Smart Chat",
      description:
        "AI-enhanced chat system with automatic moderation and intelligent responses.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-red-300",
    },
    {
      title: "Reward System",
      description:
        "Automated rewards and token distribution for active community members.",
      icon: <Gift className="w-6 h-6" />,
      color: "bg-green-300",
    },
    {
      title: "Real-time Price Tracking",
      description:
        "Live cryptocurrency price updates and market data integration.",
      icon: <LineChart className="w-6 h-6" />,
      color: "bg-blue-300",
    },
    {
      title: "Community Management",
      description:
        "Tools for building and managing your streaming community effectively.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-300",
    },
    {
      title: "Customization",
      description:
        "Extensive character customization and branding options for your VTuber.",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-[#bbb4f1]",
    },
    {
      title: "Multi-platform Support",
      description:
        "Stream to multiple platforms simultaneously with unified chat.",
      icon: <Share2 className="w-6 h-6" />,
      color: "bg-amber-300",
    },
  ];

  const highlights = [
    {
      title: "Performance",
      description: "High-quality streaming with low latency",
      icon: <Zap className="w-8 h-8" />,
      stats: "99.9% Uptime",
    },
    {
      title: "Security",
      description: "Enterprise-grade protection for your content",
      icon: <Shield className="w-8 h-8" />,
      stats: "Fully Encrypted",
    },
    {
      title: "Earnings",
      description: "Multiple revenue streams for creators",
      icon: <Coins className="w-8 h-8" />,
      stats: "Instant Payouts",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFCE6] pt-20 pb-12">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          style={{
            fontFamily: "'Bangers', cursive",
            letterSpacing: "0.1em",
            textShadow: "2px 2px 0 #000",
          }}
        >
          <span className="bg-[#bbb4f1] px-6 py-2 inline-block transform -rotate-1 border-2 border-black">
            Awesome Features
          </span>
        </h1>
        <p
          className="text-xl font-bold max-w-2xl mx-auto"
          style={{
            fontFamily: "monospace",
            textShadow: "1px 1px 0 #000",
          }}
        >
          Everything you need to create, stream, and grow your VTuber community!
        </p>
      </div>

      {/* Live Indicator */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Radio className="w-6 h-6 text-red-500 animate-pulse" />
          <span
            className="font-bold text-xl"
            style={{ fontFamily: "monospace" }}
          >
            Currently Powering 50,000+ VTubers!
          </span>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} rounded-xl border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-y-1`}
            >
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "'Bangers', cursive" }}
              >
                {feature.title}
              </h3>
              <p className="font-bold" style={{ fontFamily: "monospace" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-black p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="w-16 h-16 bg-[#bbb4f1] rounded-full flex items-center justify-center mx-auto mb-4">
                {highlight.icon}
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "'Bangers', cursive" }}
              >
                {highlight.title}
              </h3>
              <p className="font-bold mb-4" style={{ fontFamily: "monospace" }}>
                {highlight.description}
              </p>
              <div
                className="text-xl font-bold text-[#bbb4f1]"
                style={{ fontFamily: "'Bangers', cursive" }}
              >
                {highlight.stats}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto text-center mt-16 px-4">
        <div className="bg-amber-300 rounded-xl border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Bangers', cursive",
              textShadow: "2px 2px 0 #000",
            }}
          >
            Ready to Start Streaming?
          </h2>
          <p
            className="text-xl font-bold mb-6"
            style={{ fontFamily: "monospace" }}
          >
            Join thousands of VTubers who are already using our platform!
          </p>
          <button className="bg-black text-white font-bold py-3 px-8 rounded-lg border-2 border-black hover:bg-gray-800 transition-colors transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
