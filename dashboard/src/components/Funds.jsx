import React from "react";

const Funds = () => {
  return (
    <div className="funds-page">
      {/* Top action bar */}
      <div className="funds-header">
        <p className="muted">
          Instant, zero-cost fund transfers with UPI
        </p>
        <div>
          <button className="btn btn-blue">Add funds</button>
          <button className="btn btn-green">Withdraw</button>
        </div>
      </div>

      <div className="funds-body">
        {/* Equity Section */}
        <div className="funds-card">
          <h4>Equity</h4>

          <div className="funds-row">
            <span>Available margin</span>
            <strong className="primary">₹4,043.10</strong>
          </div>

          <div className="funds-row">
            <span>Used margin</span>
            <strong>₹3,757.30</strong>
          </div>

          <div className="funds-row">
            <span>Available cash</span>
            <strong>₹4,043.10</strong>
          </div>

          <hr />

          <div className="funds-row">
            <span>Opening balance</span>
            <span>₹4,043.10</span>
          </div>

          <div className="funds-row">
            <span>Payin</span>
            <span>₹4,064.00</span>
          </div>

          <div className="funds-row">
            <span>SPAN</span>
            <span>₹0.00</span>
          </div>

          <div className="funds-row">
            <span>Exposure</span>
            <span>₹0.00</span>
          </div>

          <hr />

          <div className="funds-row">
            <span>Total collateral</span>
            <span>₹0.00</span>
          </div>
        </div>

        {/* Commodity Section */}
        <div className="funds-card muted-card">
          <h4>Commodity</h4>
          <p>You don’t have a commodity account</p>
          <button className="btn btn-blue">Open account</button>
        </div>
      </div>
    </div>
  );
};

export default Funds;
