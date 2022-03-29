import CurationSelector from "../curation/CurationSelector";
import Sidebar from "../components/Sidebar";
import VaultsTable from "../vault/VaultsTable";

const Mobile = () => {
  return (
    <div className="relative">
      <div className="absolute inline-block w-1/12">
        <Sidebar mobile />
      </div>

      <div className="w-11/12 absolute inline-block top-0 right-0">
        <div className="m-10">
          <CurationSelector />
          <VaultsTable />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
