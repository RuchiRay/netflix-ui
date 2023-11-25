import React from "react";
import { FaChevronUp } from "react-icons/fa";

export const UpArrow = () => {
  return (
    <div className="w-10 flex cursor-pointer  h-10 items-center border border-neutral-500 justify-center rounded-full">
      <FaChevronUp className="text-xl" />
    </div>
  );
};
