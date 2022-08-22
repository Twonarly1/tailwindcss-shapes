import { MenuIcon } from "@heroicons/react/outline"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Copy from "../components/Copy"

// todo: componentize each shape. Add parameters if needed.

const Home: NextPage = () => {
    const pentagon: any = (
        <code className="code">
            &lt;div className="w-[100px]"&gt; &lt;div className="relative border-b-[50px]
            border-l-[50px] border-l-transparent border-r-[50px]
            border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;div className="rotate-180 pr-[50px]
            border-b-[50px] border-l-[25px] border-l-transparent border-r-[25px] border-b-gray-200
            border-transparent"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
        </code>
    )
    const equilateralTriangle: any = (
        <code className="code">
            &lt;div className="w-0 h-0 border-b-[86.6px] border-l-[50px] border-l-transparent
            border-r-[50px] border-r-transparent"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const rightAngleTriangle: any = (
        <code className="code">
            &lt;div className="relative bg-transparent w-0 h- border-b-[50px] border-l-[50px]
            border-l-transparent"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const circle: any = (
        <code className="code">
            &lt;div className="h-[100px] w-[100px] rounded-full bg-gray-200"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const quarterCircle: any = (
        <code className="code">
            &lt;div className="bg-gray-200 relative w-[100px] h-[100px] border-r-[50px]
            border-b-[100px] border-r-violet-200 rounded-full"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const halfCircle: any = (
        <code className="code">
            &lt;div className="bg-gray-200 border-r-[50px] border-r-violet-200 relative w-[100px]
            h-[100px] rounded-full"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const pacMan: any = (
        <code className="code">
            &lt;div className="bg-gray-200 relative w-[100px] h-[100px] border-r-[50px]
            border-t-[50px] border-b-[50px] border-r-violet-200 rounded-full"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const hexagon: any = (
        <code className="code">
            &lt;div className="flex"&gt; &lt;div&gt; &lt;div className="w-[100px] h-[50px]
            relative"&gt; &lt;div className="absolute top-[25px] border-l-[50px] border-r-[50px]
            border-b-[25px]"&gt;&lt;&#x002F;div&gt; &lt;div className="bottom-[25px] border-l-[50px]
            border-r-[50px] border-b-[25px] border-l-transparent
            border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt; &lt;div
            className="w-[100px] rotate-180 h-[50px] relative"&gt; &lt;div className="absolute
            top-[25px] border-l-[50px] border-r-[50px] border-b-[25px]"&gt;&lt;&#x002F;div&gt;
            &lt;div className="bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px]
            border-l-transparent border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
            &lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
        </code>
    )
    const square: any = (
        <code className="code">
            &lt;div className="h-[100px] w-[100px] bg-gray-200"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const trapezoid: any = (
        <code className="code">
            &lt;div className="w-[100px] pr-[50px] border-b-[50px] border-l-[50px]
            border-l-transparent border-r-[50px] border-b-gray-200
            border-transparent"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const diamond: any = (
        <code className="code">
            &lt;div className="flex"&gt; &lt;div className="-rotate-90 w-0 h-0 border-b-[50px]
            border-l-[25px] border-l-transparent border-r-[25px]
            border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;div className="rotate-90 w-0 h-0
            border-b-[50px] border-l-[25px] border-l-transparent border-r-[25px]
            border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
        </code>
    )
    const heart: any = (
        <code className="code">
            &lt;div className="relative mt-4 ml-4 -rotate-45 w-[50px] h-[50px] bg-gray-200"&gt;
            &lt;div className="absolute w-[50px] rounded-full h-[50px] bg-gray-200
            ml-[25px]"&gt;&lt;&#x002F;div&gt; &lt;div className="absolute w-[50px] rounded-full
            h-[50px] bg-gray-200 -mt-[25px]"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
        </code>
    )
    const moon: any = (
        <code className="code">
            &lt;div className="w-[80px] h-[80px] rounded-full -rotate-12 border-l-[15px]
            border-l-gray-200"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const cone: any = (
        <code className="code">
            &lt;div className="w-0 h-0 border-l-[70px] border-t-[100px] rounded-t-full
            border-t-gray-200 border-l-transparent border-r-[70px]
            border-r-transparent"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const octagon: any = (
        <code className="code">
            &lt;div className="w-[150px]"&gt; &lt;div className="border-b-[50px] border-l-[50px]
            border-l-transparent border-r-[50px] border-b-gray-200
            border-transparent"&gt;&lt;&#x002F;div&gt; &lt;div className="bg-gray-200
            h-[50px]"&gt;&lt;&#x002F;div&gt; &lt;div className="rotate-180 border-b-[50px]
            border-l-[50px] border-l-transparent border-r-[50px] border-b-gray-200
            border-transparent"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
        </code>
    )
    const cutDiamond: any = (
        <code className="code">
            &lt;div&gt; &lt;div className="w-[10px] pr-[50px] border-b-[50px] border-l-[50px]
            border-l-transparent border-r-[50px] border-b-gray-200
            border-transparent"&gt;&lt;&#x002F;div&gt; &lt;div className="w-0 h-0 rotate-180
            border-b-[75px] border-l-[75px] border-l-transparent border-r-[75px]
            border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
        </code>
    )
    const parallelogram: any = (
        <code className="code">
            &lt;div className="w-[150px] h-[100px] bg-gray-200 skew-x-12"&gt;&lt;&#x002F;div&gt;
        </code>
    )
    const star: any = (
        <code className="code">
            &lt;div className="flex"&gt; &lt;div className="w-0 relative h-0 border-b-[100px]
            border-l-[50px] border-l-transparent border-r-[50px]
            border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;div className="-ml-[100px] mt-[30px]
            relative w-0 h-0 border-t-[100px] border-l-[50px] border-l-transparent border-r-[50px]
            border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt;{" "}
        </code>
    )

    return (
        <div className="mx-auto grid w-full grid-cols-1 justify-items-center gap-y-6 bg-violet-200 px-6 py-12">
            <Head>
                <title>Tailwind css shapes</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="Designing shapes with tailwind css." />
                <meta name="viewport" content="width=device-width" />
                <link rel="icon" href="/two.png" />
            </Head>
            <Link href="/">
                <header className="absolute top-0 left-0 w-0 border-t-[50px] border-r-[50px] border-r-transparent bg-transparent hover:cursor-pointer ">
                    <MenuIcon className=" relative -top-[50px] left-1 inline-flex h-6 w-6 -rotate-45" />
                </header>
            </Link>
            <h1 className="text-center text-4xl font-bold">Tailwind css shapes</h1>

            {/* pentagon */}
            <p className="heading">Pentagon</p>
            <div className="w-[100px]">
                <div className="relative border-b-[50px] border-l-[50px] border-r-[50px] border-l-transparent border-r-transparent"></div>
                <div className="rotate-180 border-b-[50px] border-l-[25px] border-r-[25px] border-transparent border-l-transparent border-b-gray-200 pr-[50px]"></div>
            </div>
            <div className="flex">
                {pentagon} <Copy toCopy={pentagon.props.children} />
            </div>

            {/* equilateral triangle */}
            <p className="heading">equilateral triangle</p>
            <div className="h-0 w-0 border-b-[86.6px] border-l-[50px] border-r-[50px] border-l-transparent border-r-transparent"></div>
            <div className="flex">
                {equilateralTriangle} <Copy toCopy={equilateralTriangle.props.children} />
            </div>

            {/* right angle triangle */}
            <p className="heading">right angle triangle</p>
            <div className="h- relative w-0 border-b-[50px] border-l-[50px] border-l-transparent bg-transparent"></div>
            <div className="flex">
                {rightAngleTriangle} <Copy toCopy={rightAngleTriangle.props.children} />
            </div>

            {/* circle */}
            <p className="heading">circle</p>
            <div className="h-[100px] w-[100px] rounded-full bg-gray-200"></div>
            <div className="flex">
                {circle} <Copy toCopy={circle.props.children} />
            </div>

            {/* 1/4 circle */}
            <p className="heading">1/4 circle</p>
            <div className="relative h-[100px] w-[100px] rounded-full border-r-[50px] border-b-[100px] border-r-violet-200 bg-gray-200"></div>
            <div className="flex">
                {quarterCircle} <Copy toCopy={quarterCircle.props.children} />
            </div>

            {/* 1/2 circle */}
            <p className="heading">1/2 circle</p>
            <div className="relative h-[100px] w-[100px] rounded-full border-r-[50px] border-r-violet-200 bg-gray-200"></div>
            <div className="flex">
                {halfCircle} <Copy toCopy={halfCircle.props.children} />
            </div>

            {/* 3/4 circle */}
            <p className="heading">3/4 circle (Pac-Man)</p>
            <div className="relative h-[100px] w-[100px] rounded-full border-r-[50px] border-t-[50px] border-b-[50px] border-r-violet-200 bg-gray-200"></div>
            <div className="flex">
                {pacMan} <Copy toCopy={pacMan.props.children} />
            </div>

            {/* hexagon */}
            <p className="heading">Hexagon</p>
            <div className="w-[100px]">
                <div className="relative h-[50px]">
                    <div className="absolute top-[25px] w-[100px] border-l-[50px] border-r-[50px] border-b-[25px]"></div>
                    <div className="bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent border-r-transparent"></div>
                </div>
                <div className="relative h-[50px] rotate-180">
                    <div className="absolute top-[25px] border-l-[50px] border-r-[50px] border-b-[25px]"></div>
                    <div className="bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent border-r-transparent"></div>
                </div>
            </div>

            <div className="flex">
                {hexagon} <Copy toCopy={hexagon.props.children} />
            </div>

            {/* square */}
            <p className="heading">square</p>
            <div className="h-[100px] w-[100px] bg-gray-200"></div>

            <div className="flex">
                {square} <Copy toCopy={square.props.children} />
            </div>

            {/* trapezoid */}
            <p className="heading">trapezoid</p>
            <div className=" border-b-[50px] border-l-[50px] border-r-[50px] border-transparent border-l-transparent border-b-gray-200 pr-[50px]"></div>

            <div className="flex">
                {trapezoid} <Copy toCopy={trapezoid.props.children} />
            </div>

            {/* diamond */}
            <p className="heading">diamond</p>
            <div className="flex">
                <div className="h-0 w-0 -rotate-90 border-b-[50px] border-l-[25px] border-r-[25px] border-l-transparent border-r-transparent"></div>
                <div className="h-0 w-0 rotate-90 border-b-[50px] border-l-[25px] border-r-[25px] border-l-transparent border-r-transparent"></div>
            </div>
            <div className="flex">
                {diamond} <Copy toCopy={diamond.props.children} />
            </div>

            {/* heart */}
            <p className="heading">heart</p>
            <div className="relative mt-4 ml-4 h-[50px]  w-[50px] -rotate-45 bg-gray-200">
                <div className="absolute ml-[25px] h-[50px] w-[50px] rounded-full bg-gray-200"></div>
                <div className="absolute -mt-[25px] h-[50px] w-[50px] rounded-full bg-gray-200"></div>
            </div>
            <div className="flex">
                {heart} <Copy toCopy={heart.props.children} />
            </div>

            {/* moon */}
            <p className="heading">Moon</p>
            <div className="h-[80px] w-[80px] -rotate-12 rounded-full border-l-[15px] border-l-gray-200"></div>
            <div className="flex">
                {moon} <Copy toCopy={moon.props.children} />
            </div>

            {/* cone */}
            <p className="heading">Cone</p>
            <div className="h-0 w-0 rounded-t-full border-l-[70px] border-t-[100px] border-r-[70px]  border-t-gray-200 border-l-transparent border-r-transparent"></div>
            <div className="flex">
                {cone} <Copy toCopy={cone.props.children} />
            </div>

            {/* octagon */}
            <p className="heading">Octagon</p>
            <div className="w-[150px]">
                <div className="border-b-[50px]  border-l-[50px]  border-r-[50px] border-transparent border-l-transparent border-b-gray-200"></div>
                <div className="h-[50px] bg-gray-200"></div>
                <div className="rotate-180  border-b-[50px]  border-l-[50px] border-r-[50px] border-transparent border-l-transparent border-b-gray-200"></div>
            </div>
            <div className="flex">
                {octagon} <Copy toCopy={octagon.props.children} />
            </div>

            {/* diamond */}
            <p className="heading">Diamond</p>
            <div>
                <div className="w-[10px] border-b-[50px]  border-l-[50px] border-r-[50px] border-transparent border-l-transparent border-b-gray-200 pr-[50px]"></div>
                <div className="h-0 w-0 rotate-180 border-b-[75px] border-l-[75px] border-r-[75px] border-l-transparent border-r-transparent"></div>
            </div>
            <div className="flex">
                {cutDiamond} <Copy toCopy={cutDiamond.props.children} />
            </div>

            {/* parallelogram */}
            <p className="heading">Parallelogram</p>
            <div className="h-[100px] w-[150px] skew-x-12 bg-gray-200"></div>
            <div className="flex">
                {parallelogram} <Copy toCopy={parallelogram.props.children} />
            </div>
            {/* star */}
            <p className="heading">Star (6-point)</p>

            <div className="flex">
                <div className="relative h-0 w-0 border-b-[100px] border-l-[50px] border-r-[50px] border-l-transparent border-r-transparent"></div>
                <div className="relative -ml-[100px] mt-[30px]  h-0 w-0 border-t-[100px] border-l-[50px] border-r-[50px] border-l-transparent border-r-transparent"></div>
            </div>
            <div className="flex">
                {star} <Copy toCopy={star.props.children} />
            </div>

            {/* FOOTER */}
            <footer className="mt-32 text-center text-black">
                Made by{" "}
                <a className="underline" href="https://github.com/Twonarly1/tailwindcss-shapes">
                    Twonarly
                </a>
                <div className="text-[10px]"> not associated with tailwind labs.</div>
            </footer>
        </div>
    )
}

export default Home
