'use client'
import Image from 'next/image'
import { useState } from 'react';
import Select, { components ,ControlProps} from "react-select";
import { FaGlobe } from "react-icons/fa";
import { useRouter } from 'next/navigation';



export default function Home() {
  const options = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
  ];
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/signUp");
  };

  const handleSignIn = () => {
    router.push("/login");
  };
  const Control: React.FC<ControlProps> = ({ children, ...props }) => {
    return (
      <components.Control {...props}>
        <div className="flex w-32  items-center ">
          <div>
            <FaGlobe />
          </div>
          {children}
        </div>
      </components.Control>
    );
  };
  return (
    <div className=" items-center justify-center flex flex-col w-full h-screen bg-cover min-h-[650px] black-gradient ">
        <div className="flex justify-between fixed top-8 px-12 w-full">
        <div className="w-48">
            <Image
              src="/logo.png"
              alt="red netflix logo text png"
              width={80}
              height={10}
            />
          </div>
          <div className="flex  gap-8">
            <div>
              <Select
                options={options}
                isSearchable={false}
                components={{ Control }}
                defaultValue={options[0]}
                className="exp-select"
                classNamePrefix="react"
              />
            </div>
            <button
              onClick={handleSignIn}
              className="bg-red-700 text-white  rounded px-5 h-[2.375rem]"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[700px] justify-center items-center">
          <p className="text-[4rem] font-bold text-center leading-[5rem]">
            Unlimited movies, TV shows and more.
          </p>
          <p className="text-2xl my-4">Watch anywhere. Cancel anytime.</p>
          <p className="text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex w-full mt-4">
            <input
              type="text"
              placeholder="Email address"
              className=" pl-3 h-16 w-full text-black"
            />
            <button
              onClick={handleGetStarted}
              className="bg-red-700 w-80 text-3xl"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
  )
}
