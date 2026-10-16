import React, { Suspense } from "react";
import WorkoutCard from "../components/itemCard";


const WorkoutPage = () => {
  return (
    <main className="min-h-screen container bg-[#0C0D10] mx-auto text-white">
      <section
        id="library"
        className="mx-auto  w-full max-w-360 py-8 sm:px-6 "
      >
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="font-(family-name:--font-oswald) text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl">
            The Library
          </h2>

          <p className="mt-1 text-sm text-[#9CA3AF] sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <div className="">
          <Suspense fallback="Data is loading....">
            <WorkoutCard/>
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default WorkoutPage;
