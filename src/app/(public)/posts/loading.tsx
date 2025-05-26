export default function Loading() {
  return (
    <div className="p-20 divide-y divide-slate-300 space-y-10">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="flex-shrink-0 animate-pulse flex pb-10 first:pt-10"
        >
          <div className="rounded-md w-[250px] h-[130px] bg-slate-200" />
          <div className="space-y-2.5 pl-6">
            <div className="h-4 rounded w-[250px] bg-slate-200" />
            <div className="h-5 rounded w-[500px] bg-slate-200" />
            <div className="h-3.5 rounded w-[300px] bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
