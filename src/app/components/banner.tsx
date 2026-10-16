

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-[#0C0D10] px-4 py-5 sm:px-6 lg:px-7">
      <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-center justify-between gap-8 overflow-hidden rounded-2xl border border-[#292B32] bg-[#15161B] px-6 py-10 sm:px-10 md:flex-row md:px-12 md:py-14 lg:px-14 lg:py-16">

        {/* Left Content */}
        <div className="w-full md:w-[58%]">
          <p className="mb-6 text-[11px] font-bold tracking-[1.5px] text-[#CCFF00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-[650px] font-[family-name:var(--font-oswald)] text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[64px]">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-[510px] text-sm leading-6 text-[#A1A1AA] sm:text-base sm:leading-7">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-7 inline-flex min-h-10 items-center justify-center rounded-md bg-[#CCFF00] px-6 py-3 text-xs font-extrabold text-black transition hover:bg-[#B8E600] focus:outline-none focus:ring-2 focus:ring-[#CCFF00] focus:ring-offset-2 focus:ring-offset-[#15161B]"
          >
            BROWSE WORKOUTS
            <span className="ml-2 text-base" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {/* Right Workout Image */}
        <div className="relative flex w-full items-center justify-center md:w-[42%]">
          <div className="relative h-[230px] w-full max-w-[330px] sm:h-[280px] md:h-[300px] lg:h-[340px]">
            <Image
              src="\banner.png"
              alt="img"
              fill
              priority
              sizes="(max-width: 639px) 85vw, (max-width: 1023px) 70vw, 42vw"
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;