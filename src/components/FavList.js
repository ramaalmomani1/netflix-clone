import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios';
import Movie from './Movie';

export default function FavList() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_LOCAL_SERVER}/product`);
      console.log(res.data.products);
      setProducts(res.data.products)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <Row> 
      {
          products.length && (
            products.map(item => 
              <Movie product={item} />
            )
          )
        }
      </Row>
    </div>
  )
}