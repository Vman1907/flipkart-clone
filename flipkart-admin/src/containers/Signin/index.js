import React from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Layout/UI/input";
import { login } from "../../redux/actions";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
/**
 * @author
 * @function Signin
 **/

export const Signin = (props) => {

  const dispatch=useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = { email: "Varshmaan2", password: "Varshmaan2" };
    dispatch(login(user));
  };
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange={() => {}}
              />

              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
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
