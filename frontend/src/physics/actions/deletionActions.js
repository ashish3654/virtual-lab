import Matter from "matter-js";

const { Composite } = Matter;

export const deleteBodyAction = (
  world,
  selectedBodies,
  clearSelection
) => {
  if (selectedBodies.length === 0) {
    return;
  }

  const bodyToDelete =
    selectedBodies[0];

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