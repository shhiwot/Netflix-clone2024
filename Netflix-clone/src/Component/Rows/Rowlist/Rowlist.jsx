import React from 'react'
import Row from '../Row/Row';
import requests from '../../../utils/requests';

const Rowlist = () => {
  return (
    <div>
      <Row
        title={"NETFLX ORIGINALS"}
        fetchurl={requests.fetchNetflixOriginals}
        islargeRow={true}
      />
      <Row title={"TRENDING"} fetchurl={requests.fetchTrending} />
      <Row title={"TopRatedMovies"} fetchurl={requests.fetchTopRatedMovies} />
      <Row title={"ActionMovies"} fetchurl={requests.fetchActionMovies} />
      <Row title={"ComedyMovies"} fetchurl={requests.fetchComedyMovies} />
      <Row title={"HorrorMovies"} fetchurl={requests.fetchHorrorMovies} />
      <Row title={"RomanceMovies"} fetchurl={requests.fetchRomanceMovies} />
      <Row title={"DocumentaryMovies"} fetchurl={requests.fetchDocumentaries} />
      <Row title={"PopularTvShows"} fetchurl={requests.fetchPopularTvShows} />
    </div>
  );
}

export default Rowlist
