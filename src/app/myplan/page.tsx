"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PlanWorkoutCard from "../components/planItemCard";
import { ItemsContext } from "../components/context/appContext";

type PlanTab = "today" | "saved";

const PlanPage = () => {
  const [activeTab, setActiveTab] = useState<PlanTab>("today");
  const [sortToday, setSortToday] = useState("duration");
  const [sortSaved, setSortSaved] = useState("duration");
  const { addToPlan, setAddToPlan, addToSaved, setAddToSaved } =
    useContext(ItemsContext);

  const sortWorkouts = (items: typeof addToPlan, sortBy: string) => {
    return [...items].sort((a, b) => {
      switch (sortBy) {
        case "duration":
          return a.duration - b.duration;

        case "calories":
          return a.caloriesBurned - b.caloriesBurned;

        case "rating":
          return b.rating - a.rating;

        case "name":
          return a.name.localeCompare(b.name);

        default:
          return 0;
      }
    });
  };
  
    const sortedAddToPlan = sortWorkouts(addToPlan, sortToday);
  
    const sortedAddToSaved = sortWorkouts(addToSaved, sortSaved);

  const handleRemove = (id: string | number) => {
    if (activeTab === "today") {
      setAddToPlan((previous) =>
        previous.filter((item) => String(item.id) !== String(id)),
      );
    } else {
      setAddToSaved((previous) =>
        previous.filter((item) => String(item.id) !== String(id)),
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#0C0D10] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-360">
        {/* Header */}
        <header>
          <h1 className="font-(family-name:--font-oswald) text-3xl font-bold uppercase tracking-wide sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-1 text-sm text-[#9CA3AF] sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>

        {/* plan Summary Cards */}
        {activeTab === "today" && (
          <section
            aria-label="Workout summary"
            className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#292B32] bg-[#13151C] sm:grid-cols-3"
          >
            {/* Exercises */}
            <div className="border-b border-[#252833] px-6 py-5 sm:border-b-0 sm:border-r sm:py-7">
              <p className="text-sm text-[#9CA3AF]">Exercises</p>

              <p className="mt-1 text-4xl font-bold leading-tight text-[#CCFF00]">
                {addToPlan.length}
              </p>
            </div>

            {/* Minutes */}
            <div className="border-b border-[#252833] px-6 py-5 sm:border-b-0 sm:border-r sm:py-7">
              <p className="text-sm text-[#9CA3AF]">Minutes</p>

              <p className="mt-1 text-4xl font-bold leading-tight text-white">
                {addToPlan.reduce((total, item) => total + item.duration, 0)}
              </p>
            </div>

            {/* Calories */}
            <div className="px-6 py-5 sm:py-7">
              <p className="text-sm text-[#9CA3AF]">Calories</p>

              <p className="mt-1 text-4xl font-bold leading-tight text-white">
                {addToPlan.reduce(
                  (totalCal, item) => totalCal + item.caloriesBurned,
                  0,
                )}
              </p>
            </div>
          </section>
        )}

        {/* plan Summary Cards */}

        {activeTab === "saved" && (
          <section
            aria-label="Workout summary"
            className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#292B32] bg-[#13151C] sm:grid-cols-3"
          >
            {/* Exercises */}
            <div className="border-b border-[#252833] px-6 py-5 sm:border-b-0 sm:border-r sm:py-7">
              <p className="text-sm text-[#9CA3AF]">Exercises</p>

              <p className="mt-1 text-4xl font-bold leading-tight text-[#CCFF00]">
                {addToSaved.length}
              </p>
            </div>

            {/* Minutes */}
            <div className="border-b border-[#252833] px-6 py-5 sm:border-b-0 sm:border-r sm:py-7">
              <p className="text-sm text-[#9CA3AF]">Minutes</p>

              <p className="mt-1 text-4xl font-bold leading-tight text-white">
                {addToSaved.reduce((total, item) => total + item.duration, 0)}
              </p>
            </div>

            {/* Calories */}
            <div className="px-6 py-5 sm:py-7">
              <p className="text-sm text-[#9CA3AF]">Calories</p>

              <p className="mt-1 text-4xl font-bold leading-tight text-white">
                {addToSaved.reduce(
                  (totalCal, item) => totalCal + item.caloriesBurned,
                  0,
                )}
              </p>
            </div>
          </section>
        )}

        {/* Tabs and Sorting */}
        <section className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Workout lists"
            className="flex w-fit rounded-xl border border-[#292B32] bg-[#15161B] p-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "today"}
              onClick={() => setActiveTab("today")}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition sm:px-5 ${
                activeTab === "today"
                  ? "bg-[#222630] text-white shadow-sm"
                  : "text-[#858B99] hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "saved"}
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-4 py-2 text-xs font-semibold transition sm:px-5 ${
                activeTab === "saved"
                  ? "bg-[#222630] text-white shadow-sm"
                  : "text-[#858B99] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="sort-workouts"
              className="text-xs text-[#858B99] sm:text-sm"
            >
              Sort By
            </label>

            <div className="relative">
              <select
                className="bg-[#15161B]"
                id="sort-workouts"
                value={activeTab === "today" ? sortToday : sortSaved}
                onChange={(event) => {
                  const value = event.target.value;

                  if (activeTab === "today") {
                    setSortToday(value);
                  } else {
                    setSortSaved(value);
                  }
                }}
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </section>

        {/*Plan Empty State */}

        {activeTab === "today" &&
          (addToPlan.length === 0 ? (
            <section className="mt-6 flex min-h-75 flex-col items-center justify-center rounded-2xl border border-dashed border-[#292B32] px-5 py-12 text-center sm:min-h-75.5">
              <h2 className="font-(family-name:--font-oswald text-xl font-bold uppercase tracking-wide sm:text-2xl">
                Nothing Here Yet
              </h2>
              <p className="mt-1 max-w-md text-sm leading-6 text-[#9CA3AF]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/#library"
                className="mt-6 inline-flex min-h-10 items-center justify-center rounded-full bg-[#CCFF00] px-6 py-3 text-xs font-bold text-black transition hover:bg-[#B8E600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0D10]"
              >
                Go to workouts
              </Link>
            </section>
          ) : (
            <div className=" grid grid-cols-1 gap-4 my-4 py-6">
              <PlanWorkoutCard
                items={sortedAddToPlan}
                onRemove={handleRemove}
              />
            </div>
          ))}

        {/*Saved Empty State */}

        {activeTab === "saved" &&
          (addToSaved.length === 0 ? (
            <section className="mt-6 flex min-h-75 flex-col items-center justify-center rounded-2xl border border-dashed border-[#292B32] px-5 py-12 text-center sm:min-h-77.5">
              <h2 className="font-(family-name:--font-oswald text-xl font-bold uppercase tracking-wide sm:text-2xl">
                Nothing Here Yet
              </h2>
              <p className="mt-1 max-w-md text-sm leading-6 text-[#9CA3AF]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/#library"
                className="mt-6 inline-flex min-h-10 items-center justify-center rounded-full bg-[#CCFF00] px-6 py-3 text-xs font-bold text-black transition hover:bg-[#B8E600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0D10]"
              >
                Go to workouts
              </Link>
            </section>
          ) : (
            <div className=" grid grid-cols-1 gap-4 my-4 py-6">
              <PlanWorkoutCard
                items={sortedAddToSaved}
                onRemove={handleRemove}
              />
            </div>
          ))}
      </div>
    </main>
  );
};

export default PlanPage;
