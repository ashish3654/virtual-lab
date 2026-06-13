# Virtual Lab

A collaborative real-time 2D physics sandbox built for interactive engineering and physics experimentation.

## Features
- Real-time collaborative workspace
- Physics simulation using Matter.js
- Drag-and-drop mechanical components
- Live synchronization with Socket.io
- Analytics dashboard for force and motion visualization

## Tech Stack
- React
- Node.js
- Express
- Socket.io
- Matter.js
- MongoDB

## Project Structure

```text
virtual-lab/
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── panel/
│   │   │   │   ├── ConstraintControls.jsx
│   │   │   │   ├── ObjectStats.jsx
│   │   │   │   ├── PhysicsControls.jsx
│   │   │   │   └── PropertiesPanel.jsx
│   │   │   │
│   │   │   ├── scene/
│   │   │   │   └── PhysicsScene.jsx
│   │   │   │
│   │   │   └── toolbar/
│   │   │       └── Toolbar.jsx
│   │   │
│   │   ├── graphs/
│   │   │   ├── ForceGraph.jsx
│   │   │   ├── GraphPanel.jsx
│   │   │   ├── KineticEnergyGraph.jsx
│   │   │   ├── VelocityGraph.jsx
│   │   │   ├── dataRecorder.js
│   │   │   └── graphManager.js
│   │   │
│   │   ├── physics/
│   │   │   ├── actions/
│   │   │   │   ├── bodyActions.js
│   │   │   │   ├── constraintActions.js
│   │   │   │   ├── deletionActions.js
│   │   │   │   ├── forceActions.js
│   │   │   │   └── spawnActions.js
│   │   │   │
│   │   │   ├── constraints/
│   │   │   │   ├── rod.js
│   │   │   │   ├── spring.js
│   │   │   │   └── string.js
│   │   │   │
│   │   │   ├── engine/
│   │   │   │   ├── engine.js
│   │   │   │   └── mouse.js
│   │   │   │
│   │   │   ├── objects/
│   │   │   │   ├── anchorFactory.js
│   │   │   │   ├── objectFactory.js
│   │   │   │   └── walls.js
│   │   │   │
│   │   │   ├── renderers/
│   │   │   │   └── velocityRenderer.js
│   │   │   │
│   │   │   ├── selection/
│   │   │   │   └── selectionManager.js
│   │   │   │
│   │   │   ├── setup/
│   │   │   │   └── initializeWorld.js
│   │   │   │
│   │   │   └── tools/
│   │   │       ├── spawnTool.js
│   │   │       └── toolManager.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── package.json
│   └── package-lock.json
│
├── Readme.md
└── .gitignore
```

## Implemented Features

- [x] Interactive 2D physics sandbox
- [x] Object spawning and manipulation
- [x] Spring constraints
- [x] Rod constraints
- [x] String/Rope constraints
- [x] Velocity visualization
- [x] Force graphs
- [x] Kinetic energy graphs
- [x] Physics control panel
- [x] Object property editor

## Upcoming Features

- [ ] Multi-user collaboration
- [ ] Socket.io synchronization
- [ ] Experiment save/load
- [ ] MongoDB integration
- [ ] Experiment library