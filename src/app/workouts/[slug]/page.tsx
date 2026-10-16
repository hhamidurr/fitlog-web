import { Suspense, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  ChevronLeft,
} from "lucide-react";
import { notFound } from "next/navigation";
import { WorkoutType } from "../../../type";
import PlanButton from "../../components/planButton";
import SavedButton from "../../components/savedButton";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getData(slug: string): Promise<WorkoutType> {
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch workout details");
  }

  return res.json();
}


async function WorkoutDetails({ params }: Props) {
  const { slug } = await params;
  const workout = await getData(slug);

  return (
    <main className="min-h-screen bg-[#0C0D10] px-4 py-6 text-white sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-360">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-[#9CA3AF] transition hover:text-[#CCFF00]"
        >
          <ChevronLeft size={18} />
          Back to library
        </Link>

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-[#292B32] bg-[#15161B] sm:aspect-5/4 lg:sticky lg:top-24 lg:aspect-4/5">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <h1 className="font-(family-name:--font-oswald text-3xl font-bold uppercase leading-tight tracking-wide sm:text-4xl lg:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#9CA3AF] sm:text-base sm:leading-7">
              {workout.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-[#CCFF00] px-4 py-1.5 text-xs font-semibold text-black"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="mt-7 overflow-hidden rounded-2xl border border-[#292B32] bg-[#171921]">
              {[
                ["Equipment", workout.equipment],
                ["Difficulty", workout.difficulty],
                ["Sets", String(workout.sets)],
                ["Reps", workout.reps],
                ["Duration", `${workout.duration} min`],
                ["Calories", `${workout.caloriesBurned} kcal`],
                ["Rating", Number(workout.rating).toFixed(1)],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex min-h-12.5 items-center justify-between gap-4 border-b border-[#252833] px-4 py-3 last:border-b-0 sm:px-6"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wide text-[#9CA3AF] sm:text-xs">
                    {label}
                  </span>
                  <span className="text-right text-sm text-[#E5E7EB]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <section className="mt-8">
              <h2 className="text-base font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={`${index}-${instruction}`}
                    className="flex items-start gap-3 text-sm leading-6 text-[#C4C7CF]"
                  >
                    <span className="shrink-0 text-[#9CA3AF]">
                      {index + 1}.
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </section>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {/* my plan button */}

              <PlanButton item={workout}/>

              {/* saved button */}

              <SavedButton item={workout}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function DynamicPage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#0C0D10] p-8 text-[#CCFF00]">
          Loading workout details...
        </main>
      }
    >
      <WorkoutDetails params={params} />
    </Suspense>
  );
}