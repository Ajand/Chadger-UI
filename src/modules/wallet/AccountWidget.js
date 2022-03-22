import { useState, useEffect, useRef } from "react";

import EthereumLogo from "../common/EthereumLogo";
import ArbitrumLogo from "../common/ArbitrumLogo";
import PolygonLogo from "../common/PolygonLogo";
import FantomLogo from "../common/FantomLogo";

const useOuterClick = (callback) => {
  const callbackRef = useRef(); // initialize mutable ref, which stores callback
  const innerRef = useRef(); // returned to client, who marks "border" element

  // update cb on each render, so second useEffect has access to current value
  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      )
        callbackRef.current(e);
    }
  }, []); // no dependencies -> stable click listener

  return innerRef; // convenience for client (doesn't need to init ref himself)
};

const AccountWidget = () => {
  const walletAddress = "0x4A87a2A017Be7feA0F37f03F3379d43665486Ff8";
  const ens = "ajand.eth";

  const [network, setNetwork] = useState("mainnet");

  const [open, setOpen] = useState(false);

  const formatAddress = (address) =>
    `${address.substring(0, 5)}...${address.substring(
      address.length - 3,
      address.length - 1
    )}`;

  const explorerAddress = `https://etherscan.io/`;

  const menuRef = useOuterClick((ev) => {
    setOpen(false);
  });

  return (
    <div className="m-8 border-b-2 pb-5 border-violet-700 ">
      <div className="flex justify-between">
        <a
          className="text-gray-50 font-mono text-lg hover:text-yellow-200"
          href={`${explorerAddress}address/${walletAddress}`}
          target="_blank"
        >
          {ens ? ens : formatAddress(walletAddress)}
        </a>
        <div className="relative" ref={menuRef}>
          <span
            onClick={() => setOpen(!open)}
            className="flex flex-col items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 duration-200  stroke-gray-100 hover:stroke-yellow-200`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </span>
          {open && (
            <div
              class="origin-top-right border-violet-300 border-2 font-mono absolute right-0 mt-2 w-56  shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-violet-100 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1 hover:bg-violet-200 duration-200" role="none">
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-md text-purple-900 "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Edit Info
                </a>
              </div>
              <div class="py-1 hover:bg-violet-200 duration-200" role="none">
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-md text-purple-900 "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Disconnect
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <button
          onClick={() => {
            setNetwork("mainnet");
          }}
          class={` border-2   ${
            network === "mainnet"
              ? "border-orange-300 bg-yellow-300"
              : "border-violet-300 bg-violet-50  hover:bg-violet-200 duration-200"
          }  font-mono py-2 px-2 `}
        >
          <EthereumLogo className="w-8 h-8" />
        </button>
        <button
          onClick={() => {
            setNetwork("polygon");
          }}
          class={` border-2   ${
            network === "polygon"
              ? "border-orange-300 bg-yellow-300"
              : "border-violet-300 bg-violet-50  hover:bg-violet-200 duration-200"
          }  font-mono py-2 px-2 `}
        >
          <PolygonLogo className="w-8 h-8" />
        </button>
        <button
          onClick={() => {
            setNetwork("arbitrum");
          }}
          class={` border-2   ${
            network === "arbitrum"
              ? "border-orange-300 bg-yellow-300"
              : "border-violet-300 bg-violet-50  hover:bg-violet-200 duration-200"
          }  font-mono py-2 px-2 `}
        >
          <ArbitrumLogo className="w-8 h-8" />
        </button>
        <button
          onClick={() => {
            setNetwork("fantom");
          }}
          class={` border-2   ${
            network === "fantom"
              ? "border-orange-300 bg-yellow-300"
              : "border-violet-300 bg-violet-50  hover:bg-violet-200 duration-200"
          }  font-mono py-2 px-2 `}
        >
          <FantomLogo className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default AccountWidget;
