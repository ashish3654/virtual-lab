import Matter from "matter-js";

import { createWalls }
from "../objects/walls";

import { setupMouse }
from "../engine/mouse";

const { Composite } = Matter;

export const initializeWorld = (
  engine,
  render
) => {
  const walls =
    createWalls(
      render.options.width,
      render.options.height
    );

  const mouseConstraint =
    setupMouse(engine, render);

  Composite.add(engine.world, [
    ...walls,
    mouseConstraint,
  ]);

  return {
    mouseConstraint,
  };
};