import Matter from "matter-js";
import {
  assignNetworkId,
  setNetworkId,
} from "../utils/networkId";

const { Bodies } = Matter;

export const createBox = (
  x,
  y,
  networkId = null
) => {
  const body = Bodies.rectangle(x, y, 80, 80, {
    restitution: 0.8,
    showVelocity: false,
    render: {
      fillStyle: "#3B82F6",
    },
  });

  if (networkId) {
      setNetworkId(body, networkId);
    } else {
      assignNetworkId(body);
    }

  return body;
};

export const createCircle = (
  x,
  y,
  networkId = null
) => {
  const body = Bodies.circle(x, y, 40, {
    restitution: 0.9,
    showVelocity: false,
    render: {
      fillStyle: "#F59E0B",
    },
  });

  if (networkId) {
      setNetworkId(body, networkId);
    } else {
      assignNetworkId(body);
    }

  return body;
};