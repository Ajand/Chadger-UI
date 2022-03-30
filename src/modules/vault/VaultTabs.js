const VaultTabs = ({ tab, setTab }) => {
  return (
    <div className="flex border-b-2 text-center font-mono  mt-4 dark:bg-violet-500 bg-violet-400 border-violet-300">
      <div
        className={`w-1/3 py-1 cursor-pointer duration-200 ${
          tab === 0 ? "bg-yellow-300" : "hover:bg-yellow-200"
        }`}
        onClick={() => setTab(0)}
      >
        Basics
      </div>
      <div
        className={`w-1/3 py-1 cursor-pointer duration-200 ${
          tab === 1 ? "bg-yellow-300" : "hover:bg-yellow-200"
        }`}
        onClick={() => setTab(1)}
      >
        User Guide
      </div>
      <div
        className={`w-1/3 py-1 cursor-pointer duration-200 ${
          tab === 2 ? "bg-yellow-300" : "hover:bg-yellow-200"
        }`}
        onClick={() => setTab(2)}
      >
        Strategy Diagram
      </div>
    </div>
  );
};

export default VaultTabs;
