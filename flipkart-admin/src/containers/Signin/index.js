import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Layout/UI/input";
import { isUserLoggedIn, login } from "../../redux/actions";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import {state} from '../../redux/reducers/auth.reducers'

/**
 * @author
 * @function Signin
 **/

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  const userLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Navigate to={"/"} />;
  }
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
