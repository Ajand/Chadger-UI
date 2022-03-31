import { useEffect, useState } from "react";
import { ethers } from "ethers";

import ERC20 from "../api/Contracts/ERC20.json";
import Vault from "../api/Contracts/Vault.json";

const WithdrawDialog = ({ vault, setVault, network }) => {
  const [loading, setLoading] = useState(true);
  const [vaultC, setVaultC] = useState(null);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    console.log(vault);
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const VaultContract = new ethers.Contract(
      vault.vaultAddress,
      Vault.abi,
      signer
    );

    setVaultC(VaultContract);

    const signerAddress = await signer.getAddress();

    setBalance(await VaultContract.balanceOf(signerAddress));

    setLoading(false);
  }, []);

  return (
    <div
      onClick={() => {
        setVault(null);
      }}
      className="fixed bg-violet-600 bg-opacity-10 w-screen flex justify-center items-center h-screen  top-0 left-0 z-[200]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-96 bg-violet-800 text-gray-100 h-80 font-mono p-4 "
      >
        {loading ? (
          <div>Loading ...</div>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div>
              Your vault balance is:{" "}
              <span className="text-yellow-300">{String(balance)}</span> <br />{" "}
              This the maximum amount you can withdraw.
            </div>
            <div class="mb-6 mt-6 ">
              <label
                for=""
                class="block mb-2 text-sm font-mono font-medium text-gray-300 dark:text-gray-300"
              >
                Amount
              </label>
              <input
                type="text"
                id=""
                class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="0x0000000000000000000000000000000000000000"
                required
                value={amount}
                onChange={(e) =>
                  setAmount(
                    isNaN(parseInt(e.target.value))
                      ? 0
                      : parseInt(e.target.value)
                  )
                }
              />
            </div>
            <div className="flex justify-between flex-row-reverse ">
              <button
                onClick={async () => {
                  if (balance > 0) {
                    if (parseInt(String(balance)) >= amount) {
                      await vaultC["withdraw(uint256)"](amount);
                      setVault(null);
                    }
                  }
                }}
                className={`${
                  amount > parseInt(String(balance))
                    ? "cursor-not-allowed"
                    : "dark:hover:bg-blue-700 hover:bg-blue-700"
                } text-white bg-blue-600   focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600  dark:focus:ring-blue-800`}
              >
                Withdraw
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawDialog;
