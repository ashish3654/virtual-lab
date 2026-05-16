import ObjectStats from "./ObjectStats";
import PhysicsControls from "./PhysicsControls";
import ConstraintControls from "./ConstraintControls";

const PropertiesPanel = ({
  selectedBodies,
  deleteBody,
  connectSpring,
  connectRod,
  connectString,
}) => {
  if (selectedBodies.length === 0) {
    return null;
  }

  const selectedBody = selectedBodies[0];

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        width: "300px",
        background: "#1F2937",
        color: "white",
        padding: "16px",
        borderRadius: "12px",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2>
        Selected Objects:{" "}
        {selectedBodies.length}
      </h2>

      <ObjectStats
        selectedBody={selectedBody}
      />

      <PhysicsControls
        selectedBody={selectedBody}
      />

      <ConstraintControls
        selectedBodies={selectedBodies}
        connectSpring={connectSpring}
        connectRod={connectRod}
        connectString={connectString}
      />

      <button
        onClick={deleteBody}
        style={{
          padding: "10px",
          background: "#DC2626",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Delete Object
      </button>
    </div>
  );
};

export default PropertiesPanel;