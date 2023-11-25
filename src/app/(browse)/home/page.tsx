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
        id="CW"
      />
      {/* <RowCard title='TV shows' type='tv' fetchUrl={requests.discoverSeries} id="TVS" /> */}
      {/* <Row title='Top Rated on Netflix' type='movie' fetchUrl={requests.fetchTopRated} id="TRON" /> */}
      {/* <Row title='Trending Now' fetchUrl={requests.fetchTrending} id='TN' />
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} id='NO' />
      <Row title='Exciting crime tv series' fetchUrl={requests.fetchCrimeSeries} id='CS' />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} id='AC' />
      <Row title='Comedy' fetchUrl={requests.fetchComedySeries} id='CO' />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} id='RO' />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} id='HO' />
      <Row title='Adventure' fetchUrl={requests.fetchActionAdventureSeries} id='AD' />
      <Row title='Animation' fetchUrl={requests.fetchAnimationSeries} id='AN' />
      <Row title='Upcoming' fetchUrl={requests.fetchUpcomingMovies} id='UP' /> */}
    </div>
  );
};

export default HomePage;
