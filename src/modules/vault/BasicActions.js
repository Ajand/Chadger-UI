const BasicActions = () => {
  return (
    <div>
        <div className="text-violet-800 pb-2 dark:text-yellow-300 font-mono text-lg border-b border-violet-300 dark:border-violet-900">
          Actions:
        </div>
      <div class="pt-3.5 flex  items-end font-mono items-center">
        
        <button
          type="button"
          class="text-white text-center bg-violet-700 hover:bg-violet-800  text-md px-2 py-1 mr-2 dark:bg-violet-600  focus:outline-none "
        >
          Deposit
        </button>
        <button
          type="button"
          class="text-white text-center bg-violet-700 hover:bg-violet-800  text-md px-2 py-1 mr-2  dark:bg-violet-600  focus:outline-none "
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default BasicActions;
