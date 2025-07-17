import React, { useState } from "react";

const Rsvp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [comingFor, setComingFor] = useState(""); // Track which is selected

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can handle form data here
  };

  return (
    <div>
      <form
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">RSVP Form</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2b6ae]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2b6ae]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="Relationship">
            Relationship
          </label>
          <select
            id="Relationship"
            name="Relationship"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d2b6ae]"
          >
            <option value="">Select an option</option>
            <option value="Bride friend">Bride friend</option>
            <option value="Groom friend">Groom friend</option>
            <option value="Family">Family</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <p className="mb-2">Coming for?</p>
          <div className="flex items-center gap-2">
            {["Bride", "Groom", "Both"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setComingFor(option)}
                className={`px-4 py-2 rounded-md border ${
                  comingFor === option
                    ? "bg-[#d2b6ae] text-white border-[#d2b6ae]"
                    : "bg-white text-[#d2b6ae] border-[#d2b6ae]"
                } transition duration-200`}
              >
                {option}
              </button>
            ))}
          </div>
          {/* Hidden input to submit value */}
          <input type="hidden" name="comingFor" value={comingFor} required />
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-[#d2b6ae] text-white px-6 py-2 rounded-md hover:bg-[#b89c91] transition duration-300"
          >
            Submit RSVP
          </button>
        </div>
      </form>
      {submitted && (
        <div className="text-center mt-8">
          <p className="text-gray-600">Thank you for your response!</p>
        </div>
      )}
    </div>
  );
};

export default Rsvp;
