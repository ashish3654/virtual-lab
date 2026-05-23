import Matter from "matter-js";

const { Body } = Matter;

export const applyForceAction = (
  body,
  fx,
  fy
) => {
  Body.applyForce(
    body,
    body.position,
    {
      x: Number(fx),
      y: -Number(fy),
    }
  );
};