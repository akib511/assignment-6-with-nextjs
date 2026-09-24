"use client";

import { useRouter } from "next/navigation";
import { Bookmark, Dumbbell } from "lucide-react";

import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface PlanActionsProps {
  workout: Workout;
}

const PlanActions = ({ workout }: PlanActionsProps) => {
  const router = useRouter();

  const { plan, addToPlan, saveWorkout } = useFitLog();

  // Add to Today's Plan button
  const handleAddToPlan = () => {
    console.log("Current plan:", plan);
    console.log("Current workout:", workout.id);

    const alreadyAdded = plan.some((item) => item.id === workout.id);

    console.log("Already added:", alreadyAdded);

    if (alreadyAdded) {
      return;
    }

    addToPlan(workout);
    router.push("/my-plan");
  };

  const handleSave = () => {
    saveWorkout(workout);

    router.push("/my-plan?tab=saved");
  };

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {/* Add to Today's Plan */}
      <button
        onClick={handleAddToPlan}
        className="flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-2.5 text-[10px] font-black uppercase text-black transition hover:bg-white"
      >
        <Dumbbell size={13} />
        Add to Today&apos;s Plan
      </button>

      {/* Save for Later */}
      <button
        onClick={handleSave}
        className="flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-[10px] font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
      >
        <Bookmark size={13} />
        Save for Later
      </button>
    </div>
  );
};

export default PlanActions;
