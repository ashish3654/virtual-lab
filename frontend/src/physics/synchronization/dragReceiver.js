import Matter from "matter-js";

import {
  registerDragHandler,
} from "../../services/dragSocket";

import {
  getNetworkId,
} from "../utils/networkId";

const {
  Composite,
  Body,
} = Matter;

export function registerDragReceiver(
  engine
) {
  registerDragHandler(
    (data) => {
      const body =
        Composite
          .allBodies(
            engine.world
          )
          .find(
            (body) =>
              getNetworkId(
                body
              ) === data.id
          );

      if (!body) {
        return;
      }

      Body.setPosition(
        body,
        {
          x: data.x,
          y: data.y,
        }
      );

      Body.setVelocity(
        body,
        {
          x: data.vx,
          y: data.vy,
        }
      );

      Body.setAngle(
        body,
        data.angle
      );

      Body.setAngularVelocity(
        body,
        data.angularVelocity
      );
    }
  );
}