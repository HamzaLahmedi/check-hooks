import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'


function Trailer({movies}) {
    const {id}=useParams()
const movie=movies.find(movie=>movie.id==id)
const navigate=useNavigate()
  return (
    <div>
        <h2>{movie.title}</h2>
      <iframe style={{width: "800px", height:"600px"}} 
        src={movie.link}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        
      />{" "}
      <h2>{movie.description}</h2>
     
     <Button variant="secondary" onClick={()=>navigate(-1)}> GO Back</Button>
    </div>
  )
}

export default Trailer
