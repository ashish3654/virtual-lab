export const renderVelocityVectors = (render, bodies) => {
  const context = render.context;

  const scale = 10;

  bodies.forEach((body) => {
    if (body.isStatic) return;

    const startX = body.position.x;
    const startY = body.position.y;

    const vx = body.velocity.x * scale;
    const vy = body.velocity.y * scale;

    // -----------------------------
    // X COMPONENT (RED)
    // -----------------------------
    drawArrow(
      context,
      startX,
      startY,
      startX + vx,
      startY,
      "#EF4444"
    );

    // -----------------------------
    // Y COMPONENT (BLUE)
    // -----------------------------
    drawArrow(
      context,
      startX,
      startY,
      startX,
      startY + vy,
      "#3B82F6"
    );

    // -----------------------------
    // RESULTANT VECTOR (GREEN)
    // -----------------------------
    drawArrow(
      context,
      startX,
      startY,
      startX + vx,
      startY + vy,
      "#22C55E"
    );
  });
};

const drawArrow = (
  context,
  fromX,
  fromY,
  toX,
  toY,
  color
) => {
  const headLength = 10;

  const angle = Math.atan2(
    toY - fromY,
    toX - fromX
  );

  context.strokeStyle = color;
  context.lineWidth = 2;

  // Main line
  context.beginPath();
  context.moveTo(fromX, fromY);
  context.lineTo(toX, toY);
  context.stroke();

  // Arrowhead left
  context.beginPath();
  context.moveTo(toX, toY);

  context.lineTo(
    toX - headLength * Math.cos(angle - Math.PI / 6),
    toY - headLength * Math.sin(angle - Math.PI / 6)
  );

  context.stroke();

  // Arrowhead right
  context.beginPath();
  context.moveTo(toX, toY);

  context.lineTo(
    toX - headLength * Math.cos(angle + Math.PI / 6),
    toY - headLength * Math.sin(angle + Math.PI / 6)
  );

  context.stroke();
};