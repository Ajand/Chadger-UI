const YourRoles = ({ vault, userAddress }) => {
  if (
    vault.strategist !== userAddress ||
    vault.guardian !== userAddress ||
    vault.keeper !== userAddress
  )
    return <div></div>;
  return (
    <div>
      <div className="text-violet-800 pb-2 dark:text-yellow-300 font-mono text-lg border-b border-violet-300 dark:border-violet-900">
        Your Roles:
      </div>
      <div class="pt-3.5   items-end font-mono items-center width-full">
        {vault.strategist == userAddress && (
          <button
            type="button"
            class="text-white mb-2 text-center border border-violet-600 dark:border-violet-400 text-violet-600 hover:text-violet-800  text-md px-2 py-1 mr-2  dark:text-violet-400  focus:outline-none "
          >
            Strategist
          </button>
        )}
        {vault.strategist == userAddress && (
          <button
            type="button"
            class="text-white mb-2 text-center border border-violet-600 text-violet-600 dark:border-violet-400 hover:text-violet-800  text-md px-2 py-1 mr-2 dark:text-violet-400  focus:outline-none "
          >
            Governance
          </button>
        )}
        {vault.keeper == userAddress && (
          <button
            type="button"
            class="text-white mb-2 text-center border border-violet-600 dark:border-violet-400 text-violet-600 hover:text-violet-800  text-md px-2 py-1 mr-2  dark:text-violet-400  focus:outline-none "
          >
            Keeper
          </button>
        )}
        {vault.guardian == userAddress && (
          <button
            type="button"
            class="text-white mb-2 text-center border border-violet-600 dark:border-violet-400 text-violet-600 hover:text-violet-800  text-md px-2 py-1 mr-2  dark:text-violet-400  focus:outline-none "
          >
            Guardian
          </button>
        )}
      </div>
    </div>
  );
};

export default YourRoles;
