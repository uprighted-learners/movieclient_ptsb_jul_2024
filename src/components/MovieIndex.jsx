import APIURL from "../helpers/environment";

import { useEffect, useState } from "react";

import Movie from "./Movie";

const MovieIndex = ({token}) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const url = APIURL + "/movie/all"

    // const headers = new Headers()

    // headers.append("Authorization", `Bearer ${token}`)
    // headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    const response = await fetch(url, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const results = await response.json()

    console.log("the movies??",results);

    setMovies(results)
  }

  useEffect(() => {
    if(token){
      fetchMovies()
    }
  },[])

  return (
    <div style={{display:"flex"}}>
      {
        movies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))
      }

    </div>
  );
};

export default MovieIndex;
