"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Menu, X } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

import logo from "@/assets/logo.png";
import { useFitLog } from "@/context/FitLogContext";
import Skeleton from "@/component/ui/Skeleton";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { plan, saved } = useFitLog();

  const mounted = useMounted();

  const [menuOpen, setMenuOpen] = useState(false);

  const isWorkoutActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey)
      return;

    setMenuOpen(false);

    if (pathname === href) return;
    event.preventDefault();
    startTransition(() => {
      router.push(href);
    });
  };

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-6 w-24" />
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Skeleton className="h-9 w-24 rounded-full" />
            <Skeleton className="h-9 w-24 rounded-full" />
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-2 sm:flex">
              <Skeleton className="h-4 w-10" />
              <Skeleton className="h-7 w-7 rounded-full" />
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-7 w-7 rounded-full" />
            </div>
            <Skeleton className="h-8 w-8 md:hidden" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => handleNavigation(e, "/")}
          className="flex items-center gap-4"
        >
          <Image src={logo} alt="FITLOG Logo" width={30} height={30} />
          <p className="text-2xl font-bold">FITLOG</p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            onClick={(e) => handleNavigation(e, "/")}
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
            onClick={(e) => handleNavigation(e, "/my-plan")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition ${
              isPlanActive
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/my-plan"
            onClick={(e) => handleNavigation(e, "/my-plan")}
            className="hidden items-center gap-2 text-sm font-bold uppercase text-white transition hover:text-[#ccff00] sm:flex"
          >
            <span>Plan</span>
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#ccff00] px-2 text-xs font-black text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan?tab=saved"
            onClick={(e) => handleNavigation(e, "/my-plan?tab=saved")}
            className="hidden items-center gap-2 text-sm font-bold uppercase text-white transition hover:text-[#ccff00] sm:flex"
          >
            <span>Saved</span>
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-white/30 px-2 text-xs font-black text-white">
              {saved.length}
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0b0b0b] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={(e) => handleNavigation(e, "/")}
              className={`rounded-md px-4 py-3 text-sm font-bold uppercase tracking-wide transition ${
                isWorkoutActive
                  ? "bg-[#ccff00] text-black"
                  : "text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              Workout
            </Link>
            <Link
              href="/my-plan"
              onClick={(e) => handleNavigation(e, "/my-plan")}
              className={`rounded-md px-4 py-3 text-sm font-bold uppercase tracking-wide transition ${
                isPlanActive
                  ? "bg-[#ccff00] text-black"
                  : "text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              My Plan
            </Link>

            <div className="mt-2 flex items-center gap-6 border-t border-white/10 pt-3">
              <Link
                href="/my-plan"
                onClick={(e) => handleNavigation(e, "/my-plan")}
                className="flex items-center gap-2 text-sm font-bold uppercase text-white"
              >
                <span>Plan</span>
                <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#ccff00] px-2 text-xs font-black text-black">
                  {plan.length}
                </span>
              </Link>

              <Link
                href="/my-plan?tab=saved"
                onClick={(e) => handleNavigation(e, "/my-plan?tab=saved")}
                className="flex items-center gap-2 text-sm font-bold uppercase text-white"
              >
                <span>Saved</span>
                <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-white/30 px-2 text-xs font-black text-white">
                  {saved.length}
                </span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
