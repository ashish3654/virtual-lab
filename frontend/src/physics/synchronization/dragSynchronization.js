import Matter from "matter-js";

import {
  emitDragUpdate,
} from "../../services/dragSocket";

import {
  getNetworkId,
} from "../utils/networkId";

const { Events } = Matter;

export function registerDragSynchronization(
  mouseConstraint
) {
  let dragInterval = null;

  let draggedBody = null;

Events.on(
  mouseConstraint,
  "startdrag",
  (event) => {

    draggedBody =
      event.body;

    dragInterval =
      setInterval(() => {
        const body =
          draggedBody;

          if (!body) {
            return;
          }

          emitDragUpdate({
            id: getNetworkId(
              body
            ),

            x: body.position.x,

            y: body.position.y,

            vx: body.velocity.x,

            vy: body.velocity.y,

            angle: body.angle,

            angularVelocity:
              body.angularVelocity,
          });
        }, 50); // 13 updates/sec
    }
  );

Events.on(
  mouseConstraint,
  "enddrag",
  () => {

    draggedBody =
      null;

    if (
      dragInterval
    ) {
      clearInterval(
        dragInterval
      );

      dragInterval =
        null;
    }
  }
);
}