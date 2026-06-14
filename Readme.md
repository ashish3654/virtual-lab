# Virtual Physics Lab

A collaborative virtual physics laboratory built using **React**, **Matter.js**, **Node.js**, and **Socket.IO**. The application allows multiple users to create, manipulate, and analyze physics experiments together in real time.

## Features

### Physics Simulation

* Create boxes and circles.
* Create fixed anchors.
* Connect bodies using:

  * Springs
  * Rods
  * Strings
* Real-time physics simulation using Matter.js.
* Velocity vector visualization.
* Object property inspection and editing.
* Graph recording and visualization.

### Collaboration Features

* Create and join shared rooms.
* Multi-user experiment building.
* Real-time synchronization of:

  * Object creation
  * Object deletion
  * Constraint creation
* Real-time drag synchronization between users.
* Shared object identities using network IDs.
* Room-based event broadcasting.

### Late Join Support

Users joining an existing room automatically receive the current experiment state, including:

* Existing objects
* Existing constraints

This allows participants to join ongoing experiments without losing context.

## Technologies Used

### Frontend

* React
* Matter.js
* Socket.IO Client
* Vite

### Backend

* Node.js
* Express
* Socket.IO

## Project Structure

### Frontend

```
frontend/
├── components/
├── physics/
│   ├── actions/
│   ├── constraints/
│   ├── engine/
│   ├── objects/
│   ├── selection/
│   ├── setup/
│   ├── synchronization/
│   └── tools/
├── services/
└── graphs/
```

### Backend

```
backend/
├── socket/
│   ├── roomHandlers.js
│   ├── spawnHandlers.js
│   ├── deleteHandlers.js
│   ├── constraintHandlers.js
│   ├── dragHandlers.js
│   └── roomState.js
├── server.js
└── package.json
```

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

The backend runs on:

```
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

## Usage

1. Start both frontend and backend servers.
2. Create or join a room.
3. Add objects using the toolbar.
4. Connect objects using springs, rods, or strings.
5. Drag objects to collaboratively manipulate the experiment.
6. Share the room ID with other users.

## Synchronization Architecture

The application follows a **frontend-driven simulation architecture**:

* Matter.js simulations run independently on each client.
* Socket.IO is used to synchronize user actions.
* The backend maintains room state for:

  * Objects
  * Constraints
* Late joiners reconstruct experiments using backend snapshots.

## Future Improvements

* Save and load experiments.
* Constraint deletion synchronization.
* Ownership-based synchronization.
* Export experiment configurations.
* Persistent storage for room states.

```
```
