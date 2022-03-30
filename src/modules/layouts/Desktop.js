import { Routes, Route, Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import VaultsTable from "../vault/VaultsTable";
import VaultFilters from "../vault/VaultFilters";

import StrategistsTable from "../strategists/StrategistsTable";
import StrategistFilters from "../strategists/StrategistFilters";

import StrategistInfo from "../strategists/StrategistInfo";

import AddVault from "../vault/AddVault";

import VaultDetails from "../vault/VaultDetails";


const Desktop = () => {
  return (
    <div className="flex ">
      <div className="w-3/12 inline-block ">
        <Sidebar />
      </div>
      <div className="w-9/12 inline-block ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="m-10">
                  <VaultFilters />
                  <VaultsTable />
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
      </div>
    </div>
  );
};

export default Desktop;
