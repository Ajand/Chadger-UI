import { useState } from "react";
import Navbar from "./Navbar";
import ConnectWallet from "../wallet/ConnectWallet";
import AccountWidget from "../wallet/AccountWidget";
import Balances from "../wallet/Balances";

const Sidebar = ({ mobile }) => {
  const connected = false;

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`  h-screen text-gray-light flex z-30 absolute `}>
      <Navbar setExpanded={setExpanded} expanded={expanded} />
      <div
        className={`inline-block bg-violet-900 h-full duration-200 w-80 z-20 absolute ${
          expanded ? "left-16" : "-left-96"
        } `}
      >
        {expanded &&
          (connected ? (
            <>
              <AccountWidget />
              <Balances />
            </>
          ) : (
            <ConnectWallet />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
