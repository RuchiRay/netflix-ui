'use client'
import React from 'react'
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter()

  return (
    <div className="bg-black/70 w-[30rem] p-16 rounded">
    <p className="text-3xl font-medium mb-6">Sign In</p>

    <div className="flex flex-col">
      <form className="flex flex-col gap-5">
        <input
          type="email"
          placeholder="Email"
          className="h-12 rounded text-white pl-4 bg-neutral-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-12 rounded text-white bg-neutral-600 pl-4"
        />
        <button
          type="submit"
          className="bg-red-700 h-12 rounded text-xl"
        >
          Sign In
        </button>
      </form>
      <p className='text-sm text-white/60 mt-4'>Do you need help?</p>
      <div className="flex gap-2  mt-10 ">
        <p className="text-white/30">New to Netflix? </p>
        <p
          className="  cursor-pointer hover:underline"
          onClick={() => router.push("/signUp")}
        >
        Sign up now .
        </p>
      </div>
      <p className='text-white/50 text-xs mt-4'>To make sure you are not a bot, this page is protected by Google reCAPTCHA.</p>
    </div>
  </div>
  )
}

export default Login