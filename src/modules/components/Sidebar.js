import Navbar from "./Navbar";
import ConnectWallet from "../wallet/ConnectWallet";
import AccountWidget from "../wallet/AccountWidget";

const Sidebar = () => {
  const connected = true;

  return (
    <div className="w-full bg-violet-900 h-screen text-gray-light flex">
      <Navbar />
      <div className="inline-block w-full">
        {connected ? <AccountWidget /> : <ConnectWallet />}
      </div>
    </div>
  );
};

export default Sidebar;
