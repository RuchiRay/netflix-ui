'use client'
import axios from "../axios";
import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import "./row.css";
// import { RowPoster } from "./RowPoster";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from "next/image";

type Row = {
    title: string
    fetchUrl: string
    showBar?: boolean
    id: string
}

export const Row = ({ title, fetchUrl, showBar = false, id }: Row) => {
    const [movies, setMovies] = useState([]);
    const toScroll = document.getElementById(id);
    useEffect(() => {
        const fetchdata = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        };
        fetchdata();
    }, [fetchUrl]);

    return (
        <div className="ml-12 mb-6">
            <h2 className="font-medium text-xl">{title}</h2>
            <div className="relative mt-2">
                <div className='flex h-44 overflow-x-scroll items-center scroll-smooth' id={id}>
                    {movies.map((movie) => {
                        const { id, backdrop_path } = movie;
                        const imgSrc = backdrop_path;
                        const randomNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
                        console.log(randomNumber, 'rand');

                        return (
                            <div className="flex flex-col" key={id}>
                                <div className='shrink-0 w-[228px] h-[128px] bg-neutral-500 m-2 object-cover rounded-md' >
                                    <Image
                                        src={`https://image.tmdb.org/t/p/original/${imgSrc}`}
                                        className="rounded-md"
                                        alt="poster"
                                        width={228}
                                        height={128}
                                    />

                                    {/* <RowPoster /> */}
                                </div>
                                {
                                    showBar && <div className="w-[228px] h-[2px] m-2 bg-neutral-500">
                                        <div className={`h-[2px] bg-red-700`} style={{ width: `${randomNumber}%` }}></div>
                                    </div>
                                }
                            </div>

                        );
                    })}
                </div>
                <div className="absolute cursor-pointer h-40 w-14 flex items-center justify-center top-2/4 opacity-30 hover:opacity-100 left-0 -translate-y-2/4">
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
                </div>
            </div>
        </div>
    );
};
