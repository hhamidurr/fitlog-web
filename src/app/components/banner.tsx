
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-[#0C0D10] px-3 py-40 sm:px-5 sm:py-5 lg:px-7 container mx-auto">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center gap-6 overflow-hidden rounded-xl border border-[#292B32] bg-[#15161B] px-5 py-7 sm:rounded-2xl sm:px-8 sm:py-10 md:px-10 md:py-12 lg:flex-row lg:justify-between lg:gap-8 lg:px-12 lg:py-14 xl:px-14 xl:py-16">

        {/* Hero Image - Mobile & Tablet: Top */}
        <div className="flex w-full min-w-0 items-center justify-center lg:order-2 lg:w-[42%]">
          <div className="relative h-50 w-full max-w-70 sm:h-65 sm:max-w-85 md:h-75 md:max-w-95 lg:h-70 lg:max-w-none xl:h-85">
            <Image
              src="/banner.png"
              alt="Athlete performing a gym exercise"
              fill
              priority
              sizes="(max-width: 639px) 85vw, (max-width: 1023px) 70vw, 42vw"
              className="object-contain"
            />
          </div>
        </div>

        {/* Left Content - Mobile & Tablet: Bottom */}
        <div className="w-full min-w-0 lg:order-1 lg:w-[58%]">
          <p className="mb-4 text-[10px] font-bold tracking-[1.5px] text-[#CCFF00] sm:mb-5 sm:text-[11px]">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-(family-name:--font-oswald text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-[64px]">
            Train with intent. Log every set.
          </h1>

          <p className="mt-4 max-w-127.5 text-sm leading-6 text-[#A1A1AA] sm:mt-5 sm:text-base sm:leading-7">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#CCFF00] px-5 py-3 text-xs font-extrabold text-black transition-colors hover:bg-[#B8E600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#15161B] sm:mt-7 sm:px-6"
          >
            BROWSE WORKOUTS
            <span className="text-base" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Banner;