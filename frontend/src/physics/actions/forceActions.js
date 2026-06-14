import Matter from "matter-js";

import {
  emitApplyForce,
} from "../../services/forceSocket";

import {
  getNetworkId,
} from "../utils/networkId";

const { Body } = Matter;

export const applyForceAction = (
  body,
  fx,
  fy,
  emitForce = true
) => {
  if (!body) {
    return;
  }

  Body.applyForce(
    body,
    body.position,
    {
      x: Number(fx),
      y: -Number(fy),
    }
  );

  if (emitForce) {
    emitApplyForce({
      id: getNetworkId(
        body
      ),

      fx: Number(fx),

      fy: Number(fy),
    });
  }
};