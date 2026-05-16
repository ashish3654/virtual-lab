import {
  useEffect,
  useRef,
  useState,
} from "react";

import Matter from "matter-js";

import Toolbar from "../toolbar/Toolbar";

import PropertiesPanel
from "../panel/PropertiesPanel";

import { renderVelocityVectors }
from "../../physics/renderers/velocityRenderer";

import { setupSelection }
from "../../physics/selection/selectionManager";

import {
  createPhysicsEngine,
  runEngine,
  cleanupEngine,
} from "../../physics/engine/engine";

import {
  connectSpringAction,
  connectRodAction,
  connectStringAction,
} from "../../physics/actions/constraintActions";

import { deleteBodyAction }
from "../../physics/actions/deletionActions";

import {
  addBoxAction,
  addCircleAction,
} from "../../physics/actions/spawnActions";

import { initializeWorld }
from "../../physics/setup/initializeWorld";

const { Composite, Events } = Matter;

const PhysicsScene = () => {
  const sceneRef = useRef(null);

  const engineRef = useRef(null);

  const [
    selectedBodies,
    setSelectedBodies,
  ] = useState([]);

  // Force React refresh
  const [tick, setTick] =
    useState(0);

  useEffect(() => {
    const {
      engine,
      render,
      runner,
    } = createPhysicsEngine(
      sceneRef.current
    );

    engineRef.current = engine;

    // Initialize world
    initializeWorld(
      engine,
      render
    );

    // Run engine
    runEngine(
      render,
      runner,
      engine
    );

    // Force React updates
    const interval = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 50);

    // Selection system
    setupSelection(
      render,
      engine,
      setSelectedBodies
    );

    // Rendering systems
    Events.on(
      render,
      "afterRender",
      () => {
        renderVelocityVectors(
          render,
          Composite.allBodies(
            engine.world
          )
        );
      }
    );

    // Cleanup
    return () => {
      clearInterval(interval);

      cleanupEngine(
        render,
        runner,
        engine
      );
    };
  }, []);

  // SPAWN ACTIONS

  const addBox = () => {
    addBoxAction(
      engineRef.current.world
    );
  };

  const addCircle = () => {
    addCircleAction(
      engineRef.current.world
    );
  };

  // DELETE ACTION

  const deleteBody = () => {
    deleteBodyAction(
      engineRef.current.world,
      selectedBodies,
      setSelectedBodies
    );
  };

  // CONSTRAINT ACTIONS

  const connectSpring = () => {
    connectSpringAction(
      engineRef.current.world,
      selectedBodies,
      setSelectedBodies
    );
  };

  const connectRod = () => {
    connectRodAction(
      engineRef.current.world,
      selectedBodies,
      setSelectedBodies
    );
  };

  const connectString = () => {
    connectStringAction(
      engineRef.current.world,
      selectedBodies,
      setSelectedBodies
    );
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
        selectedBodies={
          selectedBodies
        }
        deleteBody={deleteBody}
        connectSpring={
          connectSpring
        }
        connectRod={connectRod}
        connectString={
          connectString
        }
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