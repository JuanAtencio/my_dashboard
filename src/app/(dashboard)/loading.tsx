import { AppSkeletonCard } from "@/components/AppskeletonCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-6 space-y-6">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-4 w-1/4" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <AppSkeletonCard lines={2} />
        <AppSkeletonCard lines={5} />
        <AppSkeletonCard hasImage={false} lines={4} />
        <AppSkeletonCard lines={2} />
        <AppSkeletonCard lines={3} />
        <AppSkeletonCard hasImage={false} lines={5} />
      </div>
    </div>
  )
}