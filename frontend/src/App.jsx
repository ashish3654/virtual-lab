import { useEffect } from "react";
import { socket } from "./services/socket";
import PhysicsScene from "./components/scene/PhysicsScene";

function App() {
  
  useEffect(() => {
        socket.connect();

        return () => {
            socket.disconnect();
        };
    }, []);


  return <PhysicsScene />;
}

export default App;