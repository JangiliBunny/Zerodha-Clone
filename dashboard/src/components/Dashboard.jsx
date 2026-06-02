// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import WatchList from "./WatchList";
// import Summary from "./Summary";
// import Orders from "./Orders";
// import Holdings from "./Holdings";
// import Positions from "./Positions";
// import Funds from "./Funds";
// import Apps from "./Apps";

// import "./Dashboard.css";

// import { GeneralProvider } from "./GeneralContext";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <GeneralProvider>
//         <WatchList />
//       </GeneralProvider>

//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Summary />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/holdings" element={<Holdings />} />
//           <Route path="/positions" element={<Positions />} />
//           <Route path="/funds" element={<Funds />} />
//           <Route path="/apps" element={<Apps />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import { Routes, Route } from "react-router-dom";

import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

import "./Dashboard.css";

import { GeneralProvider } from "./GeneralContext";

const Dashboard = ({ username }) => {
  return (
    <div className="dashboard-container">
      <GeneralProvider>
        <WatchList />
      </GeneralProvider>

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary username={username} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;