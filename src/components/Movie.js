
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie';
import { useState } from 'react';
import axios from 'axios';


function Movie({product,handleShow, setSingleProduct, canEdit = false, updateProductState}) {

const [movies, setMovies] = useState([])

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true)
  }

  const poster_pathURL = "http://image.tmdb.org/t/p/w500/"
  return (
    <Card style={{ width: '18rem' }} key={product.id}>
      <Card.Img variant="top" src={poster_pathURL+product.poster_path } />
      <Card.Body className='card'>
        <Card.Title className='name'>{product.title}  {product.name}  {product.id}</Card.Title>
        <Card.Text className='data'>
          {product.overview}
           {product.comments}
          <br/>
        </Card.Text>
        

<Button variant="primary" onClick={handleClick}>Add to the favorite list</Button>
       
      </Card.Body>
      {show && (<ModalMovie product={product} show={show} setShow={setShow}/>)}
    </Card>
  );
}

export default Movie;