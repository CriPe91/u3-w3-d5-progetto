import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <Container>
        <Sidebar />
        <MainSection />
        <Player />
      </Container>
    </>
  );
}

export default App;
