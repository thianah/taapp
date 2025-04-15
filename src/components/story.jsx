function Story() {
  return (
    <div
      id="Story"
      className="p-6 bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center"
    >
      <div className="story text-center max-w-6xl"> {/* Adjust max width */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          OUR LOVE STORY
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Adjust gap */}
          <div className="mt-4 bg-white p-8 rounded-lg shadow-lg"> {/* Adjust padding */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-purple-950">
              BRIDE
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Abass and I went to the same secondary school, but that's not where
              it all started from. We barely knew each other then because I
              transferred to a different school.
              <br />
              Fastforward to a day in March 2023, and I had gone out to my
              friend's place and taken a few pictures. Later, my sister who
              happened to be friends with Abass at the time, uploaded one of my
              photos on her WhatsApp status. That moment changed everything.
              <br />
              He saw the picture and messaged my sister and said, “My
              wife is on your contact list.” My sister told me she found my
              husband (smile) and then sent him my number and that was the beginning of everything.
              
            
              <br />
              I love him so much, and I can’t wait to spend the rest of my life with him.
            </p>
          </div>
          <div className="groom mt-4 bg-white p-8 rounded-lg shadow-lg"> {/* Adjust padding */}
            <h2 className="text-2xl font-semibold mb-4 text-purple-950">
              GROOM
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Abass and I went to the same secondary school, but that's not where
              it all started from. We barely knew each other then because I
              transferred to a different school.
              <br />
              Fastforward to a day in March 2023, and I had gone out to my
              friend's place and taken a few pictures. Later, my sister who
              happened to be friends with Abass at the time, uploaded one of my
              photos on her WhatsApp status. That moment changed everything.
              <br />
              He saw the picture and messaged my sister and said, “My
              wife is on your contact list.” My sister told me she found my
              husband (smile) and then sent him my number and that was the beginning of everything.
              <br />
              I love him so much, and I can’t wait to spend the rest of my life with him.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
