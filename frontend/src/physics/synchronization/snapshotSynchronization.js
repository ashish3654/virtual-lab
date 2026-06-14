import Matter from "matter-js";

import { socket }
from "../../services/socket";

import {
  createBox,
  createCircle,
} from "../objects/objectFactory";

import { createAnchor }
from "../objects/anchorFactory";

import {
  connectSpringAction,
  connectRodAction,
  connectStringAction,
} from "../actions/constraintActions";

import { getNetworkId }
from "../utils/networkId";

const { Composite } = Matter;

export function registerSnapshotSynchronization(
  engine
) {
  socket.on(
    "room-snapshot",
    (snapshot) => {
      console.log(
        "Received snapshot:",
        snapshot
      );

      // Recreate objects
      snapshot.objects.forEach(
        (object) => {
          let body;

          if (
            object.type === "box"
          ) {
            body = createBox(
              object.x,
              object.y,
              object.id
            );
          }

          if (
            object.type ===
            "circle"
          ) {
            body = createCircle(
              object.x,
              object.y,
              object.id
            );
          }

          if (
            object.type ===
            "anchor"
          ) {
            body = createAnchor(
              object.x,
              object.y,
              object.id
            );
          }

          if (body) {
            Composite.add(
              engine.world,
              body
            );
          }
        }
      );

      // Recreate constraints
      snapshot.constraints.forEach(
        (constraint) => {
          const bodies =
            Composite.allBodies(
              engine.world
            );

          const bodyA =
            bodies.find(
              (body) =>
                getNetworkId(
                  body
                ) ===
                constraint.bodyAId
            );

          const bodyB =
            bodies.find(
              (body) =>
                getNetworkId(
                  body
                ) ===
                constraint.bodyBId
            );

          if (
            !bodyA ||
            !bodyB
          ) {
            return;
          }

          if (
            constraint.type ===
            "spring"
          ) {
            connectSpringAction(
              engine.world,
              [bodyA, bodyB],
              () => {},
              false
            );
          }

          if (
            constraint.type ===
            "rod"
          ) {
            connectRodAction(
              engine.world,
              [bodyA, bodyB],
              () => {},
              false
            );
          }

          if (
            constraint.type ===
            "string"
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
  );
}