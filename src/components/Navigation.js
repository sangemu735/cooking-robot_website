import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userAction";
// Part 3: 45:00

export default function Navigation() {
    const cartstate = useSelector((state) => state.cartReducer);
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

    return (
        <div>
            <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Cooking Robot</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            {currentUser ? (
                                <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                                    <NavDropdown.Item
                                        href="#"
                                        onClick={() => {
                                            dispatch(logoutUser());
                                        }}
                                    >
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link href="/login" className="fw-bold">
                                    Login
                                </Nav.Link>
                            )}
                            <Nav.Link href="/cart" className="fw-bold">
                                Cart {cartstate.cartItems.length}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
