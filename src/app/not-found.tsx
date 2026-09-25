import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#0b0b0b] px-4">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/5 blur-3xl" />

      <div className="relative w-full max-w-2xl text-center">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-[#ccff00]/20 bg-[#15171c]">
          <Dumbbell
            size={34}
            className="text-[#ccff00]"
          />
        </div>

        {/* 404 */}
        <p className="mt-8 text-[100px] font-black leading-none tracking-tighter text-[#ccff00] sm:text-[140px]">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-2 text-2xl font-black uppercase tracking-tight text-white sm:text-4xl">
          Workout Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500">
          Looks like this workout took a day off. The page you are looking
          for doesn&apos;t exist.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-6 py-3 text-[10px] font-black uppercase text-black transition hover:bg-white"
        >
          <ArrowLeft size={14} />
          Back to Workout Library
        </Link>

        {/* Bottom text */}
        <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-700">
          Train With Intent. Log Every Set.
        </p>
      </div>
    </main>
  );
};

export default NotFound;