import {
  setActiveTool,
  getActiveTool,
} from "../../physics/tools/toolManager";

const Toolbar = () => {
  const activeTool =
    getActiveTool();

  const buttonStyle = (tool) => ({
    padding: "10px 16px",

    background:
      activeTool === tool
        ? "#2563EB"
        : "#374151",

    color: "white",

    border: "none",

    borderRadius: "8px",

    cursor: "pointer",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 20,

        display: "flex",
        gap: "10px",

        zIndex: 10,
      }}
    >
      <button
        style={buttonStyle(
          "select"
        )}
        onClick={() =>
          setActiveTool(
            "select"
          )
        }
      >
        Select
      </button>

      <button
        style={buttonStyle("box")}
        onClick={() =>
          setActiveTool("box")
        }
      >
        Box
      </button>

      <button
        style={buttonStyle(
          "circle"
        )}
        onClick={() =>
          setActiveTool(
            "circle"
          )
        }
      >
        Circle
      </button>

      <button
        style={buttonStyle(
          "anchor"
        )}
        onClick={() =>
          setActiveTool(
            "anchor"
          )
        }
      >
        Anchor
      </button>
    </div>
  );
};

export default Toolbar;