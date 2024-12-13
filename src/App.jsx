import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <Container>
        <Sidebar />
        <MainPage />
        <Player />
      </Container>
    </>
  );
}

export default App;
