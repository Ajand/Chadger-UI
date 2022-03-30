import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ConnectWallet from "../wallet/ConnectWallet";
import AccountWidget from "../wallet/AccountWidget";
import Balances from "../wallet/Balances";
import { ethers } from "ethers";

const Sidebar = ({ mobile }) => {
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("MetaMask is installed!");
    }
  }, []);

  const [expanded, setExpanded] = useState(mobile ? false : true);

  return (
    <div className={`  h-screen text-gray-light flex z-30 fixed  `}>
      <Navbar setExpanded={setExpanded} expanded={expanded} />
      <div
        className={`inline-block bg-violet-900 h-full duration-200 ease-in w-80 z-20 absolute ${
          expanded ? "left-16" : "-left-96"
        } `}
      >
        {connected ? (
          <>
            <AccountWidget address={window.ethereum.selectedAddress} />
            <Balances />
          </>
        ) : (
          <ConnectWallet setConnected={setConnected} connected={connected} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
