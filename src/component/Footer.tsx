import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="pt-18">
      <div className="border-t border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="FITLOG Logo" width={24} height={24} />

            <span className="text-xs font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>

          <p className="text-[10px] text-gray-500 sm:text-xs">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
