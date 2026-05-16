import Matter from "matter-js";

export const updateRestitution = (
  body,
  value
) => {
  body.restitution = Number(value);
};

export const updateFriction = (
  body,
  value
) => {
  body.friction = Number(value);
};

export const updateDensity = (
  body,
  value
) => {
  Matter.Body.setDensity(
    body,
    Number(value)
  );
};

export const toggleFixed = (body) => {
  Matter.Body.setStatic(
    body,
    !body.isStatic
  );
};

export const toggleVelocityVisibility = (
  body
) => {
  body.showVelocity =
    !body.showVelocity;
};