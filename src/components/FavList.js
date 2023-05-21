import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios';
import Movie from './Movie';

export default function FavList() {

    const [results, setResults] = useState([]);


    const fetchData = async () => {
        try {
          const res = await axios.get(`https://movies-server-ur78.onrender.com/addMovie`);
          console.log(res.data.results);
          setResults(res.data.results)
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
          results && (
            results.map(item => 
              <Movie product={item} />
            )
          )
        }
      </Row>
    </div>
  )
}

