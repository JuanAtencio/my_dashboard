// components/skeletons/AppSkeletonCard.tsx
import { Skeleton } from "@/components/ui/skeleton"

export function AppSkeletonCard({
  lines = 3,
  hasImage = true,
}: {
  lines?: number
  hasImage?: boolean
}) {
  return (
    <div className="bg-primary-foreground p-4 rounded-lg shadow-sm space-y-3">
      {hasImage && <Skeleton className="h-40 w-full rounded-lg" />}
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-[80%]" />
        ))}
      </div>
    </div>
  )
}