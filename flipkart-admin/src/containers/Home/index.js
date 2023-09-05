import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { Button, Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import "../../../src/index.css";
import { alignPropType } from "react-bootstrap/esm/types";
import "./style.css";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {

  useEffect(()=>{
    props.setActive(1)
  })

  return (
    <Layout active={props.active} sidebar>
        Home

      {/* <div class="jumbotron" style={{margin:'5rem',backgroundColor:'white'  }}>
          <div class="container-fluid">
            <div class="row-fluid">
              
                <h1 style={{marginTop:'50px'}} >Welcome to Admin Dashboard</h1>
                <p style={{marginBottom:'50px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            </div>
          </div>  */}
    </Layout>
  );
};
