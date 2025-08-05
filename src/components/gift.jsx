import React from "react";

const Gift = () => {
  return (
    <div className="gift-container">
      <h1 className="gift-h1">Celebrate With Us Through Gifting</h1>

      <p className="gift-p">
        Your presence is the greatest gift we could ask for! But if you'd love
        to go a step further and bless us with a gift, we've made it easy and
        thoughtful. Instead of bringing physical items to the event — which we
        may not be able to take home — you can choose to either send us a
        monetary gift or purchase an item from our curated wishlist.
      </p>

      <h2 className="gift-h2">How It Works:</h2>
      <div className="gift-list">
        <ul className="gift-ul">
          <li className="gift-li">Click the button below and browse our wishlist.</li>
          <li className="gift-li">Choose an item you'd love to gift us.</li>
          <li className="gift-li">Amazon will handle the delivery to our address.</li>
          <li className="gift-li">
            We'll receive your gift with gratitude and love, and we truly
            appreciate your thoughtfulness either way.
          </li>
        </ul>
      </div>
      <div className="gift-link-container">
        <a
          className="amazon-link"
          href="https://www.amazon.nl/hz/wishlist/ls/1KOZASPXEUPU6?ref_=wl_share"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Wishlist
        </a>
      </div>

      <div className="monetary-gift">
        <h1 className="monetary-gift-h1">Monetary Gift</h1>
        <p className="monetary-gift-p">
          If you prefer to give a monetary gift, you can send to the following accounts:
        </p>

        <div className="monetary-gift-details">
          <div className="account-section">
            <h2 className="account-heading">Euro Account</h2>
            <p className="monetary-gift-p">
              <strong>Account Name:</strong> <span className="account-name">Adamo Abass Temitope</span>
              <br />
              <strong>Bank:</strong> <span className="bank-name">ABN AMRO</span>
              <br />
              <strong>IBAN:</strong> <span className="iban-number">NL91 ABNA 0417 1640 45</span>
            </p>
          </div>

          <div className="account-section">
            <h2 className="account-heading">Naira Account</h2>
            <p className="monetary-gift-p">
              <strong>Account Name:</strong> <span className="account-name">Ekundayo Christianah Adenike</span>
              <br />
              <strong>Bank:</strong> <span className="bank-name">First Bank</span>
              <br />
              <strong>Account Number:</strong> <span className="acc-number">3194053537</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
