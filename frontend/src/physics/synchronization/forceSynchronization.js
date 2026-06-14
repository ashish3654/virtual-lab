import Matter from "matter-js";

import {
  registerForceHandler,
} from "../../services/forceSocket";

import {
  getNetworkId,
} from "../utils/networkId";

import {
  applyForceAction,
} from "../actions/forceActions";

const { Composite } = Matter;

export function registerForceSynchronization(
  engine
) {
  registerForceHandler(
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

      applyForceAction(
        body,
        data.fx,
        data.fy,
        false
      );
    }
  );
}