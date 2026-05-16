import Matter from "matter-js";

import { createWalls }
from "../objects/walls";

import {
  createBox,
  createCircle,
} from "../objects/objectFactory";

import { setupMouse }
from "../engine/mouse";

const { Composite } = Matter;

export const initializeWorld = (
  engine,
  render
) => {
  // Walls
  const walls = createWalls();

  // Initial objects
  const box1 = createBox(
    400,
    200
  );

  const box2 = createBox(
    500,
    50
  );

  const circle = createCircle(
    700,
    100
  );

  // Mouse
  const mouseConstraint =
    setupMouse(engine, render);

  // Add everything
  Composite.add(engine.world, [
    ...walls,
    box1,
    box2,
    circle,
    mouseConstraint,
  ]);
};