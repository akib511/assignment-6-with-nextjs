"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();

  // Get plan and saved data from FitLog context
  const { plan, saved } = useFitLog();

  // Check which page is currently active
  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={logo}
            alt="FITLOG Logo"
            width={40}
            height={40}
          />

          <p className="text-2xl font-bold">FITLOG</p>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition ${
              isWorkoutActive
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition ${
              isPlanActive
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Plan & Saved Counters */}
        <div className="flex items-center gap-5">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-bold uppercase text-white transition hover:text-[#ccff00]"
          >
            <span>Plan</span>

            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#ccff00] px-2 text-xs font-black text-black">
              {plan.length}
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-bold uppercase text-white transition hover:text-[#ccff00]"
          >
            <span>Saved</span>

            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-white/30 px-2 text-xs font-black text-white">
              {saved.length}
            </span>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;