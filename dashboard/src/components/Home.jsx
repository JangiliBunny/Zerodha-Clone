// import React from "react";
// import TopBar from "./TopBar";
// import Dashboard from "./Dashboard";

// const Home = () => {
//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import TopBar from "./TopBar";
// import Dashboard from "./Dashboard";

// const Home = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const verifyUser = async () => {
//       try {
//         const { data } = await axios.post(
//           "http://localhost:3002/",
//           {},
//           {
//             withCredentials: true,
//           }
//         );

//         if (!data.status) {
//           window.location.href = "http://localhost:5173/login";
//           return;
//         }

//         setLoading(false);
//       } catch (err) {
//         window.location.href = "http://localhost:5173/login";
//       }
//     };

//     verifyUser();
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/",
          {},
          { withCredentials: true }
        );

        if (!data.status) {
          window.location.href = "http://localhost:5173/login";
          return;
        }

        setLoading(false);
      } catch (err) {
        window.location.href = "http://localhost:5173/login";
      }
    };

    verifyUser();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;