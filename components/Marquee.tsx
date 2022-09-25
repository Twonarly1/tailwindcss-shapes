import { Tab } from "@headlessui/react"
import React, { useEffect, useRef, useState } from "react"
import Copy from "./Copy"

const Marquee = () => {
    const marqueeRef: any = useRef()
    const [myElementIsVisible, setMyElementIsVisible] = useState<boolean>()
    const [offsetWidth, setOffsetWidth] = useState<number>()
    const [offsetLeft, setOffsetLeft] = useState<number>()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setMyElementIsVisible(entry.isIntersecting)
            setOffsetWidth(entry.boundingClientRect.width)
            setOffsetLeft(entry.boundingClientRect.left)
            console.log(entry)
        })
        observer.observe(marqueeRef.current)
    }, [])

    const HTML: any = (
        <code className="code">
            &lt;div className=" w-full px-12"&gt; &lt;div ref=&#123;marqueeRef&#125;
            className="h-[24px] overflow-hidden bg-gray-200 text-black"&gt; &lt;div className="
            relative float-right animate-marquee running hover:paused"&gt; Marquee built using
            tailwind-animate plugin and intersection observer &lt;&#x002F;div&gt;
            &lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
        </code>
    )

    const JS: any = (
        <code className="code">
            const marqueeRef: any = useRef() const [myElementIsVisible, setMyElementIsVisible] =
            useState&lt;boolean&gt;() const [offsetWidth, setOffsetWidth] = useState&lt;number&gt;()
            const [offsetLeft, setOffsetLeft] = useState&lt;number&gt;() useEffect(() =&gt; &#123;
            const observer = new IntersectionObserver((entries) =&gt; &#123; const entry =
            entries[0] setMyElementIsVisible(entry.isIntersecting)
            setOffsetWidth(entry.boundingClientRect.width)
            setOffsetLeft(entry.boundingClientRect.left) console.log(entry) &#125;)
            observer.observe(marqueeRef.current) &#125;, []))
        </code>
    )

    const Config: any = (
        <code className="code">
            module.exports = &#123; content: [], theme: &#123; extend: &#123; animation: &#123;
            "spin-slow": "spin 5s linear infinite", marquee: "marquee 18s linear infinite", &#125;,
            keyframes: &#123; marquee: &#123; "0%": &#123; transform: "translate3d(60rem, 0, 0)",
            &#125;, "100%": &#123; transform: "translate3d(-100vw, 0, 0)", &#125;, &#125;, &#125;,
            &#125;, &#125;, plugins: [require("tailwindcss-animate")], &#125;
        </code>
    )

    return (
        <div className="-mt-32 flex h-screen flex-col items-center justify-start">
            <p className="heading mb-16 text-center">Marquee</p>
            <div className=" w-full px-12">
                <div ref={marqueeRef} className="h-[24px] overflow-hidden bg-gray-200 text-black">
                    <div className=" relative float-right animate-marquee running hover:paused">
                        Marquee built using tailwind-animate plugin and intersection observer
                    </div>
                </div>
            </div>
            <Tab.Group as="div" className="pt-12 ">
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
                        <div className="mt-6 flex">
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

export default Marquee
