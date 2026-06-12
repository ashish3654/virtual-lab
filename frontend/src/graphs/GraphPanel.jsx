import {
  useEffect,
  useState,
} from "react";

import VelocityGraph
from "./VelocityGraph";

import KineticEnergyGraph
  from "./KineticEnergyGraph";

import ForceGraph
  from "./ForceGraph";

import {
  getGraphData,
} from "./dataRecorder";

const GraphPanel = ({
  setShowGraph,
}) => {
  const [data, setData] =
    useState([]);

  const [
    selectedGraph,setSelectedGraph,] = 
    useState( "velocity");

  useEffect(() => {
    const interval =
      setInterval(() => {
        setData([
          ...getGraphData(),
        ]);
      }, 100);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,

        background: "white",

        padding: "15px",

        width: "700px",

        height: "350px",

        overflow: "hidden",

        borderRadius: "10px",

        zIndex: 20,
      }}
    >

      <button
        onClick={() =>
          setShowGraph(false)
        }
        style={{
          position: "absolute",

          top: 10,

          right: 10,

          border: "none",

          background: "transparent",

          fontSize: "24px",

          cursor: "pointer",

          color: "#444",

          fontWeight: "bold",

          zIndex: 100,
        }}
      >
        ×
      </button>

      <select
        value={selectedGraph}
        onChange={(e) =>
          setSelectedGraph(
            e.target.value
          )
        }

        style={{
          marginBottom:
            "10px",

          padding: "5px",
        }}
      >
        <option value="velocity">
          Velocity
        </option>

        <option value="kinetic">
          Kinetic Energy
        </option>

        <option value="force">
          Force
        </option>
      </select>

      {selectedGraph ===
        "velocity" && (
        <VelocityGraph
          data={data}
        />
      )}

      {selectedGraph ===
        "kinetic" && (
        <KineticEnergyGraph
          data={data}
        />
      )}

      {selectedGraph ===
        "force" && (
        <ForceGraph
          data={data}
        />
      )}
    </div>
  );
};

export default GraphPanel;