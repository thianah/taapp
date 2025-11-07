const hotels = [
  {
    name: "Niiman Hotel Ikare",
    description:
      "Contemporary rooms with easy access to the wedding venue. Perfect for family and friends who want to stay close by.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7911.066606270563!2d5.752482796709623!3d7.516657169984566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104633a55e38c7f9%3A0xb3b7bda7b4d78d25!2sNiiman%20Hotel!5e0!3m2!1sen!2snl!4v1762502386779!5m2!1sen!2snl",
    directions: "https://maps.google.com/?q=Niiman+Hotel+Ikare+Akoko",
  },
  {
    name: "Rockyson Hotel",
    description:
      "Elegant stay with warm hospitality, ideal for guests looking for premium comfort and service.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3499467853544!2d5.763180688158782!3d7.5367588730779405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104632f940faf979%3A0x231852a1da092ce7!2sRockyson%20Hotel!5e0!3m2!1sen!2snl!4v1762502542823!5m2!1sen!2snl",
    directions: "https://maps.google.com/?q=Rockyson+Hotel+Ikare+Akoko",
  },
  {
    name: "Ugbe Hotel",
    description:
      "A cosy option with quick access to local attractions and the ceremony venue.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.4590301358767!2d5.764276576351123!3d7.524806292488235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1046331b2ba49ff7%3A0xb0499bc579050f03!2sUgbe%20Hotel!5e0!3m2!1sen!2snl!4v1762502583564!5m2!1sen!2snl",
    directions: "https://maps.google.com/?q=Ugbe+Hotel+Ikare+Akoko",
  },
  {
    name: "Benima Hotel",
    description:
      "A serene escape for guests who prefer a tranquil environment and scenic views.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.084201447857!2d5.734315396789549!3d7.455936999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104634cfd544c983%3A0xe143da3eb1e2e7fd!2sBenima%20Hotel!5e0!3m2!1sen!2snl!4v1762502628742!5m2!1sen!2snl",
    directions: "https://maps.google.com/?q=Benima+Hotel+Ikare+Akoko",
  },
];

function Travel() {
  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#bfceb5] mb-4">
            Travel & Accommodation
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Plan your stay with ease. Find our celebration venue and nearby
            hotels with maps direction below.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-12 pb-16">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/10">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[#bfceb5] mb-4">
                The Venue
              </h2>
              <p className="text-gray-200 mb-4 leading-relaxed">
                <strong>Niiman Event Centre Ikare Akoko</strong>
                <br />
                Ondo State, Nigeria
              </p>
              <p className="text-gray-300 mb-6">
                Our wedding festivities will be held at Niiman Event Centre. Use
                the map to get your bearings and plan your journey with ease.
              </p>
              <a
                href="https://maps.google.com/?q=Niiman+Hotel+Ikare+Akoko"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#5d6654] hover:bg-[#b89c91] transition-colors font-semibold"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="relative">
              <div className="relative pt-[56.25%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7911.066606270563!2d5.752482796709623!3d7.516657169984566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104633a55e38c7f9%3A0xb3b7bda7b4d78d25!2sNiiman%20Hotel!5e0!3m2!1sen!2snl!4v1762502386779!5m2!1sen!2snl"
                  title="Niiman Event Centre Map"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-12 pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#bfceb5]">
                Hotels Around
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {hotels.map((hotel) => (
              <article
                key={hotel.name}
                className="bg-white/5 border border-white/10 rounded-3xl shadow-lg overflow-hidden backdrop-blur-md"
              >
                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {hotel.name}
                      </h3>
                      {/* <p className="text-gray-300 mt-2 leading-relaxed">
                        {hotel.description}
                      </p> */}
                    </div>
                    <a
                      href={hotel.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#5d6654] text-sm font-semibold hover:bg-[#b89c91] transition-colors"
                    >
                      Directions
                    </a>
                  </div>
                </div>
                <div className="relative pt-[56.25%]">
                  <iframe
                    src={hotel.mapSrc}
                    title={`${hotel.name} map`}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Travel;
