import React, { useState } from "react";
import { MovieCard } from "./MovieCard";
import DownArrow from "../icons/DownArrow";
import { UpArrow } from "../icons/UpArrow";

export const MoreLikeThis = ({ data }: any) => {
  console.log(data, "data");
  const [showAll, setShowAll] = useState(false);
  const handleArrow = () => {
    setShowAll((prev) => !prev);
  };
  return (
    <div className="relative">
      <div
        className={`${
          showAll ? "h-auto" : "h-[940px]"
        } grid overflow-hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 `}
      >
        {data.map((item: any) => {
          return <MovieCard key={item?.id} item={item} />;
        })}
      </div>
      <div className="fade-bottom"></div>
      {showAll && <div className="mt-16"></div>}
      <div className="relative bg-white/40 w-full h-px">
        <div
          onClick={handleArrow}
          className="absolute -bottom-4 left-2/4 -translate-x-2/4"
        >
          {!showAll ? <DownArrow setOpen={() => {}} /> : <UpArrow />}
        </div>
      </div>
    </div>
  );
};
