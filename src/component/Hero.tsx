import Image from "next/image";
import Link from "next/link";
import BannarImg from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className=" py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       
        <div className="grid items-center rounded-xl border border-white/10 bg-[#15171c] px-10 py-10 md:grid-cols-2 md:px-12 lg:min-h-81">
          {/* Left Content */}
          <div className="z-10">
            <p className="mb-5 text-[10px] font-bold uppercase  text-[#ccff00]">
              Workout Library
            </p>

            <h1 className=" text-4xl font-black tracking-tight text-white text-[48px] uppercase">
              Train With Intent. Log Every Set.
            </h1>

            <p className="mt-5 text-sm text-gray-400">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/*Button */}
            <Link
              href="#library"
              className="mt-6 inline-flex items-center rounded-md bg-[#ccff00] px-5 py-2.5 text-[10px] font-black uppercase text-black hover:bg-white"
            >
              Browse Workouts
            </Link>
          </div>

          {/*Image */}
          <div className="relative flex h-full items-center justify-center md:justify-end">
            <Image
              src={BannarImg}
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
