import React from "react";

const Gift = () => {
  return (
    <div className="gift-container">
      <h1 className="gift-h1">GIFTS</h1>

      <p className="gift-p">
        Your love and presence mean the world to us. If you’d like to bless us
        further, you can send a gift or choose from our curated wishlist.
      </p>

      <div className="gift-link-container">
        <a
          className="amazon-link"
          href="https://www.myregistry.com/giftlist/talovestory"
          target="_blank"
          rel="noopener noreferrer"
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
            <h2 className="account-heading">Naira Account</h2>
            <p>
              <strong>Account Name:</strong> Ekundayo Christianah Adenike
              <br />
              <strong>Bank:</strong> First Bank
              <br />
              <strong>Account Number:</strong> 3194053537
            </p>
          </div>
          <div className="account-section">
            <h2 className="account-heading">Euro Account</h2>
            <p>
              <strong>Account Name:</strong> Abass Adamo
              <br />
              <strong>Bank:</strong> Revolut Bank UAB
              <br />
              <strong>IBAN:</strong> NL24REVO7020582834
              <br />
              <strong>BIC/Swift:</strong> REVONL22
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
