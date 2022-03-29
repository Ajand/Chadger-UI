import { Routes, Route, Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import VaultsTable from "../vault/VaultsTable";
import VaultFilters from "../vault/VaultFilters";

import StrategistsTable from "../strategists/StrategiestsTable";
import StrategiestFilters from "../strategists/StrategiestFilters";

const Desktop = () => {
  return (
    <div className="flex">
      <div className="w-3/12 inline-block">
        <Sidebar />
      </div>
      <div className="w-9/12 inline-block">
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
            path="/strategiests"
            element={
              <>
                <div className="m-10">
                  <StrategiestFilters />
                  <StrategistsTable />
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
