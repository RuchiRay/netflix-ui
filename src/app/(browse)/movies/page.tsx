import { Row } from "@/components/Row/Row";
import { requests } from "@/request";
import React from "react";

const Movies = () => {
  return (
    <div>
      <Row
        type="movie"
        title="Action"
        fetchUrl={requests.fetchActionMovies}
        id="AC"
        key="AC"
      />
    </div>
  );
};

export default Movies;
