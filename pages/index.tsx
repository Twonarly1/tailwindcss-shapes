import type { NextPage } from "next";
import Head from "next/head";
import Copy from "../components/Copy";

const Home: NextPage = () => {
  const equilateralTriangle: any = (
    <code className="code">
      &lt;div className="w-0 h-0 border-b-[86.6px] border-l-[50px]
      border-l-transparent border-r-[50px]
      border-r-transparent"&gt;&lt;&#x002F;div&gt;
    </code>
  );
  const rightAngleTriangle: any = (
    <code className="code">
      &lt;div className="relative bg-transparent w-0 h- border-b-[50px]
      border-l-[50px] border-l-transparent"&gt;&lt;&#x002F;div&gt;
    </code>
  );
  const circle: any = (
    <code className="code">
      &lt;div className="h-[100px] w-[100px] rounded-full
      bg-gray-200"&gt;&lt;&#x002F;div&gt;
    </code>
  );
  const quarterCircle: any = (
    <code className="code">
      &lt;div className="bg-gray-200 relative w-[100px] h-[100px]
      border-r-[50px] border-b-[100px] border-r-violet-200
      rounded-full"&gt;&lt;&#x002F;div&gt;
    </code>
  );
  const halfCircle: any = (
    <code className="code">
      &lt;div className="bg-gray-200 border-r-[50px] border-r-violet-200
      relative w-[100px] h-[100px] rounded-full"&gt;&lt;&#x002F;div&gt;
    </code>
  );
  const pacMan: any = (
    <code className="code">
      &lt;div className="bg-gray-200 relative w-[100px] h-[100px]
      border-r-[50px] border-t-[50px] border-b-[50px] border-r-violet-200
      rounded-full"&gt;&lt;&#x002F;div&gt;
    </code>
  );
  const hexagon: any = (
    <code className="code">
      &lt;div className="flex"&gt; &lt;div&gt; &lt;div className="w-[100px]
      h-[50px] relative"&gt; &lt;div className="absolute top-[25px]
      border-l-[50px] border-r-[50px] border-b-[25px]"&gt;&lt;&#x002F;div&gt;
      &lt;div className="bottom-[25px] border-l-[50px] border-r-[50px]
      border-b-[25px] border-l-transparent
      border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt; &lt;div
      className="w-[100px] rotate-180 h-[50px] relative"&gt; &lt;div
      className="absolute top-[25px] border-l-[50px] border-r-[50px]
      border-b-[25px]"&gt;&lt;&#x002F;div&gt; &lt;div className="bottom-[25px]
      border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent
      border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
      &lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
    </code>
  );
  const square: any = (
    <code className="code">
      &lt;div className="h-[100px] w-[100px] bg-gray-200"&gt;&lt;&#x002F;div&gt;
    </code>
  );
  const trapezoid: any = (
    <code className="code">
      &lt;div className="w-[100px] pr-[50px] border-b-[50px] border-l-[50px]
      border-l-transparent border-r-[50px] border-b-gray-200
      border-transparent"&gt;&lt;&#x002F;div&gt;
    </code>
  );
  const diamond: any = (
    <code className="code">
      &lt;div className="flex"&gt; &lt;div className="-rotate-90 w-0 h-0
      border-b-[50px] border-l-[25px] border-l-transparent border-r-[25px]
      border-r-transparent"&gt;&lt;&#x002F;div&gt; &lt;div className="rotate-90
      w-0 h-0 border-b-[50px] border-l-[25px] border-l-transparent
      border-r-[25px] border-r-transparent"&gt;&lt;&#x002F;div&gt;
      &lt;&#x002F;div&gt;
    </code>
  );
  const heart: any = (
    <code className="code">
      &lt;div className="relative mt-4 ml-4 -rotate-45 w-[50px] h-[50px]
      bg-gray-200"&gt; &lt;div className="absolute w-[50px] rounded-full
      h-[50px] bg-gray-200 ml-[25px]"&gt;&lt;&#x002F;div&gt; &lt;div
      className="absolute w-[50px] rounded-full h-[50px] bg-gray-200
      -mt-[25px]"&gt;&lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
    </code>
  );
  const moon: any = (
    <code className="code">
      &lt;div className="w-[80px] h-[80px] rounded-full -rotate-12
      border-l-[15px] border-l-gray-200"&gt;&lt;&#x002F;div&gt;
    </code>
  );
  const cone: any = (
    <code className="code">
      &lt;div className="w-0 h-0 border-l-[70px] border-t-[100px] rounded-t-full
      border-t-gray-200 border-l-transparent border-r-[70px]
      border-r-transparent"&gt;&lt;&#x002F;div&gt;
    </code>
  );
  const octagon: any = (
    <code className="code">
      &lt;div className="w-[150px]"&gt; &lt;div className="border-b-[50px]
      border-l-[50px] border-l-transparent border-r-[50px] border-b-gray-200
      border-transparent"&gt;&lt;&#x002F;div&gt; &lt;div className="w-[150px]
      bg-gray-200 h-[50px]"&gt;&lt;&#x002F;div&gt; &lt;div className="rotate-180
      border-b-[50px] border-l-[50px] border-l-transparent border-r-[50px]
      border-b-gray-200 border-transparent"&gt;&lt;&#x002F;div&gt;
      &lt;&#x002F;div&gt;
    </code>
  );
  const cutDiamond: any = (
    <code className="code">
      &lt;div&gt; &lt;div className="w-[10px] pr-[50px] border-b-[50px]
      border-l-[50px] border-l-transparent border-r-[50px] border-b-gray-200
      border-transparent"&gt;&lt;&#x002F;div&gt; &lt;div className="w-0 h-0
      rotate-180 border-b-[75px] border-l-[75px] border-l-transparent
      border-r-[75px] border-r-transparent"&gt;&lt;&#x002F;div&gt;
      &lt;&#x002F;div&gt;
    </code>
  );

  return (
    <div className="mx-auto w-full px-6 py-12 grid grid-cols-1 justify-items-center gap-y-6 bg-violet-200">
      <Head>
        <title>Tailwind shapes</title>
        <link rel="icon" href="/two.png" />
      </Head>
      <h1 className="text-4xl font-bold text-center">Tailwind css shapes</h1>

      {/* equilateral triangle */}
      <p className="heading">equilateral triangle</p>
      <div className="w-0 h-0 border-b-[86.6px] border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent"></div>
      <div className="flex">
        {equilateralTriangle}{" "}
        <Copy toCopy={equilateralTriangle.props.children} />
      </div>

      {/* right angle triangle */}
      <p className="heading">right angle triangle</p>
      <div className="relative bg-transparent w-0 h- border-b-[50px] border-l-[50px] border-l-transparent"></div>
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
      <div className="bg-gray-200 relative w-[100px] h-[100px] border-r-[50px] border-b-[100px] border-r-violet-200 rounded-full"></div>
      <div className="flex">
        {quarterCircle} <Copy toCopy={quarterCircle.props.children} />
      </div>

      {/* 1/2 circle */}
      <p className="heading">1/2 circle</p>
      <div className="bg-gray-200 border-r-[50px] border-r-violet-200 relative w-[100px] h-[100px] rounded-full"></div>
      <div className="flex">
        {halfCircle} <Copy toCopy={halfCircle.props.children} />
      </div>

      {/* 3/4 circle */}
      <p className="heading">3/4 circle (Pac-Man)</p>
      <div className="bg-gray-200 relative w-[100px] h-[100px] border-r-[50px] border-t-[50px] border-b-[50px] border-r-violet-200 rounded-full"></div>
      <div className="flex">
        {pacMan} <Copy toCopy={pacMan.props.children} />
      </div>

      {/* hexagon */}
      <p className="heading">Hexagon</p>
      <div className="flex">
        <div>
          <div className="w-[100px] h-[50px] relative">
            <div className="absolute top-[25px] border-l-[50px] border-r-[50px] border-b-[25px]"></div>
            <div className="bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent border-r-transparent"></div>
          </div>
          <div className="w-[100px] rotate-180 h-[50px] relative">
            <div className="absolute top-[25px] border-l-[50px] border-r-[50px] border-b-[25px]"></div>
            <div className="bottom-[25px] border-l-[50px] border-r-[50px] border-b-[25px] border-l-transparent border-r-transparent"></div>
          </div>
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
      <div className="w-[100px] pr-[50px] border-b-[50px] border-l-[50px] border-l-transparent border-r-[50px] border-b-gray-200 border-transparent"></div>

      <div className="flex">
        {trapezoid} <Copy toCopy={trapezoid.props.children} />
      </div>

      {/* diamond */}
      <p className="heading">diamond</p>
      <div className="flex">
        <div className="-rotate-90 w-0 h-0 border-b-[50px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent"></div>
        <div className="rotate-90 w-0 h-0 border-b-[50px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent"></div>
      </div>
      <div className="flex">
        {diamond} <Copy toCopy={diamond.props.children} />
      </div>

      {/* heart */}
      <p className="heading">heart</p>
      <div className="relative mt-4 ml-4 -rotate-45  w-[50px] h-[50px] bg-gray-200">
        <div className="absolute w-[50px] rounded-full h-[50px] bg-gray-200 ml-[25px]"></div>
        <div className="absolute w-[50px] rounded-full h-[50px] bg-gray-200 -mt-[25px]"></div>
      </div>
      <div className="flex">
        {heart} <Copy toCopy={heart.props.children} />
      </div>

      {/* moon */}
      <p className="heading">Moon</p>
      <div className="w-[80px] h-[80px] rounded-full -rotate-12 border-l-[15px] border-l-gray-200"></div>
      <div className="flex">
        {moon} <Copy toCopy={moon.props.children} />
      </div>

      {/* cone */}
      <p className="heading">Cone</p>
      <div className="w-0 h-0 border-l-[70px] border-t-[100px] rounded-t-full border-t-gray-200  border-l-transparent border-r-[70px] border-r-transparent"></div>
      <div className="flex">
        {cone} <Copy toCopy={cone.props.children} />
      </div>

      {/* octagon */}
      <p className="heading">Octagon</p>
      <div className="w-[150px]">
        <div className="border-b-[50px]  border-l-[50px]  border-l-transparent border-r-[50px] border-b-gray-200 border-transparent"></div>
        <div className="w-[150px] bg-gray-200 h-[50px]"></div>
        <div className="rotate-180  border-b-[50px]  border-l-[50px] border-l-transparent border-r-[50px] border-b-gray-200 border-transparent"></div>
      </div>
      <div className="flex">
        {octagon} <Copy toCopy={octagon.props.children} />
      </div>

      {/* diamond */}
      <p className="heading">Diamond</p>
      <div>
        <div className="w-[10px] pr-[50px]  border-b-[50px] border-l-[50px] border-l-transparent border-r-[50px] border-b-gray-200 border-transparent"></div>
        <div className="w-0 h-0 rotate-180 border-b-[75px] border-l-[75px] border-l-transparent border-r-[75px] border-r-transparent"></div>
      </div>
      <div className="flex">
        {cutDiamond} <Copy toCopy={cutDiamond.props.children} />
      </div>
    </div>
  );
};

export default Home;
