import {
  useEffect,
  useRef,
  useState,
} from "react";

import { registerForceSynchronization,} 
from "../../physics/synchronization/forceSynchronization";

import { registerDragReceiver}
from "../../physics/synchronization/dragReceiver";

import { registerDragSynchronization }
from "../../physics/synchronization/dragSynchronization";

import { registerSnapshotSynchronization }
from "../../physics/synchronization/snapshotSynchronization";

import { registerConstraintSynchronization }
from "../../physics/synchronization/constraintSynchronization";

import { registerSpawnSynchronization }
from "../../physics/synchronization/spawnSynchronization";

import { registerDeleteSynchronization }
from "../../physics/synchronization/deleteSynchronization";

import RoomControls from "../panel/RoomControls";

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

import { setupSpawnTool }
from "../../physics/tools/spawnTool";

import { initializeWorld }
from "../../physics/setup/initializeWorld";

import GraphPanel
from "../../graphs/GraphPanel";

import {
  recordGraphPoint,
} from "../../graphs/dataRecorder";

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

  const [showGraph, setShowGraph] =
    useState(false);

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
    const {
      mouseConstraint,
    } = initializeWorld(
      engine,
      render
    );

    registerDragSynchronization(
        mouseConstraint
    );

    // Run engine
    runEngine(
          render,
          runner,
          engine
        );

        const startTime =
      Date.now();

    Matter.Events.on(
      engine,
      "afterUpdate",
      () => {
        recordGraphPoint(
          (
            Date.now() -
            startTime
          ) / 1000
        );
      }
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

    setupSpawnTool(
      render,
      engine
    );

    registerSpawnSynchronization(
      engine
    );

    registerDeleteSynchronization(
      engine
    );

    registerConstraintSynchronization(
      engine
    );

    registerSnapshotSynchronization(
        engine,
        mouseConstraint
    );

    registerDragReceiver(
      engine
    );

    registerForceSynchronization(
      engine
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
      <Toolbar />

      <RoomControls />

      <PropertiesPanel

        showGraph={showGraph}
        setShowGraph={setShowGraph}
        
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

      {showGraph && (
        <GraphPanel
          setShowGraph={
            setShowGraph
          }
        />
      )}

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