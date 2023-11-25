import React from "react";
import { GoThumbsup } from "react-icons/go";

export const Like = () => {
  return (
    <div className="w-10 flex  h-10 items-center border border-neutral-500 justify-center rounded-full">
      <GoThumbsup className="text-2xl" />
    </div>
  );
};
