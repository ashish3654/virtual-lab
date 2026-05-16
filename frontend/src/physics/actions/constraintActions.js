import Matter from "matter-js";

import { createSpring }
from "../constraints/spring";

import { createRod }
from "../constraints/rod";

import { createString }
from "../constraints/string";

const { Composite } = Matter;

export const connectSpringAction = (
  world,
  selectedBodies,
  clearSelection
) => {
  if (selectedBodies.length !== 2) {
    return;
  }

  const spring = createSpring(
    selectedBodies[0],
    selectedBodies[1]
  );

  Composite.add(world, spring);

  clearSelection([]);
};

export const connectRodAction = (
  world,
  selectedBodies,
  clearSelection
) => {
  if (selectedBodies.length !== 2) {
    return;
  }

  const rod = createRod(
    selectedBodies[0],
    selectedBodies[1]
  );

  Composite.add(world, rod);

  clearSelection([]);
};

export const connectStringAction = (
  world,
  selectedBodies,
  clearSelection
) => {
  if (selectedBodies.length !== 2) {
    return;
  }

  createString(
    world,
    selectedBodies[0],
    selectedBodies[1]
  );

  clearSelection([]);
};