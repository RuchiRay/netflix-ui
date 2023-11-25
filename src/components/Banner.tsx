// 'use client'
import axios from "../axios";
import React, { useState, useEffect } from "react";
import { requests } from "../request";
import truncate from "../utilities/truncate";
import { BsFillPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
export const Banner = async () => {
  const request = await axios.get(requests.fetchNetflixOriginals);
  const movie =
    request.data.results[
      Math.floor(Math.random() * (request.data.results.length - 1))
    ];

  return (
    <div className="banner-wrapper">
      <div
        className="min-h-[600px] relative flex flex-col items-start justify-center"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}') `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          height: "80vh",
        }}
      >
        <div className="pl-6 md:pl-12 pb-12">
          <h1 className="mb-5 text-4xl md:text-[3.8rem]">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="flex gap-3">
            <button className="h-12 w-40 rounded-md  bg-white flex justify-center items-center">
              {" "}
              <BsFillPlayFill className="text-4xl text-black mr-2" />{" "}
              <span className="text-black font-semibold">Play</span>
            </button>
            <button className="h-12 w-40 rounded-md bg-neutral-600  flex justify-center items-center">
              {" "}
              <BiInfoCircle className="text-2xl mr-2" /> <span>More Info</span>
            </button>
          </div>
          <div className="text-lg mt-4 max-w-[34rem]">
            <p>{truncate(movie?.overview, 149)}</p>
          </div>
        </div>
        <div className="fade-bottom"></div>
      </div>
    </div>
  );
};
