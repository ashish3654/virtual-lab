import Matter from "matter-js";

import { socket } from "../../services/socket";

import {
  createBox,
  createCircle,
} from "../objects/objectFactory";

import { createAnchor }
from "../objects/anchorFactory";

const { Composite } = Matter;

export function registerSpawnSynchronization(engine) {
  socket.on(
    "object-spawned",
    (data) => {
      console.log(
        "Received spawn:",
        data
      );

      let body;

      if (data.type === "box") {
        body = createBox(
          data.x,
          data.y
        );
      }

      if (
        data.type === "circle"
      ) {
        body = createCircle(
          data.x,
          data.y
        );
      }

      if (
        data.type === "anchor"
      ) {
        body = createAnchor(
          data.x,
          data.y
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
}