import CurationSelector from "../curation/CurationSelector";
import Sidebar from "../components/Sidebar";
import VaultsTable from "../vault/VaultsTable";

const Desktop = () => {
  return (
    <div className="flex">
      <div className="w-3/12 inline-block">
        <Sidebar />
      </div>
      <div className="w-9/12 inline-block">
        <div className="m-10">
          <CurationSelector />
          <VaultsTable />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
