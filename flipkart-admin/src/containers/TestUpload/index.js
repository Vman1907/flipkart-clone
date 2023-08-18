import React, { useState } from "react";
import Layout from "../../components/Layout";
import storage from "../../firebase/firebase";
export const Test = () => {
  const [image, setImage] = useState("");
  const [Url, setUrl] = useState("");

  const upload = () => {
    if (image == null) return;
    setUrl("Getting image Url.........");
    
    storage
      .ref(`/image/${image.name}`)
      .put(image)



      .on("state_changed", alert("success"), alert,
      
      () => {
        storage
          .ref("image")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      });
  };
  //   const listItem = () => {
  //     storage
  //       .ref().child('image/')
  //       .listAll()
  //       .then((res) => {
  //         res.items.forEach((item) => {
  //           setData(arr => [...arr, item.name]);
  //         });
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   };

  return (
    <Layout>
      <div>
        <center>
          <input
            type="file"
            required
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <button onClick={upload}  >Upload</button>
          <br />
          <br />
            <img src={Url} alt="Something went wrong"></img>
          {/* <br />
          <br />
          <br />
          <br />
          <button onClick={listItem}>List Item</button>
          <br />
          <br />
          <br />
          <br />
          {data.map((val) => {
            <h2>{val}</h2>;
          })} */}
        </center>
      </div>
    </Layout>
  );
};
