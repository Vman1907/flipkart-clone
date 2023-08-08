import './App.css';
import {BrowserRouter as Router, Route, Routes,Switch} from 'react-router-dom';
import { Home } from './containers/Home';
import { Signin } from './containers/Signin';
import { Signup } from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import '../src/'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' exact element={<PrivateRoute> <Home/></PrivateRoute>}/>
          <Route path='/signin' exact element={<Signin/>}/>
          <Route path='/signup' exact element={<Signup/>}/>
        </Routes>
    </div>
  );
}

export default App;
