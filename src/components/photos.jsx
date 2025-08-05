import React from "react";
import bgimage from "../Assets/CJII0440-Edit.jpg";
import bgimage2 from "../Assets/CJII0442-Edit.jpg";
import bgimage3 from "../Assets/CJII0466-Edit.jpg";
import bgimage4 from "../Assets/CJII0472-Edit-2.jpg";
import bgimage5 from "../Assets/CJII0485-Edit.jpg";
import bgimage6 from "../Assets/CJII0541-Edit.jpg";
import bgimage7 from "../Assets/CJII0561-Edit.jpg";
import bgimage8 from "../Assets/CJII0586-Edit-2.jpg";
import bgimage9 from "../Assets/CJII0601-Edit.jpg";
import bgimage10 from "../Assets/CJII0616-Edit.jpg";

const images = [
  bgimage,
  bgimage2,
  bgimage3,
  bgimage4,
  bgimage5,
  bgimage6,
  bgimage7,
  bgimage8,
  bgimage9,
  bgimage10,
];

function ImageWithLoader({ src, alt, className }) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <div className="relative w-full flex items-center justify-center min-h-40">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#d2b6ae] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function Photo() {
  return (
    <main>
      <div id="photo" className="px-4 bg-black py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md group"
            >
              <ImageWithLoader
                src={image}
                alt={`Wedding photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Photo;
