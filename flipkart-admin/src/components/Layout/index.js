import React from "react";
import { Header } from "../Header";
import { Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/category" className="nav-link">
                    Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="nav-link">Orders</Link>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto" }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
};

export default Layout;
