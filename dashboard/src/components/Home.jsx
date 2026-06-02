import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "https://zerodha-clone-production-cf2a.up.railway.app/",
          {},
          { withCredentials: true }
        );

        if (!data.status) {
          window.location.href =
            "https://zerodha-clone-zikd.vercel.app/login";
          return;
        }

        setUsername(data.user);
        setLoading(false);
      } catch (err) {
        window.location.href =
          "https://zerodha-clone-zikd.vercel.app/login";
      }
    };

    verifyUser();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <TopBar />
      <Dashboard username={username} />
    </>
  );
};

export default Home;