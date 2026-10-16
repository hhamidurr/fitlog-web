"use client";

import React from "react";
import { Dumbbell } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#111111] px-4 text-white">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#CCFF00]">
          <Dumbbell className="h-7 w-7 text-black" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-wider">
          FIT<span className="text-[#CCFF00]">LOG</span>
        </h1>
      </div>

      {/* Loading Spinner */}
      <div className="relative mb-6 flex h-16 w-16 items-center justify-center">
        <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-[#333333] border-t-[#CCFF00]" />
        <Dumbbell className="h-6 w-6 text-[#CCFF00]" />
      </div>

      {/* Loading Text */}
      <h2 className="text-lg font-bold tracking-widest">
        LOADING WORKOUTS
      </h2>

      <p className="mt-2 text-center text-sm text-gray-400">
        Preparing your next workout. Stay focused!
      </p>

      {/* Progress Animation */}
      <div className="mt-6 h-1.5 w-56 overflow-hidden rounded-full bg-[#333333]">
        <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-[#CCFF00]" />
      </div>

      <p className="mt-5 text-xs font-medium tracking-[0.2em] text-[#CCFF00]">
        TRAIN WITH INTENT.
      </p>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;