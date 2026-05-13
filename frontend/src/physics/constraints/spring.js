import Matter from "matter-js";

const { Constraint } = Matter;

export const createSpring = (
  bodyA,
  bodyB
) => {
  return Constraint.create({
    bodyA,
    bodyB,

    // Natural resting length
    length: 200,

    // Spring strength
    stiffness: 0.02,

    // Visual appearance
    render: {
      strokeStyle: "#A855F7",
      lineWidth: 3,
    },
  });
};