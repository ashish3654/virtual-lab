const Toolbar = ({ addBox, addCircle }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 10,
        display: "flex",
        gap: "10px",
      }}
    >
      <button onClick={addBox}>Add Box</button>
      <button onClick={addCircle}>Add Circle</button>
    </div>
  );
};

export default Toolbar;