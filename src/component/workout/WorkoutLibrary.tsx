import WorkoutCard from "./WorkoutCard";
import { Workout } from "@/types/workout";

const WorkoutLibrary = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const workouts = await res.json();
  console.log(workouts);

  return (
    <section>
      <div className="pt-12 mx-auto max-w-7xl px-8">
        <div className="pb-10">
          <h2 className="font-bold text-3xl">THE LIBRARY</h2>
          <p className="text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* card */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout: Workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutLibrary;
