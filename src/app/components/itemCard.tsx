import React from "react";
import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import Link from "next/link";

type Workout = {
  id: string | number;
  image: string;
  name: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

const WorkoutCard = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/fitlog"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: Workout[] = await res.json();

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {data.map((item) => (
        <Link
          key={item.id}
          href={`/workouts/${item.id}`}
          className="block h-full"
        >
          <article className="group h-full overflow-hidden rounded-2xl border border-[#292B32] bg-[#15161B] text-white transition duration-300 hover:border-[#CCFF00]/50">
            {/* Workout Image */}
            <div className="relative h-47.5 w-full overflow-hidden sm:h-50">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1279px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {item.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#CCFF00] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <h2 className="font-(family-name:--font-oswald text-xl font-bold uppercase leading-tight tracking-wide">
                {item.name}
              </h2>

              <p className="mt-1.5 text-xs text-[#9CA3AF]">
                {item.equipment}
              </p>

              <div className="my-4 border-t border-[#292B32]" />

              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-[#9CA3AF]">
                <span className="flex items-center gap-1.5">
                  <Clock3 size={15} />
                  {item.duration} min
                </span>

                <span className="flex items-center gap-1.5">
                  <Flame size={15} fill="currentColor" />
                  {item.caloriesBurned} kcal
                </span>

                <span className="flex items-center gap-1.5">
                  <Star size={15} />
                  {Number(item.rating).toFixed(1)}
                </span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default WorkoutCard;