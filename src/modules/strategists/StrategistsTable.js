import { useNavigate } from "react-router-dom";
import AddressResolver from "../common/AddressResolver";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const StrategistsTable = ({ strategists }) => {
  const navigate = useNavigate();

  const strategistAddress = "qwe12";

  console.log(strategists);

  return (
    <div class="relative overflow-x-auto shadow-md font-mono">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-violet-900 dark:text-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Address
            </th>
            <th scope="col" class="px-6 py-3">
              Vaults
            </th>
            <th scope="col" class="px-6 py-3">
              Total TVL
            </th>
            <th scope="col" class="px-6 py-3">
              Max APY
            </th>
          </tr>
        </thead>
        <tbody>
          {strategists.map((strategist) => (
            <tr
              onClick={() => navigate(`/strategist/${strategist.strategist}`)}
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
              key={strategist._id}
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <AddressResolver address={strategist.strategist} />
              </th>
              <td class="px-6 py-4">{strategist.vaults.length}</td>
              <td class="px-6 py-4">
                $
                {numberWithCommas(
                  strategist.vaults.reduce((pV, cV) => {
                    return (
                      pV +
                      cV.apyReports.reduce((pV, cV) => {
                        return pV + parseInt(String(cV.apy));
                      }, 0)
                    );
                  }, 0)
                )}
              </td>
              <td class="px-6 py-4">
                {numberWithCommas(
                  strategist.vaults
                    .map((vault) =>
                      vault.apyReports.reduce((pV, cV) => {
                        return pV + parseInt(String(cV.apy));
                      }, 0)
                    )
                    .sort((a, b) => b - a)[0]
                )}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StrategistsTable;
