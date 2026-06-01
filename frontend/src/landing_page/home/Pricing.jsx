import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4" style={{ marginLeft: "36px" }}>
          <h1 className="mb-3 fs-2 " style={{ marginLeft: "20px" }}>
            Unbeatable Pricing
          </h1>
          <p style={{ marginLeft: "20px" }}>
            {" "}
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none", marginLeft: "20px" }}>
            See Pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>

        <div className="col-6  mb-5" style={{ marginLeft: "70px" }}>
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
