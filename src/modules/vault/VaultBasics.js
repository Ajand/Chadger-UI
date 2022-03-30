import AddressResolver from "../common/AddressResolver";
import moment from "moment";

const VaultBasics = ({ network, vault }) => {
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
          <AddressResolver
            className="cursor-pointer text-violet-800 dark:text-yellow-300"
            address={vault.vaultAddress}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Vault Status</div>
          <div className=" text-violet-800 dark:text-yellow-300">
            {vault.status === 0 && "Staging"}
            {vault.status === 1 && "Production"}
            {vault.status === 2 && "Deprecated"}
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
          <AddressResolver
            className="cursor-pointer text-violet-800 dark:text-yellow-300"
            address={vault.strategist}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Strategy Address</div>
          <AddressResolver
            className="cursor-pointer text-violet-800 dark:text-yellow-300"
            address={vault.strategy}
          />
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-600 py-2">
        <div className="flex justify-between">
          <div>Deposit Token</div>
          <a
            href={`${network.blockExplorer}/address/${vault.token.tokenAddress}`}
            target="_blank"
            className="cursor-pointer text-violet-800 dark:text-yellow-300"
          >
            {vault.token.symbol} | {vault.token.name}
          </a>
        </div>
      </div>
      <div className="border-t border-gray-300 dark:border-gray-600 py-2">
        <div className="flex justify-between ">
          <div>Life Time Earned</div>
          <div className=" text-violet-800 dark:text-yellow-300">
            {String(vault.lifeTimeEarned)} {vault.token.symbol}
          </div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Last Harvest At</div>
          <div className=" text-violet-800 dark:text-yellow-300">
            {moment(parseInt(String(vault.lastHarvestedAt)) * 1000).fromNow()}
          </div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Last Harvest Amount</div>
          <div className=" text-violet-800 dark:text-yellow-300">
            {String(vault.lastHarvestAmount)} {vault.token.symbol}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 dark:border-gray-600 py-2">
        <div className="flex justify-between ">
          <div>Strategist Performance Fee</div>
          <div className=" text-violet-800 dark:text-yellow-300">{parseInt(String(vault.performanceFeeStrategist))/100}%</div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Governance Performance Fee</div>
          <div className=" text-violet-800 dark:text-yellow-300">{parseInt(String(vault.performanceFeeGovernance))/100}%</div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Withdrawal Fee</div>
          <div className=" text-violet-800 dark:text-yellow-300">{parseInt(String(vault.withdrawalFee))/100}%</div>
        </div>
        <div className="flex justify-between mt-1.5">
          <div>Management Fee</div>
          <div className=" text-violet-800 dark:text-yellow-300">{parseInt(String(vault.managementFee))/100}%</div>
        </div>
      </div>
    </div>
  );
};

export default VaultBasics;
