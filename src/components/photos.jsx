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
import image2 from "../Assets/IMG_3387.jpg";
import image3 from "../Assets/man.jpg";
import image4 from "../Assets/IMG_3390.jpg";
import image5 from "../Assets/IMG_3391.jpg";
import image6 from "../Assets/IMG_3392.jpg";
import image7 from  "../Assets/IMG_3393.jpg"; 
 import image8 from "../Assets/IMG_3395.jpg" 
 import image9 from "../Assets/IMG_3396.jpg"
 import image10 from "../Assets/IMG-20250714-WA0013.jpg" 
 import image11 from "../Assets/IMG-20250714-WA0014.jpg"
import image12 from "../Assets/IMG-20250714-WA0016.jpg"
  import image13 from "../Assets/IMG-20250714-WA0017.jpg" 
   import image14 from "../Assets/IMG-20250714-WA0018.jpg"
 import image15  from "../Assets/IMG-20250714-WA0020.jpg"
  import image16 from "../Assets/IMG-20250714-WA0021.jpg"


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
const image = [ image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16];

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
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

function Photo() {
  return (
    <main>
      <div id="photo" className="px-4 bg-black py-8">
        <h1 className="text-4xl font-extrabold text-[#d2b6ae] mb-2 text-center tracking-wide drop-shadow">Our Pictures</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          A collection of our favorite Pictures.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="w-full flex items-center justify-center bg-white rounded shadow-lg p-2">
              <ImageWithLoader
                src={image}
                alt={`Wedding photo ${index + 1}`}
                className="w-full max-h-80 object-contain rounded"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 bg-black py-8">
        <h1 className="text-4xl font-extrabold text-[#d2b6ae] mb-2 text-center tracking-wide drop-shadow">
          Our Civil Wedding Photos
        </h1>
         <p className="text-lg text-gray-700 mb-8 text-center">
          Memories from our civil wedding ceremony.
        </p> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {image.map((img, index) => (
            <div key={index} className="w-full flex items-center justify-center bg-white rounded shadow-lg p-2">
              <ImageWithLoader
                src={img}
                alt={`Pre-wedding photo ${index + 1}`}
                className="w-full max-h-80 object-contain rounded"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-white"> See more of our beautiful moments  
             <a className="text-rose-900 hover:underline ml-3" href="https://drive.google.com/drive/folders/1NRk4UJAY-U_8Nlzlp1CLAetCk4cuFdod?usp=drive_link">here</a>
             </p>
        </div>
      </div>
    </main>
  );
}

export default Photo;
