import Matter from "matter-js";

import { socket }
from "../../services/socket";

import { getNetworkId }
from "../utils/networkId";

import { deleteBodyAction }
from "../actions/deletionActions";

const { Composite } = Matter;

export function registerDeleteSynchronization(
  engine
) {
  socket.on(
    "object-deleted",
    (data) => {
      console.log(
        "Received delete:",
        data
      );

      const bodies =
        Composite.allBodies(
          engine.world
        );

      const body =
        bodies.find(
          (body) =>
            getNetworkId(
              body
            ) === data.id
        );

      if (!body) {
        return;
      }

      deleteBodyAction(
        engine.world,
        [body],
        () => {},
        false
      );
    }
  );
}