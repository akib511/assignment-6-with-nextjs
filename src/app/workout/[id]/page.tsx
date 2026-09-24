import Image from "next/image";
import { Clock3, Flame, Star, Dumbbell, Bookmark } from "lucide-react";
import PlanActions from "@/component/workout/PlanActions";

interface DetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  const workout = await res.json();

  return (
    <main className="min-h-screen bg-[#0b0c0f] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#101216] lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[350px] overflow-hidden sm:min-h-[500px] lg:min-h-[650px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <h1 className="text-3xl font-black uppercase leading-none text-white sm:text-4xl">
              {workout.name}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400">
              {workout.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((group: string) => (
                <span
                  key={group}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase text-black"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#151820]">
              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Dumbbell size={14} className="text-gray-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Equipment
                  </span>
                </div>

                <span className="text-xs text-white">{workout.equipment}</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Difficulty
                </span>

                <span className="text-xs text-white">{workout.difficulty}</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Sets
                </span>

                <span className="text-xs text-white">{workout.sets}</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Reps
                </span>

                <span className="text-xs text-white">{workout.reps}</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Clock3 size={14} className="text-gray-500" />

                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Duration
                  </span>
                </div>

                <span className="text-xs text-white">
                  {workout.duration} min
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Flame size={14} className="text-gray-500" />

                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Calories
                  </span>
                </div>

                <span className="text-xs text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                  <Star size={14} className="text-[#ccff00]" />

                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Rating
                  </span>
                </div>

                <span className="text-xs text-white">{workout.rating}</span>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-black uppercase tracking-wide text-white">
                Instructions
              </h2>

              <div className="mt-3 space-y-3">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <div
                      key={index}
                      className="flex gap-3 text-xs leading-5 text-gray-400"
                    >
                      <span className="text-gray-500">{index + 1}.</span>

                      <p>{instruction}</p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <PlanActions workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
