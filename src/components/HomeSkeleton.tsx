import { Skeleton } from "./ui/skeleton"

export default function HomeSkeleton() {
    return (
        <div className="bg-[#0D0D0D] min-h-screen">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[1rem] py-16 md:py-32 space-y-16 md:space-y-24">

                {/* Hero Area */}
                <div className="space-y-8">
                    <Skeleton className="h-12 w-48" />
                    <Skeleton className="h-[20vh] w-full max-w-4xl" />
                    <Skeleton className="h-4 w-64 opacity-50" />
                </div>

                {/* Selected Work Section */}
                <div className="space-y-12 pt-20">
                    <div className="flex justify-between items-end border-b border-white/10 pb-8">
                        <Skeleton className="h-10 w-64" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="space-y-[10vh]">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 space-y-8">
                                <Skeleton className="aspect-square md:aspect-[21/9] w-full rounded-2xl" />
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <Skeleton className="h-20 w-full md:max-w-xl" />
                                    <Skeleton className="h-12 w-48 rounded-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Archive Section */}
                <div className="space-y-12">
                    <div className="flex justify-between items-end mb-16">
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <Skeleton key={i} className="h-24 w-full" />
                        ))}
                    </div>
                </div>

                {/* What i offer section */}
                <div className="grid grid-cols-12 gap-12 py-24">
                    <div className="col-span-12 lg:col-span-6 space-y-8">
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-32 w-full max-w-lg" />
                        <Skeleton className="h-24 w-full" />
                        <Skeleton className="h-24 w-full" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
                        <Skeleton className="size-[500px] rounded-full opacity-20" />
                    </div>
                </div>

            </div>
        </div>
    )
}
