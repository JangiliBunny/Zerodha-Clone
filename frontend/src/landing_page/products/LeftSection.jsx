import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 text-center" style={{marginTop:"80px"}}>
          <img src={imageURL} alt="Hero" style={{width:"80%"}}/>
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-5 mt-5">
          <h1  className="fs-3 pr-3">{productName}</h1>
          <p style={{lineHeight:"30px"}}>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo →</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More →
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;