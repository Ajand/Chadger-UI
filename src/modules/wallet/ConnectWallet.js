import { useState } from "react";

import MetamaskLogo from "../common/MetamaskLogo";
import EthereumLogo from "../common/EthereumLogo";
import ArbitrumLogo from "../common/ArbitrumLogo";
import PolygonLogo from "../common/PolygonLogo";
import FantomLogo from '../common/FantomLogo'

const ConnectWallet = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState("metamask");

  return (
    <div className="m-8 mt-20 ">
      <div className="flex justify-center">
        <button
          onClick={() => {
            if (isConnecting) {
              setIsConnecting(false);
              setSelectedWallet("");
            } else {
              setIsConnecting(true);
            }
          }}
          class={`border-2  ${
            isConnecting
              ? "border-violet-50 hover:border-violet-300 text-violet-50"
              : "border-violet-300 bg-violet-50 box-border hover:bg-violet-200 "
          }  w-full duration-200  font-mono py-2 px-4`}
        >
          {isConnecting ? "Cancel Connection" : "Connect Wallet"}
        </button>
      </div>
      {isConnecting && (
        <div className="mt-5 ">
          <div className=" flex justify-center">
            <button
              onClick={() => {
                if (selectedWallet === "metamask") {
                  setSelectedWallet("");
                } else {
                  setSelectedWallet("metamask");
                }
              }}
              class={`border-2  ${
                selectedWallet !== "metamask"
                  ? "border-violet-50 hover:border-violet-300 text-violet-50"
                  : "border-violet-300 bg-violet-50 box-border hover:bg-violet-200 "
              }   duration-200  py-2 px-2`}
              //class=" border-2  border-amber-200 hover:border-amber-300 text-amber-200 hover:bg-violet-800  duration-200  font-mono py-2 px-2 "
            >
              <MetamaskLogo className="w-12" />
            </button>
          </div>
          {selectedWallet && (
            <div className="mt-5 flex justify-between">
              <button
                onClick={() => {
                  setSelectedWallet("");
                }}
                class=" border-2  border-violet-300 bg-violet-50 box-border hover:bg-violet-200 duration-200  font-mono py-2 px-2 "
              >
                <EthereumLogo className="w-8 h-8" />
              </button>
              <button
                onClick={() => {
                  setSelectedWallet("");
                }}
                class=" border-2  border-violet-300 bg-violet-50 box-border hover:bg-violet-200 duration-200  font-mono py-2 px-2 "
              >
                <PolygonLogo className="w-8 h-8" />
              </button>
              <button
                onClick={() => {
                  setSelectedWallet("");
                }}
                class=" border-2  border-violet-300 bg-violet-50 box-border hover:bg-violet-200 duration-200  font-mono py-2 px-2 "
              >
                <ArbitrumLogo className="w-8 h-8"  />
              </button>
              <button
                onClick={() => {
                  setSelectedWallet("");
                }}
                class=" border-2  border-violet-300 bg-violet-50 box-border hover:bg-violet-200 duration-200  font-mono py-2 px-2 "
              >
                <FantomLogo className="w-8 h-8" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
