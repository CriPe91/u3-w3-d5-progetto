import { Navbar, Nav, Button } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <Navbar expand="md" className="flex-column fixed-left" id="sidebar" bg="dark" variant="dark">
      <Navbar.Brand href="#">
        <img src="./src/assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link href="#">
              <HouseDoorFill className="me-2" />
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">
              <BookFill className="me-2" />
              Your Library
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button className="signup-btn w-100" variant="outline-light">
              Sign Up
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button className="login-btn w-100" variant="outline-light">
              Log In
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
