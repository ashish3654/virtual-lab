import {
  useEffect,
  useState,
} from "react";

import VelocityGraph
from "./VelocityGraph";

import {
  getGraphData,
} from "./dataRecorder";

const GraphPanel = ({
  setShowGraph,
}) => {
  const [data, setData] =
    useState([]);

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

      <VelocityGraph
        data={data}
      />
    </div>
  );
};

export default GraphPanel;