// 'use client'
import axios from "../axios";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import "./row.css";
// import { RowPoster } from "./RowPoster";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from "next/image";
import { RowPoster } from "./RowPoster/RowPoster";
import { findRandom } from "@/utilities/findRandom";

type Row = {
    title: string
    fetchUrl: string
    type: string
    showBar?: boolean
    id: string
}

export const Row = async ({ title, fetchUrl, showBar = false, id, type }: Row) => {
    // const [movies, setMovies] = useState([]);
    // const toScroll = document.getElementById(id);
    // useEffect(() => {
    // const fetchdata = async () => {
    const request = await axios.get(fetchUrl);
    const movies = request.data.results
    // setMovies(request.data.results);
    // };
    // fetchdata();
    // }, [fetchUrl]);


    return (
        <div className="ml-12">
            <h2 className="font-medium text-xl">{title}</h2>
            <div className="relative -mt-16">
                <div className='flex h-[324px]  overflow-x-scroll items-center scroll-smooth' id={id}>
                    {movies.map((movie: any) => {
                        const { id, backdrop_path } = movie;
                        const imgSrc = backdrop_path;
                        const randomNumber = findRandom()

                        return (
                            <div key={id} className='shrink-0 transition-all duration-200 hover:z-10 hover:w-[342px] hover:h-[320px] h-[128px] group  bg-neutral-900 m-2 object-cover rounded-md' >
                                <div className=" w-[228px] h-[128px] group-hover:w-[342px] group-hover:h-[150px]">
                                    <Image
                                        className="rounded-md  group-hover:rounded-b-none"
                                        src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
                                        alt="poster"
                                        width={228}
                                        height={128}

                                    />

                                </div>
                                <div className="group-hover:block hidden ">
                                    <RowPoster type={type} id={id} />
                                </div>
                                {/* {
                                        index === 2 && <div className="bg-white group-hover:scale-[2] group-hover:z-10 top-0 w-[228px] h-[128px] absolute"></div>
                                        // index === 2 && <div className="bg-white w-[350px] top-0 h-[350px] absolute"></div>
                                    } */}
                            </div>


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
