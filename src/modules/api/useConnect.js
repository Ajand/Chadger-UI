import { useEffect, useState } from "react";
import { ethers } from "ethers";

const useConnect = () => {
  const [isConnect, setIsConnect] = useState(false);

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  window.ethereum.on("accountsChanged", (e) => {
    console.log(e, "accounts changed");
  });

  window.ethereum.on("chainChanged", () => {
    console.log("chainChanged");
  });
  useEffect(async () => {
    const network = await provider.getNetwork();
    console.log(network);
  }, [provider]);

  const requestAccess = async () => {
    await provider.send("eth_requestAccounts", []);
  };

  return {
    requestAccess,
    isConnect,
  };
};

export default useConnect;
