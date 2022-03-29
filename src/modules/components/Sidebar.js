import Navbar from "./Navbar";
import ConnectWallet from "../wallet/ConnectWallet";
import AccountWidget from "../wallet/AccountWidget";
import Balances from "../wallet/Balances";

const Sidebar = () => {
  const connected = false;

  return (
    <div className="w-full bg-violet-900 h-screen text-gray-light flex">
      <Navbar />
      <div className="inline-block w-full">
        {connected ? (
          <>
            <AccountWidget />
            <Balances />
          </>
        ) : (
          <ConnectWallet />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
