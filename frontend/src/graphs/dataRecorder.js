import { getGraphBody } from "./graphManager";

const MAX_POINTS = 300;

const graphData = [];

let lastRecordTime = 0;

let startTime = 0;

let isRecording = false;

let previousVelocity = null;

export const recordGraphPoint = (
  elapsedTime
) => {
  const body = getGraphBody();

  if (!isRecording) {
    return;
  }

  if (!body) {
    return;
  }

  const time =
    (performance.now() -
      startTime) /
    1000;

  const vx = body.velocity.x;

  const vy = -body.velocity.y;

  const speed = Math.sqrt(
    vx * vx + vy * vy
  );

  const kineticEnergy =
    0.5 *
    body.mass *
    speed *
    speed;

  let forceX = 0;

  let forceY = 0;

  let forceMagnitude = 0;

  if (previousVelocity !== null) {
    const dt =
      time -
      previousVelocity.time;

    if (dt > 0) {
      const ax =
        (vx -
          previousVelocity.vx) /
        dt;

      const ay =
        (vy -
          previousVelocity.vy) /
        dt;

      forceX =
        body.mass * ax;

      forceY =
        body.mass * ay;

      forceMagnitude =
        Math.sqrt(
          forceX * forceX +
            forceY * forceY
        );
    }
  }

  previousVelocity = {
    vx,
    vy,
    time,
  };

  if (speed < 0.05) {
    return;
  }

  if (
    time - lastRecordTime <
    0.25
  ) {
    return;
  }

  lastRecordTime = time;

  graphData.push({
    time,

    vx,

    vy,

    speed,

    kineticEnergy,

    forceX,

    forceY,

    forceMagnitude,
  });

  if (
    graphData.length >
    MAX_POINTS
  ) {
    graphData.shift();
  }
};

export const getGraphData = () => {
  return graphData;
};

export const clearGraphData = () => {
  graphData.length = 0;
};

export const startRecording = () => {
  graphData.length = 0;

  startTime = performance.now();

  lastRecordTime = 0;

  previousVelocity = null;

  isRecording = true;
};

export const stopRecording = () => {
  isRecording = false;
};

export const getRecordingState = () => {
  return isRecording;
};