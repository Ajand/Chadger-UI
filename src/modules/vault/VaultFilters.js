import Dropdown from "../common/DropDown";

const VaultFilters = () => {
  return (
    <div className="p-4 bg-violet-800 flex items-center">
      <div class="w-96 ">
        <div class="pb-2 border-b-2 focus:border-2 py-1 px-3 flex justify-between ">
          <input
            class="flex-grow font-mono outline-none bg-violet-800 text-gray-300 focus:text-yellow-300 text-sm"
            type="text"
            placeholder="Search Vaults, Tokens, Addresses, ..."
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-400 hover:text-yellow-300 transition duration-100 cursor-pointer w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VaultFilters;
