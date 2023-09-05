import React, { useState } from "react";
import { Header } from "../Header";
import { Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
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
                  <Link
                    onClick={() => {
                      console.log(props.active);
                    }}
                    to="/"
                    className={`${props.active === 1 ? "active" : ""} nav-link`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => {
                      console.log(props.active);
                    }}
                    to="/category"
                    className={`${props.active === 2 ? "active" : ""} nav-item`}
                  >
                    Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={() => {
                      console.log(props.active);
                    }}
                    to="/products"
                    className={`${props.active === 3 ? "active" : ""} nav-item`}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      console.log(props.active);
                    }}
                    to="/orders"
                    className={`${props.active === 4 ? "active" : ""} nav-item`}
                  >
                    Orders
                  </Link>
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
