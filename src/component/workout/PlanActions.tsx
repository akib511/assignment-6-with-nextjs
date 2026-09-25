"use client";

import { useRouter } from "next/navigation";
import { Bookmark, Dumbbell } from "lucide-react";
import { toast } from "react-toastify";

import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface PlanActionsProps {
  workout: Workout;
}

const PlanActions = ({ workout }: PlanActionsProps) => {
  const router = useRouter();

  const { plan, saved, addToPlan, saveWorkout } = useFitLog();

  // Add workout to Today's Plan
  const handleAddToPlan = () => {
    const alreadyAdded = plan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      toast.warning("Already added to today's plan");
      return;
    }

    addToPlan(workout);

    toast.success("Added to today's plan");

    router.push("/my-plan");
  };

  // Save workout for later
  const handleSave = () => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.warning("Already saved");
      return;
    }

    saveWorkout(workout);

    toast.success("Saved for later");

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
