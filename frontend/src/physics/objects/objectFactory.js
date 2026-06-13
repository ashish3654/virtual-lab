import Matter from "matter-js";
import { assignNetworkId } from "../utils/networkId";

const { Bodies } = Matter;

export const createBox = (x, y) => {
  const body = Bodies.rectangle(x, y, 80, 80, {
    restitution: 0.8,
    showVelocity: false,
    render: {
      fillStyle: "#3B82F6",
    },
  });

  assignNetworkId(body);

  return body;
};

export const createCircle = (x, y) => {
  const body = Bodies.circle(x, y, 40, {
    restitution: 0.9,
    showVelocity: false,
    render: {
      fillStyle: "#F59E0B",
    },
  });

  assignNetworkId(body);

  return body;
};