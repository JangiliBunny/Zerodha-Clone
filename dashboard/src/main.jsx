import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import Home from "./components/Home";
import { GeneralProvider } from "./components/GeneralContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <GeneralProvider>
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </GeneralProvider>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
// import Home from "./components/Home";
// import { GeneralProvider } from "./components/GeneralContext"; // ✅ ADD THIS

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <GeneralProvider> {/* ✅ WRAP HERE */}
//         <Routes>
//           <Route path="/*" element={<Home />} />
//         </Routes>
//       </GeneralProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );