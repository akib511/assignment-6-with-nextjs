import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/types/workout";
import { Clock, Flame } from "lucide-react";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-white/10 bg-[#15171c] transition hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      {/* Image */}
      <div className="h-56 overflow-hidden bg-[#1c1e24]">
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={350}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group: string) => (
            <span
              key={group}
              className="rounded-full bg bg-[#ccff00] px-2.5 py-1 text-[10px] font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-black uppercase text-white">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">{workout.equipment}</p>

        <div className="mt-5 flex items-center gap-6 border-t border-white/10 pt-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1 text-[#ccff00]">
            <span>★</span>
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
