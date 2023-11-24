'use client'
import React from 'react'
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter()

  return (
    <div className="bg-black/70 w-[30rem] z-10 p-12 rounded">
      <p className="text-3xl font-bold mb-6">Sign Up</p>
      <div className="flex flex-col">
        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            className="h-14 rounded text-white bg-gray-100"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-14 rounded text-white bg-gray-100"
          />
          <input
            type="password"
            placeholder="Repeat your password"
            className="h-14 rounded text-white bg-gray-100"
          />
          <button
            type="submit"
            className="bg-red-100 h-14 rounded text-xl"
          >
            Sign Up
          </button>
        </form>
        <div className="h-px w-[90%] bg-white/30 mt-6 mb-5 m-auto"></div>

        <div className="flex gap-2 text-lg justify-center mt-2">
          <p className="text-white/30">Do you already have an account?</p>
          <p
            className="text-red-200 font-bold cursor-pointer hover:underline"
            onClick={() => router.push("/login")}
          >
            Sign In
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp