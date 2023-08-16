import React from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { signout } from "../../redux/actions/auth.actions";
/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch= useDispatch();
  const logout =()=>{
    dispatch(signout());
  }
  const renderLoggedinLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick={logout}>Signout</span>
        </li>
      </Nav>
    );
  };
  const renderNonLoggedinLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">
            Signin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            Signup
          </NavLink>
        </li>
      </Nav>
    );
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{ zIndex: 1 }}
    >
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Admin Dashboard
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {auth.authenticate ? renderLoggedinLinks() : renderNonLoggedinLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
