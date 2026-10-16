import React from "react";
import { Dumbbell, LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#111111] px-4 text-white">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-[#CCFF00] p-3">
          <Dumbbell className="h-7 w-7 text-black" />
        </div>

        <h1 className="text-3xl font-extrabold tracking-wider">
          FIT<span className="text-[#CCFF00]">LOG</span>
        </h1>
      </div>

      <LoaderCircle className="h-14 w-14 animate-spin text-[#CCFF00]" />

      <h2 className="mt-6 text-lg font-bold tracking-widest">
        LOADING WORKOUTS...
      </h2>

      <p className="mt-2 text-center text-sm text-gray-400">
        Preparing your next workout. Stay focused!
      </p>

      <div className="mt-6 h-1.5 w-56 overflow-hidden rounded-full bg-gray-800">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-[#CCFF00]" />
      </div>
    </div>
  );
}