import React from "react";
import { Dumbbell, LoaderCircle, Flame, Clock3, Star } from "lucide-react";

const Loading = () => {
  return (
    <main className="min-h-screen bg-[#111111] px-4 py-12 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl animate-pulse">

        {/* Breadcrumb Skeleton */}
        <div className="mb-8 h-4 w-48 rounded bg-[#292929]" />

        {/* Workout Details Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Left: Image Skeleton */}
          <div className="relative flex min-h-75 items-center justify-center overflow-hidden rounded-2xl border border-[#292929] bg-[#1B1B1B] sm:min-h-112.5">
            <div className="absolute inset-0 bg-linear-to-br from-[#222222] to-[#111111]" />

            <div className="relative flex flex-col items-center gap-4">
              <div className="rounded-2xl bg-[#CCFF00]/10 p-6">
                <Dumbbell className="h-16 w-16 text-[#CCFF00]" />
              </div>
              <LoaderCircle className="h-7 w-7 animate-spin text-[#CCFF00]" />
              <p className="text-xs font-bold tracking-[0.25em] text-gray-400">
                LOADING WORKOUT
              </p>
            </div>
          </div>

          {/* Right: Details Skeleton */}
          <div className="flex flex-col justify-center">

            <div className="mb-5 h-3 w-32 rounded bg-[#CCFF00]/30" />

            <div className="mb-3 h-9 w-full max-w-md rounded bg-[#292929]" />
            <div className="mb-6 h-9 w-3/4 rounded bg-[#292929]" />

            <div className="mb-3 h-4 w-full rounded bg-[#292929]" />
            <div className="mb-6 h-4 w-5/6 rounded bg-[#292929]" />

            {/* Category Tags */}
            <div className="mb-8 flex gap-3">
              <div className="h-7 w-20 rounded-full bg-[#CCFF00]/20" />
              <div className="h-7 w-20 rounded-full bg-[#292929]" />
            </div>

            {/* Key Specs */}
            <div className="mb-8 rounded-xl border border-[#292929] bg-[#191919] p-5">
              <div className="mb-5 h-4 w-32 rounded bg-[#292929]" />

              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="space-y-2">
                    <div className="h-3 w-20 rounded bg-[#292929]" />
                    <div className="h-5 w-24 max-w-full rounded bg-[#333333]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="h-12 flex-1 rounded-lg bg-[#CCFF00]/30" />
              <div className="h-12 flex-1 rounded-lg border border-[#333333] bg-[#222222]" />
            </div>
          </div>
        </div>

        {/* Instructions Skeleton */}
        <section className="mt-12 border-t border-[#292929] pt-8">
          <div className="mb-6 h-6 w-40 rounded bg-[#292929]" />

          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-xl border border-[#292929] bg-[#191919] p-5"
              >
                <div className="h-10 w-10 shrink-0 rounded-lg bg-[#CCFF00]/20" />
                <div className="flex-1 space-y-3">
                  <div className="h-3 w-1/2 rounded bg-[#292929]" />
                  <div className="h-3 w-full rounded bg-[#292929]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Loading Text */}
        <p className="mt-10 text-center text-xs font-medium tracking-[0.2em] text-gray-500">
          PREPARING YOUR NEXT WORKOUT...
        </p>
      </div>
    </main>
  );
};

export default Loading;