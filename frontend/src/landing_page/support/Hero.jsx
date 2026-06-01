import React from "react";

function Hero() {
  return (
    <div className="p-5 mb-5" style={{ backgroundColor: "#99999913" }}>
      <h1
        className="fs-2 "
        style={{ fontWeight: "bold", fontSize: "30px", marginLeft: "60px" }}
      >
        Support Portal
      </h1>
      <div
        className="input-group  mt-3 "
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <span className="input-group-text bg-white ">
          <i class="fa-solid fa-magnifying-glass p-3"></i>
        </span>
        <input
          type="search"
          class="form-control"
          placeholder="Eg: How do I open my account"
          aria-label="Search"
        />
      </div>
    </div>
  );
}

export default Hero;
