const PropertiesPanel = ({ selectedBody }) => {
  if (!selectedBody) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        width: "250px",
        background: "#1F2937",
        color: "white",
        padding: "16px",
        borderRadius: "12px",
        zIndex: 10,
      }}
    >
      <h2>Selected Object</h2>

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
        {-selectedBody.velocity.y.toFixed(2)}
      </p>

      <p>
        <strong>Speed:</strong>{" "}
        {Math.sqrt(
          selectedBody.velocity.x ** 2 +
            selectedBody.velocity.y ** 2
        ).toFixed(2)}
      </p>

      <p>
        <strong>Restitution:</strong>{" "}
        {selectedBody.restitution}
      </p>

      <p>
        <strong>Friction:</strong>{" "}
        {selectedBody.friction}
      </p>
    </div>
  );
};

export default PropertiesPanel;