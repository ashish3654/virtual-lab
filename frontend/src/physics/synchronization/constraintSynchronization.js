import Matter from "matter-js";

import { socket }
from "../../services/socket";

import { getNetworkId }
from "../utils/networkId";

import {
  connectSpringAction,
  connectRodAction,
  connectStringAction,
} from "../actions/constraintActions";

const { Composite } = Matter;

export function registerConstraintSynchronization(
  engine
) {
  socket.on(
    "constraint-created",
    (data) => {
      console.log(
        "Received constraint:",
        data
      );

      const bodies =
        Composite.allBodies(
          engine.world
        );

      const bodyA =
        bodies.find(
          (body) =>
            getNetworkId(
              body
            ) === data.bodyAId
        );

      const bodyB =
        bodies.find(
          (body) =>
            getNetworkId(
              body
            ) === data.bodyBId
        );

      if (
        !bodyA ||
        !bodyB
      ) {
        return;
      }

      if (
        data.type === "spring"
      ) {
        connectSpringAction(
          engine.world,
          [bodyA, bodyB],
          () => {},
          false
        );
      }

      if (
        data.type === "rod"
      ) {
        connectRodAction(
          engine.world,
          [bodyA, bodyB],
          () => {},
          false
        );
      }

      if (
        data.type === "string"
      ) {
        connectStringAction(
          engine.world,
          [bodyA, bodyB],
          () => {},
          false
        );
      }
    }
  );
}