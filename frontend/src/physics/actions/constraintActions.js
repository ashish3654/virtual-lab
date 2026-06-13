import Matter from "matter-js";

import { emitCreateConstraint }
from "../../services/socketActions";

import { getNetworkId }
from "../utils/networkId";

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
  clearSelection,
  emitConstraint = true
) => {
  if (selectedBodies.length !== 2) {
    return;
  }

  const spring = createSpring(
    selectedBodies[0],
    selectedBodies[1]
  );

  if (emitConstraint) {
    emitCreateConstraint({
      type: "spring",
      bodyAId: getNetworkId(
        selectedBodies[0]
      ),
      bodyBId: getNetworkId(
        selectedBodies[1]
      ),
    });
  }

  Composite.add(world, spring);

  clearSelection([]);
};

export const connectRodAction = (
  world,
  selectedBodies,
  clearSelection,
  emitConstraint = true
) => {
  if (selectedBodies.length !== 2) {
    return;
  }

 const rod = createRod(
    selectedBodies[0],
    selectedBodies[1]
  );

 if (emitConstraint) {
    emitCreateConstraint({
      type: "rod",
      bodyAId: getNetworkId(
        selectedBodies[0]
      ),
      bodyBId: getNetworkId(
        selectedBodies[1]
      ),
    });
  }

  Composite.add(world, rod);

  clearSelection([]);
};

export const connectStringAction = (
  world,
  selectedBodies,
  clearSelection,
  emitConstraint = true
) => {
  if (selectedBodies.length !== 2) {
    return;
  }

  if (emitConstraint) {
    emitCreateConstraint({
      type: "string",
      bodyAId: getNetworkId(
        selectedBodies[0]
      ),
      bodyBId: getNetworkId(
        selectedBodies[1]
      ),
    });
  }

  createString(
    world,
    selectedBodies[0],
    selectedBodies[1]
  );

  clearSelection([]);
};