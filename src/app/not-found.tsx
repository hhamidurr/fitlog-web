import Link from "next/link";
import { Dumbbell, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-[#111111] px-4 py-16 text-center text-white">
      {/* Logo */}
      <Link href="/" className="mb-10 flex items-center gap-3">
        <div className="rounded-xl bg-[#CCFF00] p-3">
          <Dumbbell className="h-7 w-7 text-black" />
        </div>
        <span className="text-2xl font-extrabold tracking-wider">
          FIT<span className="text-[#CCFF00]">LOG</span>
        </span>
      </Link>

      {/* 404 Illustration */}
      <div className="relative mb-6">
        <div className="text-8xl font-black tracking-tighter text-[#CCFF00] sm:text-9xl">
          404
        </div>
        <SearchX className="absolute -right-5 -top-4 h-10 w-10 rotate-12 text-white sm:-right-8 sm:h-12 sm:w-12" />
      </div>

      {/* Message */}
      <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#CCFF00] sm:text-sm">
        WORKOUT NOT FOUND
      </p>

      <h1 className="max-w-xl text-2xl font-extrabold uppercase sm:text-4xl">
        Looks Like You Took a Wrong Turn
      </h1>

      <p className="mt-4 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
        This page isn&apos;t in our workout library. The page you&apos;re looking for
        may have moved or doesn&apos;t exist. Get back on track and keep training.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#CCFF00] px-6 py-3 font-bold text-black transition hover:bg-[#b8e600]"
        >
          <ArrowLeft size={18} />
          BACK TO HOME
        </Link>

        <Link
          href="/myplan"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#444444] px-6 py-3 font-bold text-white transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
        >
          <Dumbbell size={18} />
          MY PLAN
        </Link>
      </div>

      {/* Footer Text */}
      <div className="mt-16 flex items-center gap-2 text-xs tracking-widest text-gray-600">
        <Dumbbell size={15} />
        TRAIN WITH INTENT. LOG EVERY SET.
      </div>
    </main>
  );
}