import Matter from "matter-js";

const { Constraint } = Matter;

export const createRod = (
  bodyA,
  bodyB
) => {
  return Constraint.create({
    bodyA,
    bodyB,

    // Fixed rope length
    length: 200,

    // Very stiff
    stiffness: 0.9,

    render: {
      strokeStyle: "#F59E0B",
      lineWidth: 4,
    },
  });
};