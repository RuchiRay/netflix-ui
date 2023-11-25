import { Banner } from "@/components/Banner";
import { Row } from "@/components/Row/Row";
import { requests } from "@/request";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Row
        title="Continue watching for Ruchi Ray"
        type="movie"
        showBar
        fetchUrl={requests.fetchContinueWatching}
        key="CW"
        id="CW"
      />
      <Row
        title="TV shows"
        type="tv"
        fetchUrl={requests.discoverSeries}
        key="TVS"
        id="TVS"
      />
      <Row
        title="Top Rated on Netflix"
        type="movie"
        fetchUrl={requests.fetchTopRated}
        key="TRON"
        id="TRON"
      />
      {/* <Row
        title="Trending Now"
        type="movie"
        fetchUrl={requests.fetchTrendingMovies}
        key="TN"
        id="TN"
      /> */}
      <Row
        type="tv"
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        id="NO"
        key="NO"
      />
      <Row
        type="tv"
        title="Exciting crime tv series"
        fetchUrl={requests.fetchCrimeSeries}
        id="CS"
        key="CS"
      />
      <Row
        type="movie"
        title="Action"
        fetchUrl={requests.fetchActionMovies}
        id="AC"
        key="AC"
      />
      <Row
        type="tv"
        title="Comedy"
        fetchUrl={requests.fetchComedySeries}
        id="CO"
        key="CO"
      />
      {/* <Row
        type="movie"
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
        id="RO"
        key="RO"
      /> */}
      {/* <Row
        type="movie"
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
        id="HO"
      /> */}
      {/* <Row
        type="tv"
        title="Adventure"
        fetchUrl={requests.fetchActionAdventureSeries}
        id="AD"
      /> */}
      {/* <Row
        type="tv"
        title="Animation"
        fetchUrl={requests.fetchAnimationSeries}
        id="AN"
      /> */}
      <Row
        type="movie"
        title="Upcoming"
        fetchUrl={requests.fetchUpcomingMovies}
        id="UP"
      />
    </div>
  );
};

export default HomePage;
