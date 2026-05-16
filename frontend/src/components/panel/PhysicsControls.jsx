import {
  updateRestitution,
  updateFriction,
  updateDensity,
  toggleFixed,
  toggleVelocityVisibility,
} from "../../physics/actions/bodyActions";

const PhysicsControls = ({
  selectedBody,
}) => {
  return (
    <>
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
              selectedBody,
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
              selectedBody,
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
              selectedBody,
              e.target.value
            )
          }
          style={{ width: "100%" }}
        />
      </div>

      <button
        onClick={() =>
          toggleVelocityVisibility(
            selectedBody
          )
        }
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

      <button
        onClick={() =>
          toggleFixed(selectedBody)
        }
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
    </>
  );
};

export default PhysicsControls;