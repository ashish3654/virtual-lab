# Virtual Physics Lab

A collaborative web-based platform for creating, simulating, and sharing interactive physics experiments in real time.

---

# Getting Started

## Prerequisites

Make sure the following are installed:

* Node.js (v18 or later recommended)
* npm
* MongoDB Atlas account

---

# Installation and Setup

## 1. Clone the Repository

```bash
git clone <repository-url>

cd virtual-physics-lab
```

---

## 2. Backend Setup

Open a terminal and navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

The backend should start successfully and connect to MongoDB Atlas.

---

## 3. Frontend Setup

Open a second terminal.

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

# Application Workflow

1. Register a new account.
2. Login using your credentials.
3. Create a room or join an existing room.
4. Build and interact with physics experiments collaboratively.
5. Save experiments to the cloud.
6. Open the experiment gallery to load previously saved experiments.

---

# Features

## Interactive Physics Simulation

* Real-time physics simulation.
* Collision detection and response.
* Drag-and-drop object interaction.
* Adjustable simulation environment.

---

## Physics Objects

Supported object types include:

* Boxes
* Circles
* Anchors

Objects can be freely placed and manipulated within the laboratory.

---

## Constraint-Based Experiment Design

Create complex experiments using:

### Springs

* Simulate elastic systems.
* Useful for oscillation experiments.

### Rods

* Maintain fixed distances between bodies.
* Suitable for pendulums and linkages.

### Strings

* Restrict maximum separation distance.
* Useful for rope-like systems.

### Anchors

* Provide static attachment points.

---

## Object Property Configuration

Users can configure physical properties such as:

* Mass
* Density
* Friction
* Restitution (bounciness)
* Static/Dynamic state

This enables realistic modelling of different materials.

---

## Force Application

Users can apply forces to objects to observe resulting motion.

Supported interactions include:

* Directional force application.
* Instantaneous impulses.
* Experimentation with Newtonian mechanics.

---

## Velocity Visualization

The platform supports visualization of:

* Velocity vectors.
* Direction of motion.
* Relative magnitude of object velocities.

---

## Graph Visualization

Generate and observe graphical representations of simulation data.

Examples include:

* Position vs Time
* Velocity vs Time
* Acceleration vs Time

These visualizations help users connect theoretical concepts with experimental observations.

---

## Real-Time Collaboration

* Create shared rooms.
* Join existing rooms.
* Collaborate simultaneously with multiple users.
* Synchronize changes instantly across participants.

---

## User Authentication

* User registration.
* Secure login.
* Persistent sessions.
* Password encryption.

---

## Experiment Persistence

* Save experiments to the cloud.
* Reload experiments at a later time.
* Continue work from previous sessions.

---

## Personal Experiment Gallery

* View previously saved experiments.
* Load experiments directly into the laboratory.
* Gallery is filtered to show only experiments belonging to the logged-in user.

---

## Room-Based Access Control

Users are required to either:

* Create a room, or
* Join an existing room,

before accessing the laboratory environment.

This ensures collaboration features function correctly.

---

# Technology Stack

## Frontend

* React
* Vite
* Matter.js
* Socket.IO Client
* Axios

---

## Backend

* Node.js
* Express.js
* Socket.IO
* Mongoose

---

## Database

* MongoDB Atlas

---

## Authentication

* JSON Web Tokens (JWT)
* bcryptjs

---

# Project Structure

```text
virtual-physics-lab/

├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   └── server.js
│
├── README.md
│
└── TECHNICAL_DOCUMENTATION.md
```

---

# Future Enhancements

Potential improvements include:

* Dedicated gallery page.
* Public experiment sharing.
* Experiment deletion.
* Undo/redo functionality.
* Protected routing using React Router.
* Mobile responsiveness.
* Additional physics components and experiment templates.
* Export of graphs and experiment reports.

---

# Technical Documentation

Detailed implementation information is available in:

```text
TECHNICAL_DOCUMENTATION.md
```

---

# License

This project was developed for educational purposes.

---

# Authors

Virtual Physics Lab Development Team
