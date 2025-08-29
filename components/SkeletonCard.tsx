export default function SkeletonCard(){
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl3 bg-neutral-200 dark:bg-neutral-800">
      <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,.4)_45%,rgba(255,255,255,0)_60%)] bg-[length:200%_100%]" />
    </div>
  );
}
