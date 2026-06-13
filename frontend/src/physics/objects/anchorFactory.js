import Matter from "matter-js";
import {
  assignNetworkId,
  setNetworkId,
} from "../utils/networkId";

const { Bodies } = Matter;

export const createAnchor = (
  x,
  y,
  networkId = null
)  => {
  const body =  Bodies.circle(x, y, 10, {
    isStatic: true,

    showVelocity: false,

    render: {
      fillStyle: "#EF4444",
    },
  });

  if (networkId) {
    setNetworkId(body, networkId);
  } else {
    assignNetworkId(body);
  }

  return body;
};