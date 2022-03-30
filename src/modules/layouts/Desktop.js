import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import VaultsTable from "../vault/VaultsTable";
import VaultFilters from "../vault/VaultFilters";

import StrategistsTable from "../strategists/StrategistsTable";
import StrategistFilters from "../strategists/StrategistFilters";

import StrategistInfo from "../strategists/StrategistInfo";

import AddVault from "../vault/AddVault";

import VaultDetails from "../vault/VaultDetails";

import { ethers } from "ethers";

import ChadgerRegistry from "../api/Contracts/ChadgerRegistry.json";

const Desktop = () => {
  const [vaultsSummary, setVS] = useState([]);
  const [loadingVaults, setLoadingVaults] = useState(true);

  const network = {
    blockExplorer: "https://etherscan.io",
  };

  useEffect(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const chadgerAddress = "0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB";
    const cCo = new ethers.Contract(
      chadgerAddress,
      ChadgerRegistry.abi,
      provider
    );

    setVS(await cCo.getVaultsSummary(await signer.getAddress()));

    setLoadingVaults(false);
  }, []);

  return (
    <div className="flex ">
      <div className="w-3/12 inline-block ">
        <Sidebar />
      </div>
      <div className="w-9/12 inline-block ">
        {loadingVaults ? (
          <div>Loading ...</div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="m-10">
                    <VaultFilters />
                    <VaultsTable vaults={vaultsSummary} network={network} />
                  </div>
                </>
              }
            />
            <Route
              path="/strategists"
              element={
                <>
                  <div className="m-10">
                    <StrategistFilters />
                    <StrategistsTable />
                  </div>
                </>
              }
            />
            <Route
              path="/strategist/:address"
              element={
                <>
                  <div className="m-10">
                    <StrategistInfo />
                    <VaultFilters />
                    <VaultsTable noStrategist />
                  </div>
                </>
              }
            />

            <Route
              path="/add-vault"
              element={
                <>
                  <div className="m-10  ">
                    <AddVault />
                  </div>
                </>
              }
            />

            <Route
              path="/vault/:id"
              element={
                <>
                  <div className="m-10  ">
                    <VaultDetails />
                  </div>
                </>
              }
            />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default Desktop;
