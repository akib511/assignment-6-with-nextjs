import Skeleton from "@/component/ui/Skeleton";

export default function Loading() {
  return (
    <main>
      {/* Hero skeleton */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center rounded-xl border border-white/10 bg-[#15171c] px-10 py-10 md:grid-cols-2 md:px-12 lg:min-h-81">
            <div className="space-y-4">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="mt-4 h-10 w-40 rounded-md" />
            </div>
            <div className="flex justify-center md:justify-end">
              <Skeleton className="h-100 w-100 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Workout Library skeleton */}
      <section>
        <div className="mx-auto max-w-7xl px-8 pt-12">
          <div className="pb-10">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="mt-3 h-4 w-80" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#15171c]"
              >
                <Skeleton className="h-56 w-full rounded-none" />
                <div className="space-y-3 p-5">
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="flex gap-4 border-t border-white/10 pt-4">
                    <Skeleton className="h-3 w-12" />
                    <Skeleton className="h-3 w-12" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}