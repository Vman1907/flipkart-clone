import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home } from './containers/Home';
import { Signin } from './containers/Signin';
import { Signup } from './containers/Signup';
import '../src/'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/signin' exact element={<Signin/>}/>
          <Route path='/signup' exact element={<Signup/>}/>

        </Routes>
    </div>
  );
}

export default App;
