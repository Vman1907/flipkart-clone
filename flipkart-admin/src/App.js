import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Signin } from "./containers/Signin";
import { Signup } from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import "../src/";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/actions";
import { Home } from "./containers/Home";
import { Test } from "./containers/TestUpload";
import { Products } from "./containers/Products";
import { Orders } from "./containers/Orders";
import { Category } from "./containers/Category";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) dispatch(isUserLoggedIn());
  }, []);

  const [active,setActive] = useState(1)

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <PrivateRoute>
              {" "}
              <Home setActive={setActive} active={active} />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              {" "}
              <Products setActive={setActive} active={active}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/category"
          element={
            <PrivateRoute>
              {" "}
              <Category setActive={setActive} active={active}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              {" "}
              <Orders setActive={setActive} active={active}/>
            </PrivateRoute>
          }
        />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/upload" exact element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
