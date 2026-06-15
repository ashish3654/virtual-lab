import Matter from "matter-js";

const {
  Engine,
  Render,
  Runner,
} = Matter;

export const createPhysicsEngine = (
  sceneElement
) => {

  const engine =
    Engine.create();

  const render =
    Render.create({
      element:
        sceneElement,

      engine,

      options: {
        width:
          window.innerWidth,

        height:
          window.innerHeight -40,

        wireframes:
          false,

        background:
          "#111827",
      },
    });

  const runner =
    Runner.create();

  const handleResize =
    () => {

      render.canvas.width =
        window.innerWidth;

      render.canvas.height =
        window.innerHeight;

      render.options.width =
        window.innerWidth;

      render.options.height =
        window.innerHeight;
    };

  window.addEventListener(
    "resize",
    handleResize
  );

  return {
    engine,
    render,
    runner,
    handleResize,
  };
};

export const runEngine = (render, runner, engine) => {
  Render.run(render);
  Runner.run(runner, engine);
};

export const cleanupEngine = (render, runner, engine) => {
  Render.stop(render);
  Runner.stop(runner);

  Matter.Composite.clear(engine.world);
  Matter.Engine.clear(engine);

  render.canvas.remove();
  render.textures = {};
};