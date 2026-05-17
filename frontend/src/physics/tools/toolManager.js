let activeTool = "select";

export const setActiveTool = (
  toolName
) => {
  activeTool = toolName;
};

export const getActiveTool = () => {
  return activeTool;
};