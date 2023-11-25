import React from "react";
import { BsVolumeMute } from "react-icons/bs";
export const Volume = () => {
  return (
    <div className="w-10 flex cursor-pointer cursor-pointer  h-10 items-center border border-neutral-500 justify-center rounded-full">
      <BsVolumeMute className="text-2xl text-white/70" />
    </div>
  );
};
