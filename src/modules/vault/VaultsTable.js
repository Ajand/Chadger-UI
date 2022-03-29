// TODO add pagination
// TODO add deposits

const VaultsTable = ({ noStrategist }) => {
  return (
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
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer ">
            {!noStrategist && (
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                ajand.eth
              </th>
            )}

            <td class="px-6 py-4">wBTC</td>
            <td class="px-6 py-4">wBTC</td>
            <td class="px-6 py-4">$56,238</td>
            <td class="px-6 py-4">1,560%</td>
            <td class="px-6 py-4">$1283</td>
            <td class="px-6 pt-3.5 flex justify-center items-end">
              <button
                type="button"
                class="text-white text-center bg-blue-700 hover:bg-blue-800  text-xs px-2 py-1 mr-2 mb-2 dark:bg-blue-600  focus:outline-none "
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
        </tbody>
      </table>
    </div>
  );
};

export default VaultsTable;
