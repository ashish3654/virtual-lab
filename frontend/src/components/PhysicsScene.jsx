import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { renderVelocityVectors } from "../physics/renderers/velocityRenderer";

import Toolbar from "./Toolbar";
import PropertiesPanel from "./PropertiesPanel";
import { setupSelection } from "../physics/selection/selectionManager";
import { createSpring }
from "../physics/constraints/spring";

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



const { Composite, Events } = Matter;

const PhysicsScene = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  const [selectedBodies, setSelectedBodies] =
  useState([]);
  const [tick, setTick] = useState(0);   

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

    const interval = setInterval(() => {
    setTick((prev) => prev + 1);
    }, 50);

    setupSelection(
    render,
    engine,
    setSelectedBodies
    );

    Events.on(render, "afterRender", () => {
     renderVelocityVectors(
    render,
    Composite.allBodies(engine.world)
  );
});

    // Cleanup
    return () => {
      clearInterval(interval);
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

  const deleteSelectedBody = () => {
      if (selectedBodies.length === 0) return;

      const bodyToDelete = selectedBodies[0];

      // Get all constraints
      const constraints =
        Composite.allConstraints(
          engineRef.current.world
        );

      // Remove connected constraints
      constraints.forEach((constraint) => {
        if (
          constraint.bodyA === bodyToDelete ||
          constraint.bodyB === bodyToDelete
        ) {
          Composite.remove(
            engineRef.current.world,
            constraint
          );
        }
      });

      // Remove body
      Composite.remove(
        engineRef.current.world,
        bodyToDelete
      );

      // Clear selection
      setSelectedBodies([]);
    };


  const connectSpring = () => {
  if (selectedBodies.length !== 2) return;

  const spring = createSpring(
    selectedBodies[0],
    selectedBodies[1]
  );

  Composite.add(
    engineRef.current.world,
    spring
  );

  setSelectedBodies([]);
};

  const addCircle = () => {
    const circle = createCircle(
      Math.random() * 800 + 100,
      50
    );

    Composite.add(engineRef.current.world, circle);
  };

    return (
    <div
        style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        }}
    >
        <Toolbar
        addBox={addBox}
        addCircle={addCircle}
        />

       <PropertiesPanel
        selectedBodies={selectedBodies}
        deleteBody={deleteSelectedBody}
        connectSpring={connectSpring}
      />

        <div
        ref={sceneRef}
        style={{
            width: "100%",
            height: "100%",
        }}
        />
    </div>
    );
};

export default PhysicsScene;