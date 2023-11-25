// 'use client'
import axios from "../../axios";
import React, { useState, useEffect } from "react";
import { Top } from "./Top";
import { findRandom } from "@/utilities/findRandom";

type CardInfo = {
  id: number;
  type: string;
  allData: any;
};

export const CardInfo = async ({ id, type, allData }: CardInfo) => {
  const NEXT_APP_API_KEY = process.env.NEXT_APP_API_KEY;

  // const [details, setdetails] = useState()
  const url = `/${type}/${id}?api_key=${NEXT_APP_API_KEY}&language=en-US`;

  const req = await axios.get(url);
  const data = req.data;
  // const data: any = [];

  // console.log(req, 'req', NEXT_APP_API_KEY, 'hello');

  // useEffect(() => {
  //     const fetchdata = async () => {
  //         const request = await axios.get(url);
  //         console.log(request);

  //         // setdetails(request.data.results);
  //     };
  //     fetchdata();
  // }, [url])

  return (
    <div className="p-4">
      <Top data={data} moreData={allData} />
      <div className="flex gap-2 items-center mt-2 text-white/80">
        <p className="text-green-500">{findRandom()}% Match</p>
        <div className="border text-sm p-1 border-neutral-500">U/A 16+</div>
        <p>{data?.seasons?.length ?? 1} Season</p>
        <div className="border p-1 text-xs border-neutral-500">HD</div>
      </div>
      <div className="flex gap-2 mt-2 text-sm items-center">
        {data.genres.map((genre: any, index: any) => {
          return (
            <div key={genre.id} className="flex items-center gap-2">
              <p>{genre.name}</p>
              {index < data.genres.length - 1 && (
                <div className="w-1 rounded-full h-1 bg-neutral-500"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
