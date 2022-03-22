import Navbar from "./Navbar";
import ConnectWallet from "../wallet/ConnectWallet";

const Sidebar = () => {
  return (
    <div className="w-full bg-violet-900 h-screen text-gray-light flex">
      <Navbar />
      <div className="inline-block w-full">
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Sidebar;
