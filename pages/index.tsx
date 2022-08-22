import Link from "next/link"

export default function Home() {
    return (
        <div className="h-screen space-y-12 bg-violet-200 p-12">
            <Link href="/shapes">
                <div className="mx-auto max-w-7xl rounded-3xl py-8 px-4 ring-[8px] ring-gray-200 hover:cursor-pointer hover:bg-gray-200 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl lg:tracking-tight">
                            View Shapes
                        </h2>
                        <p className="mt-5 text-xl text-gray-500">
                            Start building for free, then add a site plan to go live. Account plans
                            unlock additional features.
                        </p>
                    </div>
                </div>
            </Link>
            <Link href="/components">
                <div className="mx-auto  max-w-7xl rounded-3xl py-8 px-4 ring-[8px] ring-gray-200 hover:cursor-pointer hover:bg-gray-200 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl lg:tracking-tight">
                            View Components
                        </h2>
                        <p className="mt-5 text-xl text-gray-500">
                            Start building for free, then add a site plan to go live. Account plans
                            unlock additional features.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
