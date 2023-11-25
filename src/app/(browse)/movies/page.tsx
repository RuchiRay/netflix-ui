import { Row } from "@/components/Row/Row";
import { requests } from "@/request";
import React from "react";

const Movies = () => {
  return (
    <div>
      <Row
        type="movie"
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        id="AC"
        key="TRM"
      />
      <Row
        type="movie"
        title="Action"
        fetchUrl={requests.fetchActionMovies}
        id="AC"
        key="ACM"
      />
      <Row
        type="movie"
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
        id="AC"
        key="CMM"
      />
      <Row
        type="movie"
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
        id="AC"
        key="HM"
      />
    </div>
  );
};

export default Movies;
