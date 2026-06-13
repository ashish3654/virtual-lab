import Matter from "matter-js";
import { assignNetworkId } from "../utils/networkId";

const { Bodies } = Matter;

export const createAnchor = (
  x,
  y
) => {
  const body =  Bodies.circle(x, y, 10, {
    isStatic: true,

    showVelocity: false,

    render: {
      fillStyle: "#EF4444",
    },
  });

  assignNetworkId(body);

  return body;
};