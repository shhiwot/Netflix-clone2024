import axios from "../../utils/axios";
// import axios from"axios"
import requests from "../../utils/requests";
import React, { useEffect, useState } from "react";
import "./banner.css";
const Banner = () => {
  const [movies, setMovie] = useState({});
  function truncate(text, maxLength) {
    if (typeof text !== "string") {
      return "";
    }
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }
  useEffect(() => {
    axios
      .get(requests.fetchNetflixOriginals)
      .then((response) => {
        console.log("Response data:", response.data);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(movies);

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movies?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="outer_wrapper">
      </div>
        <div className="banner_contents">
          <div className="header">
            <h1 className="banner_title">
              {movies.title || movies?.name || movies.original_name}
            </h1>
          </div>

          <div className="banner_buttons">
            <button className="banner_button play ">play</button>
            <button className="banner_button my_list">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movies?.overview, 150)}
          </h1>
        </div>
        <div className="banner_fadebottom" />
      </div>
    </>
  );
};

export default Banner;
