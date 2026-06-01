import React, {  useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
 openBuyWindow: (uid)=>{},
 closeBuyWindow:()=>{},
});

export const GeneralProvider = (props) => {
  const [buyUid, setBuyUid] = useState(false);
  const [selectedStockUid, setselectedStockUid] = useState("");

  const handleOpenBuyWindow=(uid)=>{
    setBuyUid(true);
    setselectedStockUid(uid);
  }
   
  const handleCloseBuyWindow = () => {
  setBuyUid(false);
  setselectedStockUid("");
  };
  return (
    <GeneralContext.Provider
      value={{ openBuyWindow: handleOpenBuyWindow, closeBuyWindow: handleCloseBuyWindow }}
    >
      {props.children}

      {buyUid && <BuyActionWindow uid={selectedStockUid} />}
     
    </GeneralContext.Provider>
  );
};

export default GeneralContext;