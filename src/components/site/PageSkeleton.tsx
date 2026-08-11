/** Low-contrast layout skeleton shown while a page is loading. */
export function PageSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading page" className="animate-in fade-in duration-300">
      {/* hero block */}
      <div className="border-b border-border bg-sand">
        <div className="container-page py-16 md:py-20">
          <div className="shimmer h-3 w-28 rounded-full" />
          <div className="mt-6 space-y-3">
            <div className="shimmer h-8 w-full max-w-2xl rounded-lg" />
            <div className="shimmer h-8 w-3/4 max-w-xl rounded-lg" />
          </div>
          <div className="mt-6 space-y-2">
            <div className="shimmer h-4 w-full max-w-xl rounded" />
            <div className="shimmer h-4 w-2/3 max-w-md rounded" />
          </div>
        </div>
      </div>

      {/* content blocks */}
      <div className="container-page py-16 md:py-20">
        <div className="shimmer h-3 w-24 rounded-full" />
        <div className="mt-5 shimmer h-7 w-full max-w-lg rounded-lg" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6">
              <div className="shimmer h-10 w-10 rounded-lg" />
              <div className="mt-5 shimmer h-5 w-2/3 rounded" />
              <div className="mt-4 space-y-2">
                <div className="shimmer h-3.5 w-full rounded" />
                <div className="shimmer h-3.5 w-11/12 rounded" />
                <div className="shimmer h-3.5 w-3/4 rounded" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="shimmer aspect-[4/5] rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
