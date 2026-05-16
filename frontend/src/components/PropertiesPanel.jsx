import Matter from "matter-js";

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

  // Main selected body
  const selectedBody = selectedBodies[0];

  const speed = Math.sqrt(
    selectedBody.velocity.x ** 2 +
      selectedBody.velocity.y ** 2
  );

  const updateRestitution = (value) => {
    selectedBody.restitution = Number(value);
  };

  const updateFriction = (value) => {
    selectedBody.friction = Number(value);
  };

  const updateDensity = (value) => {
    Matter.Body.setDensity(
      selectedBody,
      Number(value)
    );
  };

  const toggleFixed = () => {
    Matter.Body.setStatic(
      selectedBody,
      !selectedBody.isStatic
    );
  };

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

      <p>
        <strong>Mass:</strong>{" "}
        {selectedBody.mass.toFixed(2)}
      </p>

      <p>
        <strong>Velocity X:</strong>{" "}
        {selectedBody.velocity.x.toFixed(2)}
      </p>

      <p>
        <strong>Velocity Y:</strong>{" "}
        {(-selectedBody.velocity.y).toFixed(
          2
        )}
      </p>

      <p>
        <strong>Speed:</strong>{" "}
        {speed.toFixed(2)}
      </p>

      {/* RESTITUTION */}
      <div>
        <label>
          Restitution:{" "}
          {selectedBody.restitution.toFixed(
            2
          )}
        </label>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={selectedBody.restitution}
          onChange={(e) =>
            updateRestitution(
              e.target.value
            )
          }
          style={{ width: "100%" }}
        />
      </div>

      {/* FRICTION */}
      <div>
        <label>
          Friction:{" "}
          {selectedBody.friction.toFixed(2)}
        </label>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={selectedBody.friction}
          onChange={(e) =>
            updateFriction(
              e.target.value
            )
          }
          style={{ width: "100%" }}
        />
      </div>

      {/* DENSITY */}
      <div>
        <label>
          Density:{" "}
          {selectedBody.density.toFixed(4)}
        </label>

        <input
          type="range"
          min="0.0001"
          max="0.01"
          step="0.0001"
          value={selectedBody.density}
          onChange={(e) =>
            updateDensity(
              e.target.value
            )
          }
          style={{ width: "100%" }}
        />
      </div>

      <button
        onClick={() => {
          selectedBody.showVelocity =
            !selectedBody.showVelocity;
        }}
        style={{
          padding: "10px",
          background: "#2563EB",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        {selectedBody.showVelocity
          ? "Hide Velocity"
          : "Show Velocity"}
      </button>

      {/* CONNECT SPRING */}
      {selectedBodies.length === 2 && (
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
      )}

      {selectedBodies.length === 2 && (
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
      )}


      {selectedBodies.length === 2 && (
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
      )}
      <button
        onClick={toggleFixed}
        style={{
          padding: "10px",
          background: "#059669",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        {selectedBody.isStatic
          ? "Unfix Object"
          : "Fix Object"}
      </button>

      {/* DELETE */}
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