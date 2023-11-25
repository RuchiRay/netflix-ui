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
import { RowPoster } from "./RowPoster";
import { findRandom } from "@/utilities/findRandom";
import { CardImage } from "./CardImage";

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
      <div className="relative ">
        <div
          className="flex overflow-x-scroll items-center scroll-smooth"
          id={id}
        >
          {movies.map((movie: any, index: any) => {
            const { id, backdrop_path } = movie;
            const randomNumber = findRandom();

            return (
              <CardImage key={id} type={type} id={id} imgSrc={backdrop_path} />
            );
          })}
        </div>
        {/* <div className="absolute cursor-pointer h-40 w-14 flex items-center justify-center top-2/4 opacity-30 hover:opacity-100 left-0 -translate-y-2/4">
                    <MdOutlineKeyboardArrowLeft
                        className="text-[4rem]"
                        onClick={() => {
                            toScroll.scrollLeft -= window.innerWidth - 80;
                        }}
                    />
                </div>
                <div className="absolute cursor-pointer h-40 w-14 flex items-center justify-center top-2/4 opacity-30 right-0 hover:opacity-100 -translate-y-2/4">
                    <MdOutlineKeyboardArrowRight
                        className="text-[4rem]"
                        onClick={() => {
                            toScroll.scrollLeft += window.innerWidth - 80;
                        }}
                    />
                </div> */}
      </div>
    </div>
  );
};
