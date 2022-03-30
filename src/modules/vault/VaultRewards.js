const VaultRewards = () => {
  return (
    <div className="mt-4">
      <div className="text-violet-800 dark:text-yellow-300 font-mono text-lg">
        Rewards:
      </div>
      <table class="w-full font-mono mt-4 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-violet-900 dark:text-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              Token
            </th>
            <th scope="col" class="px-6 py-3">
              Amount
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              APY
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            //onClick={() => navigate(`/strategist/${strategistAddress}`)}
            class="bg-white text-xs border-t  dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
          >
            <th
              scope="row"
              class="px-6 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Gold
            </th>
            <td class="px-6 py-3">15</td>
            <td class="px-6 py-3">$56,238</td>
            <td class="px-6 py-3">1,560%</td>
          </tr>
          <tr
            //onClick={() => navigate(`/strategist/${strategistAddress}`)}
            class="bg-white text-xs border-t dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
          >
            <th
              scope="row"
              class="px-6 py-3  font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Silver
            </th>
            <td class="px-6 py-3">15</td>
            <td class="px-6 py-3">$56,238</td>
            <td class="px-6 py-3">1,560%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VaultRewards;
