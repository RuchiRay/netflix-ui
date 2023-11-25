import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="p-12  flex items-center flex-col">
      <div className=" text-white/40 max-w-4xl">
        <div className="flex w-full text-2xl gap-6">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="flex flex-wrap gap-4 mt-4 items-start text-sm justify-between">
          <div className="flex w-[200px] flex-col gap-3">
            <p>Audio descriptiom</p>
            <p>Invester relations</p>
            <p>Legal Notice</p>
          </div>
          <div className="flex w-[200px] flex-col gap-3">
            <p>Help Centre</p>
            <p>Jobs</p>
            <p>Cookie Preference</p>
          </div>
          <div className="flex w-[200px] flex-col gap-3">
            <p>Gift cards</p>
            <p>Terms of use</p>
            <p>Corporate Information</p>
          </div>
          <div className="flex w-[200px] flex-col gap-3">
            <p>Media center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="mt-6 border text-sm border-white/40 p-1 w-max">
          Service Code
        </div>
      </div>
    </div>
  );
};
