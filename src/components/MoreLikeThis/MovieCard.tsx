import { findRandom } from "@/utilities/findRandom";
import Image from "next/image";
import React from "react";
import { Add } from "../icons/Add";
import truncate from "@/utilities/truncate";

export const MovieCard = ({ item }: any) => {
  return (
    <div className="">
      <div className="w-full h-[134px]">
        <Image
          className="rounded-md rounded-b-none"
          src={`https://image.tmdb.org/t/p/original/${
            item?.backdrop_path || item?.poster_path
          }`}
          alt="poster"
          width={228}
          height={128}
        />
      </div>
      <div className="w-full h-[250px] lg:h-[200px] bg-neutral-700 p-4">
        <div className="flex w-full justify-between items-center">
          <div>
            <p className="text-green-500">{findRandom()}% Match</p>
            <div className="flex items-center gap-2">
              <div className="border text-sm p-1 border-neutral-500">
                U/A 16+
              </div>
              <div>2023</div>
            </div>
          </div>
          <Add />
        </div>
        <p className="text-sm mt-4">{truncate(item?.overview, 100)}</p>
      </div>
    </div>
  );
};
