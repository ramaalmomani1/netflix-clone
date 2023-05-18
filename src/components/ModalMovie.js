

import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalMovie(props) {

  const [comment,setComment]= useState('')

const saveProduct = () =>{
  const obj ={
    title : props.product.title,
    release_date : props.product.release_date,
    overview : props.product.overview
  }
  
      axios.post(`http://localhost:7001/addMovie`, obj).then(res => console.log(res.data)).catch (err => {console.log(err)})
      setComment('') 
      props.setShow(false)

    }
  const handleClose = () => props.setShow(false);

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const poster_pathURL = "http://image.tmdb.org/t/p/w500/"

  return (
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.product.title} {props.product.name} </Modal.Title>             

        </Modal.Header>

        <Modal.Body>
        <img src={poster_pathURL+props.product.poster_path} alt={props.product.title} width='100%' />
          
      <Form.Group  className="mb-3" controlId="comment">
        <Form.Label>Comments</Form.Label>
        <Form.Control as='textarea'  rows = {5} value={comment} onChange ={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your comments with anyone else.
        </Form.Text>
      </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={saveProduct}>Save changes</Button>
        </Modal.Footer>
      </Modal>
  );
}