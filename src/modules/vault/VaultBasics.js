const VaultBasics = () => {
  const beautifyAddress = (address) =>
    `${address.substring(0, 6)}...${address.substring(
      address.length - 6,
      address.length
    )}`;

  const address = "0x4A87a2A017Be7feA0F37f03F3379d43665486Ff8";
  const ens = "ajand.eth";

  return (
    <div className="mt-5 text-gray-900 font-mono dark:text-gray-200">
      <div className="py-2">
        <div className="flex justify-between">
          <div>Vault Address</div>
          <div className="cursor-pointer text-violet-800 dark:text-yellow-300">
            {beautifyAddress(address)}
          </div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Vault Status</div>
          <div className=" text-violet-800 dark:text-yellow-300">
            Deprecated
          </div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Vault Version</div>
          <div className="text-violet-800 dark:text-yellow-300">1.5</div>
        </div>
      </div>
      <div className="border-t border-gray-300 dark:border-gray-600 py-2">
        <div className="flex justify-between">
          <div>Strategist</div>
          <div className="cursor-pointer text-violet-800 dark:text-yellow-300">
            {beautifyAddress(address)}
          </div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Strategy Address</div>
          <div className="cursor-pointer text-violet-800 dark:text-yellow-300">
            {beautifyAddress(address)}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-600 py-2">
        <div className="flex justify-between">
          <div>Deposit Token</div>
          <div className="cursor-pointer text-violet-800 dark:text-yellow-300">
            Mock
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 dark:border-gray-600 py-2">
        <div className="flex justify-between ">
          <div>Life Time Earned</div>
          <div className=" text-violet-800 dark:text-yellow-300">5,000$</div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Last Harvest At</div>
          <div className=" text-violet-800 dark:text-yellow-300">
            2 Hours Ago
          </div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Last Harvest Amount</div>
          <div className=" text-violet-800 dark:text-yellow-300">1,500$</div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Asset At Last Harvest</div>
          <div className=" text-violet-800 dark:text-yellow-300">200$</div>
        </div>
      </div>
      <div className="border-t border-gray-300 dark:border-gray-600 py-2">
        <div className="flex justify-between ">
          <div>Strategist Performance Fee</div>
          <div className=" text-violet-800 dark:text-yellow-300">5.0%</div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Governance Performance Fee</div>
          <div className=" text-violet-800 dark:text-yellow-300">5.0%</div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Withdrawal Fee</div>
          <div className=" text-violet-800 dark:text-yellow-300">0.1%</div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Management Fee</div>
          <div className=" text-violet-800 dark:text-yellow-300">0.1%</div>
        </div>
      </div>
    </div>
  );
};

export default VaultBasics;
