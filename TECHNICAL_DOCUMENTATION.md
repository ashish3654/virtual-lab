# Technical Documentation – Virtual Physics Lab

## 1. Overview

Virtual Physics Lab is a web-based collaborative platform that allows multiple users to create, manipulate, save, and load physics experiments in real time. The system integrates a Matter.js physics engine with Socket.IO-based synchronization and MongoDB-backed persistence.

The application supports:

* Real-time collaboration through shared rooms.
* Creation and manipulation of physics objects.
* Constraint-based interactions between objects.
* Experiment persistence using MongoDB Atlas.
* User authentication and experiment ownership.
* Experiment galleries filtered by authenticated users.

---

# 2. System Architecture

The system follows a client-server architecture.

```
Frontend (React + Matter.js)
            │
            │ Socket.IO
            │ HTTP (Authentication)
            │
Backend (Node.js + Express + Socket.IO)
            │
            │ Mongoose
            │
MongoDB Atlas
```

---

# 3. Technology Stack

## Frontend

* React
* Matter.js
* Socket.IO Client
* Axios
* Vite

## Backend

* Node.js
* Express.js
* Socket.IO
* Mongoose
* bcryptjs
* jsonwebtoken

## Database

* MongoDB Atlas

---

# 4. Frontend Architecture

```
src/
│
├── components/
│   ├── scene/
│   │   └── PhysicsScene.jsx
│   │
│   ├── controls/
│   │   └── RoomControls.jsx
│   │
│   ├── objects/
│   │   ├── objectFactory.js
│   │   ├── anchorFactory.js
│   │   └── walls.js
│   │
│   ├── actions/
│   │   └── constraintActions.js
│   │
│   ├── synchronization/
│   │   ├── spawnSynchronization.js
│   │   └── snapshotSynchronization.js
│   │
│   └── engine/
│       ├── engine.js
│       └── mouse.js
│
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   └── RoomSelection.jsx
│
├── services/
│   ├── socket.js
│   ├── saveSocket.js
│   ├── loadSocket.js
│   └── authService.js
│
└── App.jsx
```

---

# 5. Backend Architecture

```
backend/
│
├── database/
│   └── connectDB.js
│
├── models/
│   ├── User.js
│   └── Experiment.js
│
├── routes/
│   └── authRoutes.js
│
├── socket/
│   ├── databaseHandlers.js
│   ├── roomHandlers.js
│   ├── saveHandlers.js
│   ├── synchronizationHandlers.js
│   └── index.js
│
└── server.js
```

---

# 6. Authentication Workflow

## Registration

```
User
 ↓
POST /api/auth/register
 ↓
Password Hashing (bcrypt)
 ↓
User Document Stored
 ↓
Success Response
```

---

## Login

```
User
 ↓
POST /api/auth/login
 ↓
Password Verification
 ↓
JWT Generation
 ↓
Token Returned
 ↓
Stored in localStorage
```

---

# 7. Room Management Workflow

```
Login Successful
 ↓
Room Selection Screen
 ↓
Create Room OR Join Room
 ↓
Room ID Stored in localStorage
 ↓
Physics Lab Accessible
```

---

# 8. Real-Time Collaboration

Synchronization is implemented using Socket.IO.

## Supported Collaborative Actions

### Object Spawning

```
User A Creates Object
 ↓
Socket Event Emitted
 ↓
Server Broadcast
 ↓
Other Clients Recreate Object
```

---

### Constraint Creation

```
User A Connects Bodies
 ↓
Socket Event Emitted
 ↓
Server Broadcast
 ↓
Constraint Recreated
```

---

### Experiment Loading

```
Experiment Loaded
 ↓
Snapshot Generated
 ↓
room-snapshot Event
 ↓
Clients Reconstruct Scene
```

---

# 9. Physics Engine

Matter.js is used for simulation.

## Supported Objects

### Box

* Dynamic rigid body.

### Circle

* Dynamic circular body.

### Anchor

* Static reference point.

---

## Supported Constraints

### Spring

Simulates elastic behaviour.

### Rod

Maintains fixed separation distance.

### String

Maintains maximum separation distance.

---

# 10. Experiment Persistence

Experiments are stored in MongoDB Atlas.

---

## Experiment Schema

```javascript
{
    name: String,
    description: String,

    owner: ObjectId,

    objects: Array,

    constraints: Array
}
```

---

## Save Workflow

```
User Clicks Save
 ↓
Frontend Requests Snapshot
 ↓
Matter.js Scene Serialized
 ↓
JWT Attached
 ↓
save-to-database Event
 ↓
Token Verified
 ↓
owner Extracted
 ↓
Experiment Stored
```

---

## Load Workflow

```
User Opens Gallery
 ↓
Experiments Retrieved
 ↓
User Selects Experiment
 ↓
JWT + Experiment ID Sent
 ↓
Ownership Verified
 ↓
room-snapshot Emitted
 ↓
Experiment Reconstructed
```

---

# 11. Experiment Ownership

Ownership is enforced using JWT authentication.

Only authenticated users can:

* Save experiments.
* View their experiments.
* Load their experiments.

Security validation occurs on the backend.

Example:

```javascript
Experiment.find({
    owner: decoded.userId
});
```

---

# 12. Database Models

## User

```javascript
{
    username: String,
    email: String,
    password: String
}
```

---

## Experiment

```javascript
{
    name: String,
    description: String,

    owner: ObjectId,

    objects: Array,

    constraints: Array
}
```

---

# 13. Environment Variables

Backend `.env`

```env
PORT=5000

MONGO_URI=<MongoDB Atlas Connection String>

JWT_SECRET=<Secret Key>
```

---

# 14. Running the Application

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 15. Future Enhancements

* Dedicated Gallery Page.
* Protected Routes using React Router.
* Experiment Deletion.
* Experiment Sharing Between Users.
* Public Experiment Templates.
* Role-Based Collaboration Permissions.
* Graph Data Export.
* Undo/Redo Functionality.
* Mobile Responsiveness.
* Advanced Physics Components.

---

# 16. Conclusion

The Virtual Physics Lab demonstrates the integration of real-time collaboration, interactive physics simulation, authentication, and persistent storage within a modern full-stack web application.

The project provides a foundation for scalable educational simulation platforms capable of supporting collaborative scientific experimentation in a browser environment.
