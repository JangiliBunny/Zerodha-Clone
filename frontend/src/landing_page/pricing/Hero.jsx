import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h1 className="fs-2 mt-5">Charges</h1>
        <h3 className="text-muted fs-4 mt-3 mb-5">
          List of all charges and taxes
        </h3>
      </div>
      <div className="row mt-5 ">
        <div className="col-1"></div>
        <div className="col-3 text-center m-3">
          <img
            src="media\images\pricing0.svg"
            alt=""
            style={{ width: "90%" }}
          />
          <h1 className=" mt-2" style={{ fontSize: "26px" }}>
            Free equity delivery
          </h1>
          <p className="mt-4 text-muted" style={{ lineHeight: "30px" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-3 m-3 text-center">
          <img
            src="media\images\intradayTrades.svg"
            alt=""
            style={{ width: "90%" }}
          />
          <h1 className=" mt-2" style={{ fontSize: "26px" }}>
            Intraday and F&O trades
          </h1>
          <p className="mt-4 text-muted" style={{ lineHeight: "30px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-3 text-center m-3">
          <img
            src="media\images\pricing0.svg"
            alt=""
            style={{ width: "90%" }}
          />
          <h1 className="mt-2" style={{ fontSize: "26px" }}>
            Free direct MF
          </h1>
          <p className="mt-4 text-muted" style={{ lineHeight: "30px" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
