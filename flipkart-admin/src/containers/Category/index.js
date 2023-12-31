import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import {  Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/actions";
import Input from "../../components/Layout/UI/input";
import { NewModal } from "../../components/Layout/UI/Modal";
/**
 * @author
 * @function Category
 **/

export const Category = (props) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoryId, setparentCategoryId] = useState();
  const [categoryImage, setCategoryImage] = useState("");

  const handleClose = () => {
    setCategoryName("");
    setparentCategoryId("");
    setCategoryImage("");
    setShow(false);
  };

  const handleSubmit = () => {
    const form = new FormData();
    form.append("name", categoryName);
      form.append("parentId", parentCategoryId);
    form.append("categoryImage", categoryImage);
    dispatch(addCategory(form));
    setCategoryName("");
    setparentCategoryId("");
    setCategoryImage("");
    // const cat = {
    //   categoryName,
    //   parentCategoryId,
    //   categoryImage,
    // };
    // console.log(cat);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleCategoryImage = (e) => setCategoryImage(e.target.files[0]);

  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    props.setActive(2);
  });
  const renderCategories = (allCategories) => {
    let categories = [];
    for (let category of allCategories) {
      categories.push(
        <li key={category.id}>
          {category.name}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return categories;
  };
  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };
  return (
    <Layout active={props.active} sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Category</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>{renderCategories(category.categories)}</ul>
          </Col>
        </Row>
      </Container>

      <NewModal
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        modalTitle="Add New Category">

        <Input
            label="Name"
            value={categoryName}
            placeholder={"Category Name"}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <select
            label="Parent Category"
            value={parentCategoryId}
            className="form-control"
            onChange={(e) => setparentCategoryId(e.target.value)}
          >
            <option>Select Category</option>
            {createCategoryList(category.categories).map((option) => (
              <option value={option.value} key={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <input
            label="Image"
            type="file"
            name="categoryImage"
            onChange={handleCategoryImage}
          ></input>

      </NewModal>
      
    </Layout>
  );
};
