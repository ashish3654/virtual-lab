import Matter from "matter-js";

const { Bodies } = Matter;

export const createWalls = () => {
  const wallThickness = 40;

  const floor = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight - wallThickness / 2,
    window.innerWidth,
    wallThickness,
    {
      isStatic: true,
      render: {
        fillStyle: "#374151",
      },
    }
  );

  const ceiling = Bodies.rectangle(
    window.innerWidth / 2,
    wallThickness / 2,
    window.innerWidth,
    wallThickness,
    {
      isStatic: true,
      render: {
        fillStyle: "#374151",
      },
    }
  );

  const leftWall = Bodies.rectangle(
    wallThickness / 2,
    window.innerHeight / 2,
    wallThickness,
    window.innerHeight,
    {
      isStatic: true,
      render: {
        fillStyle: "#374151",
      },
    }
  );

  const rightWall = Bodies.rectangle(
    window.innerWidth - wallThickness / 2,
    window.innerHeight / 2,
    wallThickness,
    window.innerHeight,
    {
      isStatic: true,
      render: {
        fillStyle: "#374151",
      },
    }
  );

  return [floor, leftWall, rightWall, ceiling];
};