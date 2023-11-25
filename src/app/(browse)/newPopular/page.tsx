import { Row } from "@/components/Row/Row";
import { requests } from "@/request";
import React from "react";

const NewPopular = () => {
  return (
    <div>
      <Row
        type="movie"
        title="Trending"
        fetchUrl={requests.fetchTrendingMovies}
        id="AC"
        key="TRMP"
      />
      <Row
        type="movie"
        title="Upcoming"
        fetchUrl={requests.fetchUpcomingMovies}
        id="AC"
        key="UPP"
      />
    </div>
  );
};

export default NewPopular;
