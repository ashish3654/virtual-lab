import Matter from "matter-js";

import { emitDeleteObject }
from "../../services/socketActions";

import { getNetworkId }
from "../utils/networkId";

const { Composite } = Matter;

export const deleteBodyAction = (
  world,
  selectedBodies,
  clearSelection,
  emitDelete = true
) => {
  if (selectedBodies.length === 0) {
    return;
  }

  const bodyToDelete =
    selectedBodies[0];

  // Emit delete event for
  // locally initiated deletions
  if (emitDelete) {
    emitDeleteObject(
      getNetworkId(bodyToDelete)
    );
  }

  // Remove connected constraints
  const constraints =
    Composite.allConstraints(world);

  constraints.forEach(
    (constraint) => {
      if (
        constraint.bodyA ===
          bodyToDelete ||
        constraint.bodyB ===
          bodyToDelete
      ) {
        Composite.remove(
          world,
          constraint
        );
      }
    }
  );

  // Remove body
  Composite.remove(
    world,
    bodyToDelete
  );

  // Clear selection
  clearSelection([]);
};