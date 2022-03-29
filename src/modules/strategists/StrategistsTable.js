// TODO add pagination
// TODO add deposits
import { useNavigate } from "react-router-dom";

const StrategistsTable = () => {
  const navigate = useNavigate();

  const strategistAddress = "qwe12";

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
              Total APR
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={() => navigate(`/strategist/${strategistAddress}`)}
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              ajand.eth
            </th>
            <td class="px-6 py-4">15</td>
            <td class="px-6 py-4">$56,238</td>
            <td class="px-6 py-4">1,560%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StrategistsTable;
