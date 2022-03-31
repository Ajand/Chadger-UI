import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// TODO add pagination
// TODO add deposits
import ApproveOrDepositDialog from "./ApproveOrDepositDialog";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const beautifyAddress = (address) =>
  `${address.substring(0, 6)}...${address.substring(
    address.length - 6,
    address.length
  )}`;

const VaultsTable = ({ noStrategist, vaults, network, strategists }) => {
  const navigate = useNavigate();
  const { address } = useParams();

  const [aod, setAod] = useState(null);

  const vaultId = "123";

  const targetVaults = strategists
    ? strategists.find((str) => str.strategist == address).vaults
    : vaults;

  const formattedVaults = targetVaults.map((vault) => ({
    apyReports: vault["apyReports"],
    deposits: vault["deposits"],
    name: vault["name"],
    symbol: vault["symbol"],
    strategist: vault["strategist"],
    token: vault["token"],
    tvl: vault["tvl"],
    vaultAddress: vault["vaultAddress"],
    status: vault["status"],
  }));

  return (
    <div>
      {aod && (
        <ApproveOrDepositDialog
          vault={formattedVaults.find((vaults) => vaults.vaultAddress === aod)}
          setVault={setAod}
        />
      )}
      <div class="relative overflow-x-auto shadow-md font-mono">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-violet-900 dark:text-gray-50">
            <tr>
              {!noStrategist && (
                <th scope="col" class="px-6 py-3">
                  Strategist
                </th>
              )}

              <th scope="col" class="px-6 py-3">
                Vault Name
              </th>
              <th scope="col" class="px-6 py-3">
                Deposit Token
              </th>
              <th scope="col" class="px-6 py-3">
                TVL
              </th>
              <th scope="col" class="px-6 py-3">
                APY
              </th>
              <th scope="col" class="px-6 py-3">
                My Deposits
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Ape
              </th>
            </tr>
          </thead>
          <tbody>
            {formattedVaults.map((fV) => (
              <tr
                onClick={() => navigate(`/vault/${fV.vaultAddress}`)}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer "
              >
                {!noStrategist && (
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {beautifyAddress(fV.strategist)}
                  </th>
                )}

                <td class="px-6 py-4">
                  {fV.name} | {fV.symbol}
                </td>
                <td class="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={`${network.blockExplorer}/address/${fV.token.tokenAddress}`}
                    target="_blank"
                    class="text-blue-700"
                  >
                    {fV.token.symbol}
                  </a>
                </td>
                <td class="px-6 py-4">
                  ${numberWithCommas(parseInt(String(fV.tvl)))}
                </td>
                <td class="px-6 py-4">
                  {numberWithCommas(
                    fV.apyReports.reduce((pV, cV) => {
                      return pV + parseInt(String(cV.apy));
                    }, 0)
                  )}
                  %
                </td>
                <td class="px-6 py-4">
                  ${numberWithCommas(parseInt(String(fV.deposits.usd)))}
                </td>
                <td class="px-6 pt-3.5 flex justify-center items-end">
                  <button
                    type="button"
                    class="text-white text-center bg-blue-700 hover:bg-blue-800  text-xs px-2 py-1 mr-2 mb-2 dark:bg-blue-600  focus:outline-none "
                    onClick={(e) => {
                      e.stopPropagation();
                      setAod(fV.vaultAddress);
                    }}
                  >
                    Deposit
                  </button>
                  <button
                    type="button"
                    class="text-white text-center bg-blue-700 hover:bg-blue-800  text-xs px-2 py-1 mr-2 mb-2 dark:bg-blue-600  focus:outline-none "
                  >
                    Withdraw
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VaultsTable;
