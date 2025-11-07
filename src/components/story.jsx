function Story() {
  return (
    <div
      id="Story"
      className="p-6 text-gray-800 min-h-screen flex flex-col items-center"
    >
      <div className="story text-center max-w-6xl">
        {" "}
        {/* Adjust max width */}
        <h1 className="gift-h1">
          OUR LOVE STORY
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {" "}
          {/* Adjust gap */}
          <div className="mt-4 bg-white p-8 rounded-lg shadow-lg">
            {" "}
            {/* Adjust padding */}
            <h2 className="text-2xl font-semibold mb-4">ADENIKE</h2>
            <p className="text-lg leading-relaxed text-gray-600 text-justify">
              One fateful day, my sister sent me a message saying, "I've found
              your husband." This was after she had reposted my picture on her
              WhatsApp status. She went on to say that her friend had seen the
              picture and was asking for my number.
              <br />
              <br />
              Later that day, he messaged me, and I discovered that we had
              actually attended the same secondary school, though we weren't
              familiar with each other back then.
              <br />
              <br />
              We started talking, and we've spoken every day since then.
              Temitope is a man of wisdom and grace. He is thoughtful and
              steady. Through the years we've shared, he has shown me a love
              that reflects God's own patience and kindness.
              <br />
              <br />I love him so much, and I’m grateful to be spending the rest
              of my life with him.
            </p>
          </div>
          <div className="groom mt-4 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">TEMITOPE</h2>
            <p className="text-lg leading-relaxed text-gray-600 text-justify">
              Adenike and I attended the same secondary school. She was in the
              set after mine, although that is not where the story started
              because she left our school early on.
              <br />
              <br />
              Years later, my friend, who happened to be her sister posted her on whatsapp. I requested for her number and
              messaged her later that day.
              <br />
              <br />
               The more we spoke, the more I realized she was every bit as incredible as she was beautiful. Initially, I was
              skeptical about asking her out because of the long distance, but
              God's plan for us was bigger than the distance.
              <br />
              <br />
              She is a woman of deep devotion; kind, genuine, and beautiful
              inside and out. I can't wait to spend forever with her.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
