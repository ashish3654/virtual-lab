# Virtual Physics Lab

A collaborative virtual physics laboratory built using **React**, **Matter.js**, **Socket.IO**, and **MongoDB Atlas**. Users can create physics experiments, collaborate in real time through rooms, and persist experiments using cloud storage.

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd virtual-physics-lab
```

---

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

---

### 3. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
```

Replace `your_mongodb_atlas_connection_string` with the MongoDB Atlas connection string.

---

## Running the Application

### Start the backend server

Inside the `backend` folder:

```bash
npm run dev
```

The backend will run on:

```
http://localhost:5000
```

---

### Start the frontend

Inside the `frontend` folder:

```bash
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

## Features

### Physics Simulation

* Real-time 2D physics simulation powered by Matter.js
* Create and manipulate different objects such as:

  * Boxes
  * Circles
  * Anchors
* Interactive object dragging and repositioning
* Object selection and deselection system
* Apply custom forces to objects through the properties panel
* Support for multiple constraints:

  * Springs
  * Rigid rods
  * Strings
* Constraint creation between selected objects
* Physics world boundaries and collision handling

### Collaboration Features

* Room-based collaborative experiments
* Create and join shared experiment rooms
* Real-time synchronization of:

  * Object creation
  * Object deletion
  * Object movement and dragging
  * Constraint creation
  * Force application
* Late-join synchronization allowing new participants to receive the current experiment state automatically
* Multi-user experiment interaction through Socket.IO

### Experiment Persistence

* Save experiments to MongoDB Atlas for persistent cloud storage
* Store experiment metadata including experiment names
* Load experiments from exported JSON files
* Experiment snapshots containing:

  * Objects and their properties
  * Constraint relationships
* Shared experiment state restoration across collaborative sessions

### Visualization and Analysis

* Real-time graph visualization of simulation data
* Dynamic plotting of physical quantities during experiments
* Interactive chart updates based on simulation state
* Support for experimental observation and analysis through graphical outputs

### User Interface

* Toolbar for selecting simulation tools
* Properties panel for modifying object parameters
* Room management controls
* Save and load experiment controls
* Status and notification messages for user actions
* Responsive and intuitive interface design

### Backend Features

* Socket.IO-based real-time communication
* Room-based event broadcasting
* Modular event handler architecture
* In-memory room state management for active sessions
* MongoDB Atlas integration using Mongoose
* Persistent experiment storage and retrieval support


## Tech Stack

### Frontend

* React
* Matter.js
* Socket.IO Client

### Backend

* Node.js
* Express.js
* Socket.IO
* Mongoose

### Database

* MongoDB Atlas

---

## Prerequisites

Ensure the following are installed:

* Node.js (v18 or later recommended)
* npm
* Internet connection (required for MongoDB Atlas)

---



## Using the Application

### Creating or Joining a Room

1. Enter a Room ID.
2. Click **Create Room** .
3. **Join Room** with same Room ID to work on same experiment.
3. Users with the same Room ID collaborate in the same experiment.

---

### Saving Experiments

1. Click **Save Experiment**.
2. Enter an experiment name.
3. The experiment state is stored in MongoDB Atlas.

---

### Loading Experiments

1. Click **Load Experiment**.
2. Select a previously exported JSON experiment file.
3. The experiment is reconstructed in the simulation.

---

## Project Structure

```
virtual-physics-lab/
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── socket/
│   ├── models/
│   ├── database/
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## Authors

Developed as part of an academic project on collaborative virtual laboratories.
