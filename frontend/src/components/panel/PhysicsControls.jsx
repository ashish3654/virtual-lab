import {
  updateRestitution,
  updateFriction,
  updateDensity,
  toggleFixed,
  toggleVelocityVisibility,
} from "../../physics/actions/bodyActions";

const toggleStyle = {
  width: "50px",
  height: "26px",
  borderRadius: "999px",
  position: "relative",
  cursor: "pointer",
  transition: "0.3s",
};

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

      <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
        <span>Show Velocity</span>

        <div
            onClick={() =>
            toggleVelocityVisibility(
                selectedBody
            )
            }
            style={{
            ...toggleStyle,

            background:
                selectedBody.showVelocity
                ? "#38BDF8"
                : "#9CA3AF",
            }}
        >
            <div
            style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "white",
                position: "absolute",
                top: "2px",

                left:
                selectedBody.showVelocity
                    ? "26px"
                    : "2px",

                transition: "0.3s",
            }}
            />
        </div>
        </div>

      <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
        >
        <span>Fixed Object</span>

        <div
            onClick={() =>
            toggleFixed(selectedBody)
            }
            style={{
            ...toggleStyle,

            background:
                selectedBody.isStatic
                ? "#38BDF8"
                : "#9CA3AF",
            }}
        >
            <div
            style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "white",
                position: "absolute",
                top: "2px",

                left:
                selectedBody.isStatic
                    ? "26px"
                    : "2px",

                transition: "0.3s",
            }}
            />
        </div>
        </div>
    </>
  );
};

export default PhysicsControls;