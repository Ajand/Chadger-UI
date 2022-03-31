import { useNavigate } from "react-router-dom";
import AddressResolver from "../common/AddressResolver";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const StrategistsTable = ({ strategists, sortBy, searchString }) => {
  const navigate = useNavigate();

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
          {strategists
            .map((strategist) => ({
              strategist: strategist.strategist,
              vaults: strategist.vaults,
            }))
            .sort((b, a) => {
              if (sortBy === "vaults") {
                return a.vaults.length - b.vaults.length;
              }
              if (sortBy === "tvl") {
                return a.vaults
                  .reduce((pV, cV) => {
                    return cV.tvl.add(pV);
                  }, 0)
                  .sub(
                    b.vaults.reduce((pV, cV) => {
                      return cV.tvl.add(pV);
                    }, 0)
                  )
                  .gte(0)
                  ? 1
                  : -1;
              }
              return a.vaults
                .map((vault) =>
                  vault.apyReports.reduce((pV, cV) => {
                    return cV.apy.add(pV);
                  }, 0)
                )
                .sort((a, b) => b - a)[0]
                .sub(
                  b.vaults
                    .map((vault) =>
                      vault.apyReports.reduce((pV, cV) => {
                        return cV.apy.add(pV);
                      }, 0)
                    )
                    .sort((a, b) => b - a)[0]
                )
                .gte(0)
                ? 1
                : -1;
            })
            .filter((strategist) => {
              if (!searchString) return true;
              return (
                strategist.strategist
                  .toLowerCase()
                  .search(searchString.toLowerCase()) > -1
              );
            })
            .map((strategist) => (
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
                    String(
                      strategist.vaults.reduce((pV, cV) => {
                        return cV.tvl.add(pV);
                      }, 0)
                    )
                  )}
                </td>
                <td class="px-6 py-4">
                  {numberWithCommas(
                    strategist.vaults
                      .map((vault) =>
                        vault.apyReports.reduce((pV, cV) => {
                          return cV.apy.add(pV);
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

/*
{strategists
            .sort((b, a) => {
              return 1;
              if (sortBy === "vaults") {
                return a.vaults.length - b.vaults.length;
              }
              if (sortBy === "tvl") {
                return a.vaults
                  .reduce((pV, cV) => {
                    return cV.tvl.add(pV);
                  }, 0)
                  .sub(
                    b.vaults.reduce((pV, cV) => {
                      return cV.tvl.add(pV);
                    }, 0)
                  )
                  .gte(0)
                  ? 1
                  : -1;
              }

              
            })
            .filter((strategist) => {
              return true
              //if (!searchString) return true;
              //return (
              //  strategist.strategist
              //    .toLowerCase()
              //    .search(searchString.toLowerCase()) > -1
              //);
            })
            .map((strategist) => (
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
                    String(
                      strategist.vaults.reduce((pV, cV) => {
                        return cV.tvl.add(pV);
                      }, 0)
                    )
                  )}
                </td>
                <td class="px-6 py-4">
                  {numberWithCommas(
                    strategist.vaults
                      .map((vault) =>
                        vault.apyReports.reduce((pV, cV) => {
                          return cV.apy.add(pV);
                        }, 0)
                      )
                      .sort((a, b) => b - a)[0]
                  )}
                  %
                </td>
              </tr>
            ))}
*/
