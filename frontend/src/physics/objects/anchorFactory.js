import Matter from "matter-js";

const { Bodies } = Matter;

export const createAnchor = (
  x,
  y
) => {
  return Bodies.circle(x, y, 10, {
    isStatic: true,

    showVelocity: false,

    render: {
      fillStyle: "#EF4444",
    },
  });
};