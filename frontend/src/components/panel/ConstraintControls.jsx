const ConstraintControls = ({
  selectedBodies,
  connectSpring,
  connectRod,
  connectString,
}) => {
  if (selectedBodies.length !== 2) {
    return null;
  }

  return (
    <>
      <button
        onClick={connectSpring}
        style={{
          padding: "10px",
          background: "#7C3AED",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Connect Spring
      </button>

      <button
        onClick={connectRod}
        style={{
          padding: "10px",
          background: "#F59E0B",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Connect Rod
      </button>

      <button
        onClick={connectString}
        style={{
          padding: "10px",
          background: "#EAB308",
          color: "black",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Connect String
      </button>
    </>
  );
};

export default ConstraintControls;