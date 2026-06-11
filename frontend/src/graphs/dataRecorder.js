import { getGraphBody } from "./graphManager";

const MAX_POINTS = 300;

const graphData = [];

let lastRecordTime = 0;

let startTime = 0;

let isRecording = false;

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

  const vx = body.velocity.x;

  const vy = -body.velocity.y;

  const speed = Math.sqrt(
    vx * vx + vy * vy
  );

  if (speed < 0.05) {
    return;
  }

  const time =
    (performance.now() -
      startTime) /
    1000;

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
  });

  if (
    graphData.length > MAX_POINTS
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

  isRecording = true;
};

export const stopRecording = () => {
  isRecording = false;
};

export const getRecordingState = () => {
  return isRecording;
};