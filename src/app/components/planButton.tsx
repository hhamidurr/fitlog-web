
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Clock3, Flame, Star, Check, X } from "lucide-react";
import { WorkoutType } from "../../type";

type PlanWorkoutCardProps = {
  items: WorkoutType[];
  onRemove: (id: string | number) => void;
};

const PlanWorkoutCard = ({items, onRemove}: PlanWorkoutCardProps) => {

  const [completedIds, setCompletedIds] = useState<
    (string | number)[]
  >([]);

  const handleComplete = (id: string | number) => {
    setCompletedIds((previous) =>
      previous.includes(id)
        ? previous.filter((completedId) => completedId !== id)
        : [...previous, id]
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item: WorkoutType) => {
        const isCompleted = completedIds.includes(item.id);

        return (
          <article
            key={item.id}
            className={`flex w-full flex-col gap-4 rounded-2xl border bg-[#15161B] p-4 transition-colors sm:p-5 lg:flex-row lg:items-center ${
              isCompleted
                ? "border-[#CCFF00]/40"
                : "border-[#292B32] hover:border-[#3A3D47]"
            }`}
          >
            {/* Workout Image */}
            <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl bg-[#20222A] sm:h-28 sm:w-40 lg:h-20.5 lg:w-37">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 639px) 100vw, 160px"
                className="object-cover"
              />
            </div>

            {/* Workout Information */}
            <div className="min-w-0 flex-1">
              <h3 className="font-(family-name:--font-oswald text-lg font-bold uppercase tracking-wide text-white">
                {item.name}
              </h3>

              <p className="mt-0.5 text-xs text-[#9CA3AF]">
                {item.equipment}
              </p>

              {/* Workout Stats */}
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#B0B4BE]">
                <span className="flex items-center gap-1.5">
                  <Clock3 size={14} className="text-[#CCFF00]" />
                  {item.duration} min
                </span>

                <span className="flex items-center gap-1.5">
                  <Flame
                    size={14}
                    className="fill-[#CCFF00] text-[#CCFF00]"
                  />
                  {item.caloriesBurned} kcal
                </span>

                <span className="flex items-center gap-1.5">
                  <Star size={14} className="text-[#CCFF00]" />
                  {item.rating.toFixed(1)}
                </span>
              </div>

              {isCompleted && (
                <p className="mt-2 text-xs font-semibold text-[#CCFF00]">
                  Workout completed
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex shrink-0 flex-wrap items-center gap-2 lg:justify-end">
              <Link
                href={`/workouts/${item.id}`}
                className="inline-flex min-h-9 items-center justify-center rounded-full border border-[#353945] px-4 py-2 text-xs font-medium text-white transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
              >
                View Details
              </Link>

              <button
                type="button"
                onClick={() => handleComplete(item.id)}
                aria-pressed={isCompleted}
                className={`inline-flex min-h-9 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition ${
                  isCompleted
                    ? "border border-[#CCFF00] bg-transparent text-[#CCFF00]"
                    : "bg-[#CCFF00] text-black hover:bg-[#B8E600]"
                }`}
              >
                <Check size={15} />
                {isCompleted ? "Completed" : "Mark as Done"}
              </button>

              <button
              onClick={() => onRemove(item.id)}
                type="button"
                title="Remove workout"
                aria-label={`Remove ${item.name}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#777D8B] transition hover:bg-[#272932] hover:text-white"
              >
                <X size={17} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default PlanWorkoutCard;