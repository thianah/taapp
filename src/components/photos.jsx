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

function ImageWithLoader({ src, alt, className, fetchPriority = "auto" }) {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <div
      className="relative w-full flex items-center justify-center min-h-40"
      style={{ contentVisibility: "auto", containIntrinsicSize: "300px 300px" }}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-8 h-8 border-4 border-[#bfceb5] border-t-transparent rounded-full animate-spin"
            aria-label="Loading image"
          ></div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white text-sm">
          Failed to load image
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        fetchpriority={fetchPriority}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

function Photo() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const closeLightbox = () => setSelectedImage(null);

  React.useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedImage !== null) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedImage]);

  return (
    <main>
      <div id="photo" className="px-4 bg-black py-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="gift-h1">GALLERY</h1>
          <div
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]
            [--mobile-height:450px] [--tablet-height:320px]"
          >
            {images.map((image, index) => (
              <figure
                key={index}
                className="relative mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-2xl group cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-[#bfceb5]/40"
                style={{
                  contentVisibility: "auto",
                  containIntrinsicSize: "1px 1px",
                }}
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithLoader
                  src={image}
                  alt={`Wedding photo ${index + 1}`}
                  fetchPriority={index < 3 ? "high" : "auto"}
                  className="w-full h-auto max-h-[var(--mobile-height)] sm:max-h-[var(--tablet-height)] md:max-h-none object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#bfceb5] transition-colors text-4xl font-bold z-10"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage]}
              alt={`Wedding photo ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#bfceb5] transition-colors text-4xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Previous image"
              >
                ‹
              </button>
            )}
            {selectedImage < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#bfceb5] transition-colors text-4xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Next image"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}

      <style>
        {`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        `}
      </style>
    </main>
  );
}

export default Photo;
