import { useEffect, useState } from "react";

import bgimage from "../Assets/CJII0440-Edit.jpg";
import bgimage2 from "../Assets/CJII0442-Edit.jpg";
import bgimage3 from "../Assets/CJII0466-Edit.jpg";
import bgimage4 from "../Assets/CJII0472-Edit-2.jpg";
import bgimage5 from "../Assets/CJII0485-Edit.jpg";
import bgimage6 from "../Assets/CJII0541-Edit.jpg";
import bgimage7 from "../Assets/CJII0561-Edit.jpg";

const images = [
  bgimage,
  bgimage2,
  bgimage3,
  bgimage4,
  bgimage5,
  bgimage6,
  bgimage7,
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(0);
  const [fade, setFade] = useState(true);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade out

      setTimeout(() => {
        setPrevImage(currentImage);
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade-in
      }, 300); // Must be less than the CSS duration (1000ms)
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  // Countdown effect
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const target = new Date("2025-12-20T10:00:00");
      const now = new Date();
      const difference = target - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <main
      id="home"
      className="relative bg-cover  bg-black bg-center min-h-screen flex flex-col text-white overflow-hidden"
      style={{ minHeight: "100vh", height: "100vh" }} // Force full viewport height
    >
      {/* Background crossfade layers */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out z-10"
          style={{
            backgroundImage: `url(${images[prevImage]})`,
            backgroundSize: window.innerWidth < 640 ? "cover" : "contain",
            backgroundPosition: "center",
            opacity: fade ? 0 : 1,
          }}
        />
        <div
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out z-20"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: window.innerWidth < 640 ? "cover" : "contain",
            backgroundPosition: "center",
            opacity: fade ? 1 : 0,
          }}
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center  h-full px-2">
        {/* Animated main heading and intro */}
        <div className="w-full max-w-xl text-center mb-4">
          <h1
            className="text-4xl font-extrabold tracking-wide text-[#d2b6ae] mb-2 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            TEMITOPE
            <br />
            &
            <br />
            ADENIKE
          </h1>
          <p
            className="text-lg font-light text-white mb-2 animate-fade-in"
            style={{ animationDelay: "1s", animationFillMode: "both" }}
          >
            Join us as we celebrate our love story.
            <br />
            Your presence would make our special day even more special.
          </p>
        </div>
        {/* Event details with animation */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl items-center justify-center mb-4">
          <div
            className="flex-1 rounded-xl shadow-lg p-4 border-l-4 border-[#d2b6ae] bg-white-80 animate-fade-in"
            style={{ animationDelay: "1.5s", animationFillMode: "both" }}
          >
            <h2 className="text-base text-[#d2b6ae] italic mb-1 font-bold">
              When
            </h2>
            <p className="text-white text-sm">
              Saturday, Dec 20, 2025
              <br />
              <span className="italic text-white">
                Traditional Wedding Ceremony:
              </span>{" "}
              10:00 am
              <br />
              <span className="text-white">Wedding Reception:</span> 1:00 pm
            </p>
            {/* Countdown timer */}
            <div className="text-base font-bold text-rose-900 bg-green-100 w-44 rounded-xl mb-2 mx-auto mt-2">
              {timeLeft
                ? `${timeLeft.days}D ${timeLeft.hours}H ${timeLeft.minutes}M ${timeLeft.seconds}S`
                : "It's Wedding Time!"}
            </div>
          </div>
          <div
            className="flex-1 rounded-xl shadow-lg p-4 border-l-4 border-[#d2b6ae]  animate-fade-in"
            style={{ animationDelay: "1.7s", animationFillMode: "both" }}
          >
            <h2 className="text-base text-[#d2b6ae] italic mb-1 font-bold">
              Where
            </h2>
            <p className="text-sm text-white leading-relaxed">
              Nimann Event Center <br />
              Ikare Akoko{" "}
              <span className="text-[#d2b6ae] italic underline cursor-pointer">
                View Map
              </span>
            </p>
          </div>
        </div>
        {/* RSVP Button at the bottom */}
        <div
          className="mt-2 animate-fade-in"
          style={{ animationDelay: "2s", animationFillMode: "both" }}
        >
          <button
            onClick={() => (window.location.href = "/Rsvp")}
            className="bg-[#d2b6ae] text-white md-50 text-base font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#b89c91] transition duration-300"
          >
            RSVP
          </button>
        </div>
      </div>

      {/* Grow/shrink animation keyframe */}

      <style>
        {`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
        `}
      </style>
    </main>
  );
}

export default Home;
