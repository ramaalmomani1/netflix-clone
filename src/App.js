import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Headernav from './components/Navbar'
// import Movie from './components/Movie';
// import {Row} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Headernav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element={<Headernav />} />
      </Routes>
    </div>
  );
}

export default App;
