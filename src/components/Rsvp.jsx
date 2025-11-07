import React, { useState } from "react";

const Rsvp = () => {
  const [submitted, setSubmitted] = useState(false);
  const [comingFor, setComingFor] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [relationship, setRelationship] = useState("");

  // Validation function
  const isFormValid = () => {
    return (
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      email.includes("@") &&
      relationship !== "" &&
      comingFor !== ""
    );
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-black via-gray-900 to-black px-4 pt-10">
      <h1 className="gift-h1 mb-8">RSVP</h1>
      {!submitted ? (
        <form
          name="rsvp"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="w-full max-w-lg bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10"
        >
          <input type="hidden" name="form-name" value="rsvp" />

          {/* Full Name */}
          <div className="mb-6">
            <label
              className="block text-xs font-semibold text-gray-500 uppercase mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bfceb5] transition"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              className="block text-xs font-semibold text-gray-500 uppercase mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bfceb5] transition"
            />
          </div>

          {/* Relationship */}
          <div className="mb-6">
            <label
              className="block text-xs font-semibold text-gray-500 uppercase mb-2"
              htmlFor="Relationship"
            >
              Relationship
            </label>
            <select
              id="Relationship"
              name="Relationship"
              required
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bfceb5] transition"
            >
              <option value="">Select an option</option>
              <option value="Bride friend">Bride's Friend</option>
              <option value="Groom friend">Groom's Friend</option>
              <option value="Family">Family</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Coming For */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
              Coming For?
            </p>
            <div className="flex flex-wrap gap-3">
              {["Bride", "Groom", "Both"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setComingFor(option)}
                  className={`flex-1 px-4 py-2 rounded-lg border text-sm font-medium transition duration-200 ${
                    comingFor === option
                      ? "bg-[#5d6654] text-white border-[#bfceb5]"
                      : "bg-white te border-[#bfceb5] hover:bg-[#f7f2f0]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <input type="hidden" name="comingFor" value={comingFor} required />
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={!isFormValid()}
              className="w-full bg-[#5d6654] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b89c91] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#5d6654]"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center mt-8 text-white">
          <p className="text-lg font-semibold">Thank you for registering!</p>
        </div>
      )}
    </div>
  );
};

export default Rsvp;
