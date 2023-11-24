'use client'
import React from 'react'
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter()

  return (
    <div className="bg-black/70 w-[30rem] z-10 p-14 rounded">
      <p className="text-3xl font-medium mb-6">Sign Up</p>
      <div className="flex flex-col">
        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            autoComplete=''
            className="h-12 rounded text-white pl-4 bg-neutral-600"

          />
          <input
            type="password"
            autoComplete=''
            placeholder="Password"
            className="h-12 rounded text-white pl-4 bg-neutral-600"

          />
          <input
            type="password"
            autoComplete=''
            placeholder="Repeat your password"
            className="h-12 rounded text-white pl-4 bg-neutral-600"

          />
          <button
            type="submit"
            className="bg-red-700 h-12 rounded text-xl"
            onClick={() => router.push("/home")}
          >
            Sign Up
          </button>
        </form>
        <div className="h-px w-[90%] bg-white/30 mt-6 mb-5 m-auto"></div>

        <div className="flex gap-2  justify-center mt-2">
          <p className="text-white/30">Do you already have an account?</p>
          <p
            className="cursor-pointer hover:underline"
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