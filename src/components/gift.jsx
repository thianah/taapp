import React from "react";

const Gift = () => {
  return (
    <div className="gift-container">
      <h1 className="gift-h1">GIFT</h1>

      <p className="gift-p">
        Your love and presence mean the world to us. If you’d like to bless us further, you can send a gift or choose from our curated wishlist.

      </p>

      <h2 className="gift-h2">How It Works:</h2>
      <div className="gift-list">
        <ul className="gift-ul">
          <li className="gift-li">
            <span className="red-asterisk">*</span> Click the button below and browse our wishlist.
          </li>
          <li className="gift-li">
            <span className="red-asterisk">*</span> Choose an item you'd love to gift us.
          </li>
          <li className="gift-li">
            <span className="red-asterisk">*</span> Amazon delivers it directly to us.
          </li>
          <li className="gift-li">
            <span className="red-asterisk">*</span> We'll receive your gift with gratitude and love.
          </li>
        </ul>
      </div>
      <div className="gift-link-container">
        <a
          className="amazon-link"
          href="https://www.myregistry.com/giftlist/talovestory"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View our Amazon wishlist"
        >
          View Wishlist
        </a>
      </div>

      <div className="monetary-gift">
        
        <p className="monetary-gift-p">
           You can send your cash gift to the following accounts:
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
