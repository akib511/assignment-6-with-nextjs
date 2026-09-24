"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Clock3, Flame, Star, X } from "lucide-react";

import { useFitLog } from "@/context/FitLogContext";
import Image from "next/image";

const MyPlanPage = () => {
  const searchParams = useSearchParams();

  const {
    plan,
    saved,
    completedIds,
    removeFromPlan,
    removeFromSaved,
    toggleCompleted,
  } = useFitLog();

  // Sorting option
  const [sortBy, setSortBy] = useState("duration");

  const activeTab = searchParams.get("tab") === "saved" ? "saved" : "plan";

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  // Sort workouts
  const sortedWorkouts = useMemo(() => {
    const workouts = [...currentWorkouts];

    if (sortBy === "duration") {
      workouts.sort((a, b) => b.duration - a.duration);
    }

    if (sortBy === "calories") {
      workouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    if (sortBy === "rating") {
      workouts.sort((a, b) => b.rating - a.rating);
    }

    return workouts;
  }, [currentWorkouts, sortBy]);

  // Calculate total minutes
  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  // Calculate total calories
  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black uppercase text-white sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {activeTab === "plan"
              ? "Cap of five lifts for today. Finish them, then load more."
              : "Save workouts now and add them to your plan later."}
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-[#15171c] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="p-5">
            <p className="text-[10px] font-medium text-gray-500">Exercises</p>

            <p className="mt-1 text-3xl font-black text-[#ccff00]">
              {currentWorkouts.length}
            </p>
          </div>

          <div className="p-5">
            <p className="text-[10px] font-medium text-gray-500">Minutes</p>

            <p className="mt-1 text-3xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          <div className="p-5">
            <p className="text-[10px] font-medium text-gray-500">Calories</p>

            <p className="mt-1 text-3xl font-black text-white">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Tabs */}
          <div className="flex w-fit rounded-md border border-white/10 bg-[#15171c] p-1">
            <Link
              href="/my-plan"
              className={`rounded px-4 py-2 text-[10px] font-bold uppercase transition ${
                activeTab === "plan"
                  ? "bg-[#ccff00] text-black"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </Link>

            <Link
              href="/my-plan?tab=saved"
              className={`rounded px-4 py-2 text-[10px] font-bold uppercase transition ${
                activeTab === "saved"
                  ? "bg-white/10 text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </Link>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500">Sort By</span>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-md border border-white/10 bg-[#15171c] px-3 py-2 text-[10px] font-bold uppercase text-white outline-none focus:border-[#ccff00]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workout List */}
        {sortedWorkouts.length === 0 ? (
          <div className="mt-5 rounded-xl border border-dashed border-white/10 bg-[#15171c] px-5 py-16 text-center">
            <h2 className="text-lg font-black uppercase text-white">
              {activeTab === "plan"
                ? "Your plan is empty"
                : "No saved workouts"}
            </h2>

            <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-gray-500">
              {activeTab === "plan"
                ? "Browse the workout library and add exercises to today's plan."
                : "Save workouts from the library and they will appear here."}
            </p>

            <Link
              href="/"
              className="mt-5 inline-flex rounded-md bg-[#ccff00] px-5 py-2.5 text-[10px] font-black uppercase text-black transition hover:bg-white"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          <div className="mt-5 space-y-3">
            {sortedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="rounded-xl border border-white/10 bg-[#15171c] p-3 transition hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  {/* Image */}
                  <div className="h-36 overflow-hidden bg-[#1c1e24]">
                    <Image
                      src={workout.image}
                      alt={workout.name}
                      width={500}
                      height={350}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-sm font-black uppercase text-white sm:text-base">
                      {workout.name}
                    </h2>

                    <p className="mt-0.5 text-[10px] text-gray-500">
                      {workout.equipment}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock3 size={11} className="text-[#ccff00]" />
                        {workout.duration} min
                      </span>

                      <span className="flex items-center gap-1">
                        <Flame size={11} className="text-[#ccff00]" />
                        {workout.caloriesBurned} kcal
                      </span>

                      <span className="flex items-center gap-1">
                        <Star size={11} className="text-[#ccff00]" />
                        {workout.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    {/* Mark as Done only for Today's Plan */}
                    {activeTab === "plan" && (
                      <button
                        onClick={() => toggleCompleted(workout.id)}
                        className={`rounded-full px-4 py-2 text-[9px] font-bold uppercase transition ${
                          completedIds.includes(workout.id)
                            ? "bg-[#ccff00] text-black"
                            : "border border-white/15 text-white hover:border-[#ccff00] hover:text-[#ccff00]"
                        }`}
                      >
                        {completedIds.includes(workout.id)
                          ? "Done"
                          : "Mark as Done"}
                      </button>
                    )}

                    <Link
                      href={`/workout/${workout.id}`}
                      className="hidden rounded-full border border-white/15 px-4 py-2 text-[9px] font-bold uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00] sm:block"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={() => handleRemove(workout.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition hover:bg-red-500/10 hover:text-red-500"
                      title="Remove"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>

                {/* Mobile View Details */}
                <div className="mt-3 flex gap-2 sm:hidden">
                  {/* Mark as Done on mobile */}
                  {activeTab === "plan" && (
                    <button
                      onClick={() => toggleCompleted(workout.id)}
                      className={`flex-1 rounded-md py-2 text-[9px] font-bold uppercase transition ${
                        completedIds.includes(workout.id)
                          ? "bg-[#ccff00] text-black"
                          : "border border-white/10 text-gray-400 hover:border-[#ccff00] hover:text-[#ccff00]"
                      }`}
                    >
                      {completedIds.includes(workout.id)
                        ? "Done"
                        : "Mark as Done"}
                    </button>
                  )}

                  <Link
                    href={`/workout/${workout.id}`}
                    className="flex-1 rounded-md border border-white/10 py-2 text-center text-[9px] font-bold uppercase text-gray-400 transition hover:border-[#ccff00] hover:text-[#ccff00]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;
