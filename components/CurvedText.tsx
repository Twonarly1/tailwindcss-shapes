/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react"
import { Tab } from "@headlessui/react"
import Copy from "./Copy"

const CurvedText = () => {
    const ref: any = useRef()

    const HTML: any = (
        <code className="code">
            &lt;div className="flex w-full items-center justify-center"&gt; &lt;div
            className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full
            bg-transparent"&gt;&lt;img alt="" src="&#x002F;two.png" className="absolute h-[150px]
            w-[150px] rounded-full bg-pink-200" &#x002F;&gt;&lt;p className="absolute h-[100%]
            w-[100%] animate-spin-slow uppercase tracking-tighter text-black " ref=&#123;ref&#125;
            &gt; Twonarly - UI&#x002F;UX Designer &lt;&#x002F;p&gt; &lt;&#x002F;div&gt;
            &lt;&#x002F;div&gt;
        </code>
    )

    const JS: any = (
        <code className="code">
            const CurvedText = () =&gt; &#123; const ref: any = useRef() useEffect(() =&gt; &#123;
            let text = ref.current text.innerHTML = text.innerText .split("") .map( (char: string,
            i: number) =&gt; `&lt;span class="absolute left-[50%] text-[20px] "
            style="transform:rotate($&#123;i * 8&#125;deg); transform-origin: 0 100px"
            key=$&#123;i&#125;&gt;$&#123;char&#125;&lt;&#x002F;span&gt;` ) .join("")
            console.log("text:", text) &#125;, [])
        </code>
    )

    const Config: any = (
        <code className="code">
            module.exports = &#123; content: [], theme: &#123; extend: &#123; animation: &#123;
            "spin-slow": "spin 5s linear infinite", &#125;, &#125;, &#125;, plugins: [], &#125;
        </code>
    )

    useEffect(() => {
        let text = ref.current
        text.innerHTML = text.innerText
            .split("")
            .map(
                (char: string, i: number) => `<span
                class="absolute left-[50%] text-[20px] " 
                style="transform:rotate(${i * 8}deg); transform-origin: 0 100px"
            key=${i}>${char}</span>`
            )
            .join("")
        console.log("text:", text)
    }, [])

    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <p className="heading mb-6 text-center">Curved Text</p>
            <div className="flex w-full items-center justify-center">
                <div className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full bg-transparent">
                    <img
                        alt=""
                        src="/two.png"
                        className="absolute h-[150px] w-[150px] rounded-full bg-pink-200"
                    />
                    <p
                        className="absolute h-[100%] w-[100%] animate-spin-slow uppercase tracking-tighter text-black "
                        ref={ref}
                    >
                        Twonarly - UI/UX Designer
                    </p>
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

export default CurvedText
