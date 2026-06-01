import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className="col-1"></div>
        <div className="col-4 "style={{marginTop:"140px"}}>
          <h1 className="fs-3 mt-5 ">{productName}</h1>
          <p>{productDesription}</p>
          <a href={learnMore}>learn More →</a>
        </div>
        <div className="col-1"></div>
        <div className="col-6 mt-5 ">
          <img src={imageURL} alt="right ImaGe" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
