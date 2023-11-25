// 'use client'
import axios from "../../axios";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import "./row.css";
// import { RowPoster } from "./RowPoster";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from "next/image";
import { findRandom } from "@/utilities/findRandom";
import { MovieCard } from "./MovieCard";
import { Scroller } from "./Scroller";

type Row = {
  title: string;
  fetchUrl: string;
  type: string;
  showBar?: boolean;
  id: string;
};

export const Row = async ({
  title,
  fetchUrl,
  showBar = false,
  id,
  type,
}: Row) => {
  // const [movies, setMovies] = useState([]);
  // const toScroll = document.getElementById(id);
  // useEffect(() => {
  // const fetchdata = async () => {
  const request = await axios.get(fetchUrl);
  const movies = request.data.results;
  // setMovies(request.data.results);
  // };
  // fetchdata();
  // }, [fetchUrl]);

  return (
    <div className="ml-12">
      <h2 className="font-medium text-xl">{title}</h2>
      <div className="relative -mt-14 ">
        <div
          className="flex  h-72 overflow-x-scroll gap-2 items-center scroll-smooth"
          id={id}
        >
          {movies.map((movie: any, index: any) => {
            const { id, backdrop_path } = movie;
            const randomNumber = findRandom();

            return (
              <MovieCard
                allData={movies}
                key={id}
                type={type}
                id={id}
                imgSrc={backdrop_path}
              />
            );
          })}
        </div>
        <Scroller id={id} />
      </div>
    </div>
  );
};
