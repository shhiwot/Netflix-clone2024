import React, { useEffect, useState } from 'react'
import"./row.css"
import axios from '../../../utils/axios';
import Rowlist from '../Rowlist/Rowlist';
import Youtube from"react-youtube"
import { height, width } from '@mui/system';
import  movieTrailer from"movie-trailer"
const Row = ({title, fetchurl, islargeRow}) => {
  const [movies, setMovie] = useState([]);
  const[trailerUrl,settrailerUrl]=useState("")
  const base_url = "https://image.tmdb.org/t/p/original";

  const handelclick=(movie)=>{
    if (trailerUrl) {
     settrailerUrl('') 
    }else{
  movieTrailer(movie?.title||movie?.name||movie?.original_name).then((url)=>{
      console.log(url); 
      const urlparams=new URLSearchParams(new URL(url).search) 
console.log(urlparams);
console.log(urlparams.get("v"));
settrailerUrl(urlparams.get("v"));

     }) 
    }
  }
  const opts={
    height:'300',
    width:'100%',
    playerVars:{autoplay: 1},
  }
  useEffect(() => {
   axios
     .get(fetchurl)
     .then((response) => {
       console.log("Response data:", response.data);
       setMovie(response.data.results);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
  }, [fetchurl]);

  return (
    <div className="rows">
      <h1>{title}</h1>
      <div className="rows_posters">
        {movies?.map((movie, index) => {
          return (
            <img
              onClick={() => handelclick(movie)}
              key={index}
              src={`${base_url}${
                islargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`rows_poster${islargeRow && "rows_posterLarge"}`}
            />
          );
        })}
      </div>
      {trailerUrl && (
        <div style={{ padding: "40px" }}>
          {<Youtube videoId={trailerUrl} opts={opts} />}
        </div>
      )}
    </div>
  );
};

export default Row
