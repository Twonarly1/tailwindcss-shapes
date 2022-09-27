import Link from "next/link"

export default function Home() {
    return (
        <div className="h-screen w-full space-y-12 bg-violet-200 p-12">
            <Link href="/shapes">
                <div className="mx-auto max-w-7xl rounded-3xl py-8 px-4 ring-[8px] ring-gray-200 hover:cursor-pointer hover:bg-gray-200 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl lg:tracking-tight">
                            View Shapes
                        </h2>
                        <p className="mt-5 text-xl text-gray-500">
                            18 beautifully designed shapes using tailwind-css borders.
                        </p>
                    </div>
                </div>
            </Link>
            <Link href="/components">
                <div className="mx-auto  max-w-7xl rounded-3xl py-8 px-4 ring-[8px] ring-gray-200 hover:cursor-pointer hover:bg-gray-200 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl lg:tracking-tight">
                            View Components
                        </h2>
                        <p className="mt-5 text-xl text-gray-500">
                            View a collection of components including a coin-flip animation, curved
                            text, and a responsive marquee.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
