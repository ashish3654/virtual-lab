import Matter from "matter-js";

import {
  createBox,
  createCircle,
} from "../objects/objectFactory";

import { createAnchor }
from "../objects/anchorFactory";

import { getActiveTool }
from "./toolManager";

const { Composite } = Matter;

export const setupSpawnTool = (
  render,
  engine
) => {
  render.canvas.addEventListener(
    "mousedown",
    (event) => {
      const tool =
        getActiveTool();

      if (
        tool !== "box" &&
        tool !== "circle" &&
        tool !== "anchor"
      ) {
        return;
      }

      const rect =
        render.canvas.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      let body;

      if (tool === "box") {
        body = createBox(x, y);
      }

      if (tool === "circle") {
        body = createCircle(x, y);
      }

      if (tool === "anchor") {
        body = createAnchor(x, y);
      }

      Composite.add(
        engine.world,
        body
      );
    }
  );
};