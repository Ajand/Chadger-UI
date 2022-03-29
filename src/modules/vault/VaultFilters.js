import { useState } from "react";
import useOuterClick from "../utilities/useOuterClick";

const VaultFilters = () => {
  const sortOptions = [
    { label: "TVL", value: "tvl" },
    { label: "APY", value: "apy" },
  ];

  const [sortBy, setSortBy] = useState("tvl");
  const [sortExpand, setSortExpand] = useState(false);

  const sortByRef = useOuterClick((ev) => {
    setSortExpand(false);
  });

  const [filters, changeFilters] = useState([
    { label: "My Deposits", value: "deposits", checked: false },
    { label: "Production", value: "production", checked: true },
    { label: "Staging", value: "staging", checked: true },
    { label: "Deprecated", value: "deprecated", checked: false },
  ]);

  return (
    <div className="bg-violet-800">
      <div className="p-2  flex items-center justify-between">
        <div>
          <div class="w-96 ">
            <div class="pb-1 border-b-2 focus:border-2 py-1 px-3 flex justify-between ">
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
        <div>
          <div ref={sortByRef} class="w-36 bg-yellow-300 relative">
            <div
              onClick={() => setSortExpand(!sortExpand)}
              class="p-1 border-2 border-yellow-300 text-sm font-mono text-center text-gray-900 cursor-pointer"
            >
              Sort By: {sortOptions.find((op) => op.value === sortBy).label}
            </div>
          </div>
          {sortExpand && (
            <div class="absolute z-20 w-36">
              {sortOptions.map((option, i) => (
                <div
                  key={option.value}
                  className={`text-center text-sm font-mono border-2 p-1 w-full bg-gray-300 hover:bg-yellow-100 duration-200 cursor-pointer ${
                    i === sortOptions.length - 1 && "border-t-0"
                  }`}
                  onClick={() => {
                    setSortBy(option.value);
                    setSortExpand(false);
                  }}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="p-2 border-t border-violet-700 flex">
        {filters.map((filter) => (
          <div
            className={`mr-2 border-2 box-border flex items-center ${
              filter.checked
                ? "bg-violet-100 text-gray-900"
                : " b-violet-100 text-violet-100"
            } text-xs p-0.5 px-2 font-mono cursor-pointer duration-200`}
            onClick={() => {
              const nF = [...filters];
              nF.find((f) => f.value === filter.value).checked = !nF.find(
                (f) => f.value === filter.value
              ).checked;
              changeFilters(nF);
            }}
          >
            {filter.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VaultFilters;
