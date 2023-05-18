import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import ModalMovie from './ModalMovie'
// import {Row} from 'react-bootstrap'
import MovieList from './MovieList';


export default function Home() {

    const [results, setResults] = useState([]);


    const fetchData = async () => {
        try {
        
          const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=4d25b873e73e136c52ed3c745b0e26c4`);
          // ${process.env.REACT_APP_TRENDING_API}?api_key=${process.env.REACT_APP_TRENDING_KEY}
        //   `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TRENDING_API}`
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
        <>

<MovieList results={results} />

    

        </>

    )
}