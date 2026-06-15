import Matter from "matter-js";

const { Bodies } = Matter;

export const createWalls = (
  width,
  height
) => {

  const wallThickness = 40;

  const floor =
    Bodies.rectangle(
      width / 2,
      height -
        wallThickness / 2,
      width,
      wallThickness,
      {
        isStatic: true,

        render: {
          fillStyle:
            "#374151",
        },
      }
    );

  const ceiling =
    Bodies.rectangle(
      width / 2,
      wallThickness / 2,
      width,
      wallThickness,
      {
        isStatic: true,

        render: {
          fillStyle:
            "#374151",
        },
      }
    );

  const leftWall =
    Bodies.rectangle(
      wallThickness / 2,
      height / 2,
      wallThickness,
      height,
      {
        isStatic: true,

        render: {
          fillStyle:
            "#374151",
        },
      }
    );

  const rightWall =
    Bodies.rectangle(
      width -
        wallThickness / 2,
      height / 2,
      wallThickness,
      height,
      {
        isStatic: true,

        render: {
          fillStyle:
            "#374151",
        },
      }
    );

  return [
    floor,
    leftWall,
    rightWall,
    ceiling,
  ];
};