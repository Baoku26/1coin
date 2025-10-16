import React, { useState, useEffect } from "react";
import {
  Copy,
  ExternalLink,
  Twitter,
  TrendingUp,
  Users,
  Zap,
  Rocket,
} from "lucide-react";
import "./App.css";

const OneCoinLanding = () => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const contractAddress = "GMvCfcZg8YvkkQmwDaAzCtHDrrEtgE74nQpQ7xNabonk";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* SEO Meta Tags would go in document head */}
      <title>1 Coin</title>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="./1coinlogo.png" alt="logo" className="w-10 h-10" />
            </div>

            {/* CTA Button */}
            {/*<button className="bg-[#ff9304] hover:bg-[#0a2fa2] text-white px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"*/}
            {/*        style={{ fontFamily: "Sora, sans-serif"}}*/}
            {/*    >*/}
            {/*    <Zap size={16} />*/}
            {/*    Buy Now*/}
            {/*</button>*/}
            <a
              href="https://bonk.fun/token/GMvCfcZg8YvkkQmwDaAzCtHDrrEtgE74nQpQ7xNabonk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff9304] hover:bg-[#0a2fa2] text-white px-2 py-2 rounded-4xl sm:rounded-xl sm:text-lg sm:px-4 text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center min-w-[100px] justify-center"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              <Zap size={20} />
              Buy Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className={`relative min-h-screen flex items-center justify-center px-4 transition-opacity duration-1000 ${
          isVisible.hero ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50 opacity-60"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-orange-500 rounded-full opacity-20 animate-bounce"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 sm:px-2">
          <div className="w-full h-10"></div>
          {/* Logo/Icon */}
          <div className="mb-3 flex justify-center">
            {/*<div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">*/}
            {/*    <span className="text-white text-4xl font-black">1</span>*/}
            {/*</div>*/}
            <img src="./1coinlogo.png" alt="logo" className="w-[50%] h-[50%]" />
          </div>

          <h1
            className="text-5xl md:text-7xl font-black text-black leading-tight"
            style={{ fontFamily: "Caveat, cursive", fontWeight: "bold" }}
          >
            <span className="text-[#ff9304]">1 Coin</span> Can Change Your Life
          </h1>

          <p
            className="text-sm md:text-lg text-gray-600 mb-8 font-light leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            1 vision, 1 mission, 1 chance, 1 opportunity, 1 dream.
          </p>

          <div className="flex flex-row px:3 sm:flex-row gap-4 justify-center items-center">
            {/*<button className="bg-[#ff9304] hover:bg-[#0a2fa2] text-white px-2 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 min-w-[200px] justify-center"*/}
            {/*        style={{ fontFamily: "Sora, sans-serif"}}>*/}
            {/*    */}
            {/*    <Zap size={20} />*/}
            {/*    Buy 1 Coin*/}
            {/*</button>*/}
            <a
              href="https://bonk.fun/token/GMvCfcZg8YvkkQmwDaAzCtHDrrEtgE74nQpQ7xNabonk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff9304] hover:bg-[#0a2fa2] text-white px-2 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 min-w-[150px] justify-center"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              <Zap size={20} />
              Buy 1coin
            </a>
            <a
              href="https://x.com/i/communities/1968442277552074769"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a2fa2] hover:bg-[#ff9304] text-white px-2 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 min-w-[150px] justify-center"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              <img src={"./x.svg"} className="w-[20px] h-[20px]" />
              Join Community
            </a>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section
        id="narrative"
        className={`py-30 px-4 bg-gray-50 transition-all duration-1000 transform ${
          isVisible.narrative
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-5xl md:text-7xl font-black text-black mb-12"
            style={{ fontFamily: "Caveat, cursive", fontWeight: "bold" }}
          >
            Why 1 Coin?
          </h2>

          <div className="flex justify-center w-full">
            {/*<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">*/}
            {/*    <div className="text-6xl mb-4">⚡</div>*/}
            {/*    <p className="text-2xl font-bold text-gray-800">The time is now.</p>*/}
            {/*</div>*/}

            {/*<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">*/}
            {/*    <div className="text-6xl mb-4">🎯</div>*/}
            {/*    <p className="text-2xl font-bold text-gray-800">Make the right decision.</p>*/}
            {/*</div>*/}

            <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Rocket size={100} color={"#ff9304"} />
              <p
                className="text-lg "
                style={{ fontFamily: "inter, sans-serif" }}
              >
                Cus You're 1 coin away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section
        id="community"
        className={`py-20 px-4 bg-white transition-all duration-1000 transform ${
          isVisible.community
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl md:text-7xl font-black text-center text-black mb-12"
            style={{ fontFamily: "Caveat, cursive", fontWeight: "bold" }}
          >
            The 1 Coin Community
          </h2>

          <div className="flex flex-col gap-1 items-center">
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-10 rounded-2xl text-center">
                  <Users className="mx-auto mb-2 text-[#ff9304]" size={32} />
                  <div
                    className="text-3xl font-black text-[#ff9304]"
                    style={{
                      fontFamily: "Caveat, cursive",
                      fontWeight: "bold",
                    }}
                  >
                    4000+
                  </div>
                  <div
                    className="text-gray-600 font-medium"
                    style={{ fontFamily: "Inter, san-serif" }}
                  >
                    Members on X
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-10 rounded-2xl text-center">
                  <TrendingUp
                    className="mx-auto mb-2 text-blue-500"
                    size={32}
                  />
                  <div
                    className="text-3xl font-black text-blue-600"
                    style={{
                      fontFamily: "Caveat, cursive",
                      fontWeight: "bold",
                    }}
                  >
                    1 Play
                  </div>
                  <div
                    className="text-gray-600 font-medium"
                    style={{ fontFamily: "Inter, san-serif" }}
                  >
                    1 Dream
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 items-center bg-gray-50 p-8 rounded-2xl">
              <p className="text-sm text-center leading-relaxed text-gray-700">
                1 coin, 1 play, 1 sol, 1 dream, 1 right move, <br />1 click can
                change your life.
                <span className="font-bold text-[#ff9304]">
                  {" "}
                  This is the 1 on USD1.
                </span>
              </p>
              <div className="flex w-full justify-center items-center">
                <a
                  href="https://x.com/i/communities/1968442277552074769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0a2fa2] w-fit px-2 py-4 hover:bg-[#ff9304]  text-white rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 min-w-[200px] justify-center"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  <img src={"./x.svg"} className="w-[20px] h-[20px]" />
                  Join Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section
        id="token-info"
        className={`py-20 px-4 bg-gray-50 transition-all duration-1000 transform ${
          isVisible["token-info"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl md:text-7xl font-black text-center text-black mb-12"
            style={{ fontFamily: "Caveat, cursive", fontWeight: "bold" }}
          >
            Smart Contract Address
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div
              className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4"
              style={{ fontFamily: "Inter, san-serif" }}
            >
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-2">
                  Contract Address:
                </div>
                <div className="font-mono text-sm sm:text-base bg-gray-100 p-4 rounded-lg break-all">
                  {contractAddress}
                </div>
              </div>

              <div
                className="flex gap-2"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                <button
                  onClick={copyToClipboard}
                  className="bg-[#ff9304] hover:bg-[#0a2fa2] text-white p-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <Copy size={18} />
                  {copied ? "Copied!" : "Copy"}
                </button>

                <a
                  href={`https://solscan.io/token/${contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0a2fa2] hover:bg-[#ff9304] text-white p-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  View
                </a>
              </div>
            </div>

            <p
              className="text-gray-500 text-sm mt-4 text-center"
              style={{ fontFamily: "Inter, san-serif" }}
            >
              Always verify the contract address before buying.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="cta"
        className={`py-20 px-4  transition-all duration-1000 transform ${
          isVisible.cta
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage: "url(banner.jpeg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        {/*<div className="max-w-4xl mx-auto text-center">*/}
        {/*    <h2 className="text-4xl md:text-6xl font-black text-[#ff9304] mb-8 leading-tight"style={{ fontFamily: "Caveat, cursive", fontWeight: "bold" }}>*/}
        {/*        You're Just <span className="text-black">1 Coin</span> Away*/}
        {/*    </h2>*/}
        {/*</div>*/}
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className={`bg-black text-white py-12 px-4 transition-all duration-1000 ${
          isVisible.footer ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <span className="text-xl font-bold">1 Coin</span>
            </div>

            <div className="flex gap-6">
              <a
                href="https://x.com/i/communities/1968442277552074769"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-300"
              >
                <img src={"./x.svg"} className="w-[20px] h-[20px]" />
              </a>

              <a
                href={`https://solscan.io/token/${contractAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2025 1 Coin. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OneCoinLanding;
