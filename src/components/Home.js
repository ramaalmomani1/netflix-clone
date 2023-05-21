import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import ModalMovie from './ModalMovie'
// import {Row} from 'react-bootstrap'
import MovieList from './MovieList';


export default function Home() {

    const [results, setResults] = useState([]);


    const fetchData = async () => {
        try {
        
          const res = await axios.get(`https://movies-server-ur78.onrender.com/trending`);
          // console.log(res.data.results);
          setResults(res.data.results)
        } catch(err) {
          console.log(err)
        }
      }

      useEffect(() => {
        fetchData();
      }, [])
    
    
    return (
        <>

<MovieList results={results} />

    

        </>

    )
}