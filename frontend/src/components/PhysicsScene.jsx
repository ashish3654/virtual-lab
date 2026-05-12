import { useEffect, useRef } from "react";
import Matter from "matter-js";

import Toolbar from "./Toolbar";

import {
  createPhysicsEngine,
  runEngine,
  cleanupEngine,
} from "../physics/engine";

import { createWalls } from "../physics/walls";

import {
  createBox,
  createCircle,
} from "../physics/objectFactory";

import { setupMouse } from "../physics/mouse";

const { Composite } = Matter;

const PhysicsScene = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    const { engine, render, runner } =
      createPhysicsEngine(sceneRef.current);

    engineRef.current = engine;

    // Walls
    const walls = createWalls();

    // Initial Objects
    const box1 = createBox(400, 200);
    const box2 = createBox(500, 50);
    const circle = createCircle(700, 100);

    // Mouse
    const mouseConstraint = setupMouse(engine, render);

    // Add everything
    Composite.add(engine.world, [
      ...walls,
      box1,
      box2,
      circle,
      mouseConstraint,
    ]);

    // Run engine
    runEngine(render, runner, engine);

    // Cleanup
    return () => {
      cleanupEngine(render, runner, engine);
    };
  }, []);

  const addBox = () => {
    const box = createBox(
      Math.random() * 800 + 100,
      50
    );

    Composite.add(engineRef.current.world, box);
  };

  const addCircle = () => {
    const circle = createCircle(
      Math.random() * 800 + 100,
      50
    );

    Composite.add(engineRef.current.world, circle);
  };

  return (
    <>
      <Toolbar
        addBox={addBox}
        addCircle={addCircle}
      />

      <div ref={sceneRef} />
    </>
  );
};

export default PhysicsScene;