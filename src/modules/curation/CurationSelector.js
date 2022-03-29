const CurationSelector = () => {
  const open = false;

  return (
    <div className="bg-purple-400">
      <div className="inline-block">Curation List</div>
      <div className="inline-block">None</div>
      {open && (
        <div className="inline-block">
          <div>None</div>
          <div>Official</div>
          <div>X</div>
          <div>Y</div>
          <div>Z</div>
        </div>
      )}
    </div>
  );
};

export default CurationSelector;
