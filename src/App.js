import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Footer.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Headernav from './components/Navbar'
import FavList from './components/FavList';
import Footer from './components/Footer';
// import Movie from './components/Movie';
// import {Row} from 'react-bootstrap'

function App() {
  return (


    <div className="App">
      < Headernav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element={<FavList/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
