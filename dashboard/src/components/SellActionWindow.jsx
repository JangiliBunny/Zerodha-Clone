import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSell = async () => {
    setLoading(true);
    await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty,
      price,
      mode: "SELL",
    });
    closeSellWindow();
  };

  return (
    <div className="container">
      <h3>Sell {uid}</h3>
      <input value={qty} onChange={(e) => setQty(+e.target.value)} />
      <input value={price} onChange={(e) => setPrice(+e.target.value)} />
      <button disabled={loading} onClick={handleSell}>
        {loading ? "Placing..." : "Sell"}
      </button>
    </div>
  );
};

export default SellActionWindow;