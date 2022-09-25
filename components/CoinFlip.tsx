import { Tab } from "@headlessui/react"
import React from "react"
import Copy from "./Copy"

const CoinFlip = () => {
    const HTML: any = (
        <code className="code">
            &lt;div className="group h-[150px] w-[150px] cursor-pointer rounded-full bg-transparent
            perspective"&gt; &lt;div className="relative h-full w-full rounded-full duration-1000
            preserve-3d group-hover:my-rotate-y-180"&gt; &lt;div className="absolute h-full w-full
            rounded-full backface-hidden"&gt; &lt;img src="&#x002F;two.png" alt="" className="
            h-full w-full rounded-full" &#x002F;&gt; &lt;&#x002F;div&gt; &lt;div className="absolute
            h-full w-full rounded-full my-rotate-y-180 backface-hidden "&gt; &lt;img
            src="&#x002F;tailwindcss-logo.svg" alt="" className=" h-full w-full rounded-full
            bg-gray-200 p-2" &#x002F;&gt; &lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
            &lt;&#x002F;div&gt;
        </code>
    )
    const JS: any = <code className="code">...</code>
    const Config: any = (
        <div className="flex flex-col">
            <code className="code">
                const plugin = require("tailwindcss/plugin") const Myclass = plugin(function (
                &#123;addUtilities&#125;) &#123;addUtilities(&#123; ".my-rotate-y-180": &#123;
                transform: "rotateY(180deg)", &#125;, ".preserve-3d": &#123; transformStyle:
                "preserve-3d", &#125;, ".perspective": &#123; perspective: "1000px", &#125;,
                ".backface-hidden": &#123; backfaceVisibility: "hidden", &#125;, &#125;)&#125; )
            </code>
            <code className="code">
                module.exports = &#123; content: [], theme: &#123; extend: &#123; &#125;, &#125;,
                plugins: [Myclass], &#125;
            </code>
        </div>
    )
    return (
        <div className="mx-auto flex h-screen flex-col items-center justify-center">
            <p className="heading mb-6 text-center">Coin Flip</p>
            <div className="group mx-auto h-[150px] w-[150px] cursor-pointer rounded-full bg-transparent perspective">
                <div className="relative h-full w-full rounded-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                    <div className="absolute h-full w-full rounded-full backface-hidden">
                        <img src="/two.png" alt="" className=" h-full w-full rounded-full" />
                    </div>
                    <div className="absolute h-full w-full rounded-full my-rotate-y-180 backface-hidden ">
                        <img
                            src="/tailwindcss-logo.svg"
                            alt=""
                            className="h-full w-full rounded-full bg-gray-200 p-2 "
                        />
                    </div>
                </div>
            </div>
            <Tab.Group as="div" className="pt-6 ">
                <Tab.List className="flex w-full justify-center space-x-4 p-2">
                    <Tab className="code text-md w-20 py-2">HTML</Tab>
                    <Tab className="code text-md w-20 py-2">JS</Tab>
                    <Tab className="code text-md w-20 py-2">Config</Tab>
                </Tab.List>
                <Tab.Panels className="h-40 w-[700px] px-6">
                    <Tab.Panel>
                        <div className="mt-6 flex">
                            {HTML} <Copy toCopy={HTML.props.children} />
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="mt-6 hidden justify-center">
                            {JS} <Copy toCopy={JS.props.children} />
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="mt-6 flex  justify-center">
                            {Config} <Copy toCopy={Config.props.children} />
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default CoinFlip
