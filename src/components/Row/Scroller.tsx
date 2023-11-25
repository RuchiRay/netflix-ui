"use client";
import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type Scroller = {
  id: string;
};
export const Scroller = ({ id }: Scroller) => {
  let toScroll: any = null;
  useEffect(() => {
    toScroll = document.getElementById(id);
  }, []);

  return (
    <>
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
      </div>{" "}
    </>
  );
};
