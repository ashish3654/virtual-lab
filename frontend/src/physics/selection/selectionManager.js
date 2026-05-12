import Matter from "matter-js";

const { Mouse, Query } = Matter;

export const setupSelection = (
  render,
  engine,
  setSelectedBody
) => {
  const mouse = Mouse.create(render.canvas);

  render.canvas.addEventListener("mousedown", (event) => {
    const rect = render.canvas.getBoundingClientRect();

    const mousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    const bodies = Query.point(
      Matter.Composite.allBodies(engine.world),
      mousePosition
    );

    if (bodies.length > 0) {
      setSelectedBody(bodies[0]);
    }
  });
};