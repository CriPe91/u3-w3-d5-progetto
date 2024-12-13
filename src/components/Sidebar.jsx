import { Navbar, Nav, Button, Container, NavLink, InputGroup, FormControl } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <aside className="col col-2">
      <Navbar expand="md" className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <NavLink className="navbar-brand" href="index.html">
            <img src="./src/assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
          </NavLink>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul className="list-unstyled">
                <li>
                  <NavLink className="nav-item nav-link d-flex align-items-center" href="#">
                    <HouseDoorFill className="me-2" /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-item nav-link d-flex align-items-center" href="#">
                    <BookFill className="me-2" /> Your Library
                  </NavLink>
                </li>
                <li>
                  <InputGroup className="mt-3">
                    <FormControl type="text" placeholder="Search" aria-label="Search" />
                    <Button variant="outline-secondary" className="btn-sm">
                      GO
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="btn signup-btn mb-2" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn mb-2" type="button">
            Login
          </Button>
          <div>
            <NavLink href="#">Cookie Policy | Privacy</NavLink>
          </div>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
