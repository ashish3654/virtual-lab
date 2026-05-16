import Matter from "matter-js";

const { Bodies } = Matter;

export const createBox = (x, y) => {
  return Bodies.rectangle(x, y, 80, 80, {
    restitution: 0.8,
    showVelocity: false,
    render: {
      fillStyle: "#3B82F6",
    },
  });
};

export const createCircle = (x, y) => {
  return Bodies.circle(x, y, 40, {
    restitution: 0.9,
    showVelocity: false,
    render: {
      fillStyle: "#F59E0B",
    },
  });
};