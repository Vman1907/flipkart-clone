import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import Input from "../../components/Layout/UI/input";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/products.actions";
import { NewModal } from "../../components/Layout/UI/Modal";
/**
 * @author
 * @function Products
 **/

export const Products = (props) => {
  useEffect(() => {
    props.setActive(3);
  });
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState("");
  const [show, setShow] = useState(false);
  const category = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleClose = () => {
    console.log("Inside handleclose");
    setName("");
    setPrice("");
    setQuantity("");
    setDescription("");
    setCategoryId("");
    setProductPictures("");
    setShow(false);
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

  const handleProductPictures = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  };

  var parentName="Default";
  const findCategoryName = (categoryId) => {
    console.log("Inside findCategoryName, category id passed is " + categoryId);
    createCategoryList(category.categories).map((parent) => {
      if (parent.value === categoryId) {
        console.log("Match found and is "+parent.name);
        parentName=parent.name;
      }
      return parentName;
    });
  };
  

  const handleSubmit = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("price", price);
    form.append("quantity", quantity);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productPictures) {
      form.append("productImage", pic);
    }
    dispatch(addProduct(form));
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const renderProductsTable = () => {
    var counter = 1;
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Product Pictures</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {product.products.length > 0 ? (
            product.products.map((product) => (

              <tr key={product._id}>
                {findCategoryName(product.category)}
                <td>{counter++}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.description}</td>
                <td>---</td>
                <td>{ parentName}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>1</td>
              <td>Empty</td>
              <td>Empty</td>
              <td>Empty</td>
              <td>Empty</td>
              <td>Empty</td>
              <td>Empty</td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  };

  return (
    <Layout active={props.active} sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Products</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>{renderProductsTable()}</Col>
        </Row>
      </Container>

      <NewModal
        show={show}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        modalTitle="Add New Product"
      >
        <Input
          label={"Name"}
          value={name}
          placeholder={"Product Name"}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          label={"Price"}
          value={price}
          placeholder={"Product Price"}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Input
          label={"Quantity"}
          value={quantity}
          placeholder={"Product Quantity"}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <Input
          label={"Description"}
          value={description}
          placeholder={"Product Description"}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <select
          label="Category"
          value={categoryId}
          className="form-control"
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>Select Category</option>
          {createCategoryList(category.categories).map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        </select>

        {productPictures.length > 0
          ? productPictures.map((pic, index) => (
              <div key={index}>{pic.name}</div>
            ))
          : console.log("Empty")}

        <input
          type="file"
          name="productPictures"
          onChange={handleProductPictures}
        />
      </NewModal>
    </Layout>
  );
};
