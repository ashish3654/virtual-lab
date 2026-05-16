const ObjectStats = ({ selectedBody }) => {
  const speed = Math.sqrt(
    selectedBody.velocity.x ** 2 +
      selectedBody.velocity.y ** 2
  );

  return (
    <>
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
    </>
  );
};

export default ObjectStats;