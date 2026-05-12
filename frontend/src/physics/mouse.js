import Matter from "matter-js";

const { Mouse, MouseConstraint } = Matter;

export const setupMouse = (engine, render) => {
  const mouse = Mouse.create(render.canvas);

  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  return mouseConstraint;
};