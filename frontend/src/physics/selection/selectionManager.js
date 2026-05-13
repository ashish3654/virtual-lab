import Matter from "matter-js";

const { Mouse, Query, Composite } = Matter;

export const setupSelection = (
  render,
  engine,
  setSelectedBodies
) => {
  const mouse = Mouse.create(render.canvas);

  render.canvas.addEventListener(
    "mousedown",
    (event) => {
      const rect =
        render.canvas.getBoundingClientRect();

      const mousePosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      const bodies = Query.point(
        Composite.allBodies(engine.world),
        mousePosition
      );

      if (bodies.length > 0) {
        const clickedBody = bodies[0];

        setSelectedBodies((prev) => {
          // Already selected → deselect
          if (prev.includes(clickedBody)) {
            return prev.filter(
              (body) => body !== clickedBody
            );
          }

          // Maximum 2 selections
          if (prev.length >= 2) {
            return [clickedBody];
          }

          // Add new selection
          return [...prev, clickedBody];
        });
      }
    }
  );
};