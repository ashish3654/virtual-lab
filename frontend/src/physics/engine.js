import Matter from "matter-js";

const { Engine, Render, Runner } = Matter;

export const createPhysicsEngine = (sceneElement) => {
  const engine = Engine.create();

  const render = Render.create({
    element: sceneElement,
    engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false,
      background: "#111827",
    },
  });

  const runner = Runner.create();

  return {
    engine,
    render,
    runner,
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