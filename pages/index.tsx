import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tailwind shapes</title>
        <link rel="icon" href="/two.png" />
      </Head>
      <h1 className="text-3xl">Tailwind css shapes</h1>
      <div className="w-full">
        equilateral triangle
        <div className="flex">
          <div className="relative w-0 h-0 border-b-[86.6px] border-b-solid  border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent"></div>
        </div>
        right angle triangle
        <div className="relative bg-white w-0 h-0 border-b-[86.6px] border-b-solid  border-l-[50px] border-l-solid border-l-transparent"></div>
        circle
        <div className="h-20 w-20 rounded-full bg-gray-200"></div>
        1/2 circle
        <div className="bg-gray-200 relative w-20 h-20 rounded-full">
          <div className="absolute h-20 w-10 bg-white"></div>
        </div>
        3/4 circle
        <div className="bg-gray-200 relative w-20 h-20 rounded-full">
          <div className="absolute h-10 w-10 bg-white"></div>
        </div>
        Hexagon
        <div className="flex">
          <div>
            <div className=" w-[100px] h-[50px] bg-white relative">
              <div className="absolute top-[25px]  border-l-[50px] border-r-[50px] border-b-[25px]"></div>
              <div className="absolute bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent border-r-transparent"></div>
            </div>
            <div className="w-[100px] rotate-180 h-[50px] bg-white relative">
              <div className="absolute top-[25px] border-l-[50px] border-r-[50px] border-b-[25px]"></div>
              <div className="absolute bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent border-r-transparent"></div>
            </div>
          </div>
        </div>
        square
        <div className="h-20 w-20 bg-gray-200"></div>
        trapezoid
        <div className=" flex">
          <div className=" absolute pr-[50px]  border-b-[100px]  border-l-[50px]  border-l-transparent border-r-[50px] border-b-gray-200 border-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
