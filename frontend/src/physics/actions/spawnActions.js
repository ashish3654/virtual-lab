import Matter from "matter-js";

import {
  createBox,
  createCircle,
} from "../objects/objectFactory";

const { Composite } = Matter;

export const addBoxAction = (
  world
) => {
  const box = createBox(
    Math.random() * 800 + 100,
    50
  );

  Composite.add(world, box);
};

export const addCircleAction = (
  world
) => {
  const circle = createCircle(
    Math.random() * 800 + 100,
    50
  );

  Composite.add(world, circle);
};