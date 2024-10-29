import React from 'react'

const Movie = ({movie}) => {
  return (
    <div style={{border: "solid 1px blue", padding: "2em", background:"rebeccapurple"}}>
      <p>{movie.title}</p>
      <p>{movie.genre}</p>
      <p>{movie.releaseYear}</p>
      <p>{movie.length}</p>
      <p>{movie.rating}</p>


    </div>
  )
}

export default Movie