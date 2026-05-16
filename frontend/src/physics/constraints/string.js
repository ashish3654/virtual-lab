import Matter from "matter-js";

const {
  Bodies,
  Constraint,
  Composite,
} = Matter;

export const createString = (
  world,
  bodyA,
  bodyB
) => {
  const segments = 50;

  const ropeLength = 500;

  const segmentLength =
    ropeLength / segments;

  const nodes = [];

  const constraints = [];

  // Direction vector
  const dx =
    bodyB.position.x - bodyA.position.x;

  const dy =
    bodyB.position.y - bodyA.position.y;

  for (let i = 0; i < segments; i++) {
    const x =
      bodyA.position.x +
      (dx * (i + 1)) / (segments + 1);

    const y =
      bodyA.position.y +
      (dy * (i + 1)) / (segments + 1);

    const node = Bodies.circle(x, y, 6, {
      density:0.001,
      collisionFilter: {
        group: -1,
      },

      render: {
        fillStyle: "#EAB308",
      },
    });

    nodes.push(node);
  }

  // Connect bodyA to first node
  constraints.push(
    Constraint.create({
      bodyA,
      bodyB: nodes[0],
      length: segmentLength,
      stiffness: 1,
      render: {
        strokeStyle: "#EAB308",
      },
    })
  );

  // Connect intermediate nodes
  for (let i = 0; i < nodes.length - 1; i++) {
    constraints.push(
      Constraint.create({
        bodyA: nodes[i],
        bodyB: nodes[i + 1],
        length: segmentLength,
        stiffness: 1,
        render: {
          strokeStyle: "#EAB308",
        },
      })
    );
  }

  // Connect last node to bodyB
  constraints.push(
    Constraint.create({
      bodyA: nodes[nodes.length - 1],
      bodyB,
      length: segmentLength,
      stiffness: 1,
      render: {
        strokeStyle: "#EAB308",
      },
    })
  );

  // Add everything to world
  Composite.add(world, [
    ...nodes,
    ...constraints,
  ]);
};