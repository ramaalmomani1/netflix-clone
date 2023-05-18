
import { Row } from 'react-bootstrap'
import Movie from './Movie'


export default function MovieList(props) {
  console.log('1', props)
  console.log('2',props.results)
  return (
    <div>
      <Row> 
      {
      
      props.results.map ( (item) => (
              <Movie key={item.id} product={item}  />
            )
      )
        } 
      </Row>
    </div>
  )
}