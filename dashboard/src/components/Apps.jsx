import React from "react";

const apps = [
  {
    name: "Console",
    desc: "Reports, statements, and account insights"
  },
  {
    name: "Kite Connect",
    desc: "Trading APIs for developers"
  },
  {
    name: "Coin",
    desc: "Direct mutual funds investment platform"
  },
  {
    name: "Varsity",
    desc: "Learn stock markets the smart way"
  }
];

const Apps = () => {
  return (
    <div className="apps-container">
      <h3 className="title">Apps</h3>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <h4>{app.name}</h4>
            <p>{app.desc}</p>
            <button className="btn btn-blue">Open</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
