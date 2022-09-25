import { MenuIcon } from "@heroicons/react/outline"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import CoinFlip from "../components/CoinFlip"
import CurvedText from "../components/CurvedText"
import Marquee from "../components/Marquee"
import PageFlip from "../components/PageFlip"

const Components = () => {
    return (
        <div className="mx-auto grid min-h-screen w-full grid-cols-1 justify-items-center gap-y-6 overflow-x-scroll bg-violet-200 px-6 py-12">
            <Head>
                <title>Tailwind css components</title>
                <meta name="description" content="Designing shapes with tailwind css." />
                <link rel="icon" href="/two.png" />
            </Head>
            <Link href="/">
                <header className="absolute top-0 left-0 w-0 border-t-[50px] border-r-[50px] border-r-transparent bg-transparent hover:cursor-pointer ">
                    <MenuIcon className=" relative -top-[50px] left-1 inline-flex h-6 w-6 -rotate-45" />
                </header>
            </Link>
            <h1 className="text-center text-4xl font-bold">Tailwind css components</h1>
            <CoinFlip />
            {/* <PageFlip /> */}
            <CurvedText />
            <Marquee />
        </div>
    )
}

export default Components
