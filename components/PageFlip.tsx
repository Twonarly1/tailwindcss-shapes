import { Tab } from "@headlessui/react"
import React, { useState } from "react"
import Copy from "./Copy"

//my-rotate-y-180

const pages: any = [
    { id: 0, firstPage: "cover", secondPage: "homepage", current: true },
    { id: 2, firstPage: "page1", secondPage: "page2", current: false },
    { id: 4, firstPage: "page3", secondPage: "page4", current: false },
]

const PageFlip = () => {
    let [page, setPage] = useState<number>(0)

    const HTML: any = (
        <code className="code">
            &lt;div className="mx-auto h-80 w-80 justify-center text-center text-black
            perspective"&gt; &lt;div className="grid h-80 grid-cols-2"&gt; &lt;div onClick=&#123;()
            =&gt; setPage(page - 2)&#125; className="bg-gray-200"&gt; &#123;page &gt;= 0 &#38;&#38;
            page - 1&#125; &lt;div&gt;&#123;pages[page]?.firstPage&#125;&lt;&#x002F;div&gt;
            &lt;&#x002F;div&gt; &lt;div onClick=&#123;() =&gt; setPage(page + 2)&#125;
            className="bg-black"&gt; &lt;p className="text-gray-200"&gt;&#123;page &gt;= 0
            &#38;&#38; page&#125;&lt;&#x002F;p&gt; &lt;p
            className="text-gray-200"&gt;&#123;pages[page]?.secondPage&#125;&lt;&#x002F;p&gt;
            &lt;&#x002F;div&gt; &lt;&#x002F;div&gt; &lt;&#x002F;div&gt;
        </code>
    )

    const JS: any = (
        <code className="code">
            const pages: any = [ &#123; id: 0, firstPage: "cover", secondPage: "homepage", current:
            true &#125;, &#123; id: 2, firstPage: "page1", secondPage: "page2", current: false
            &#125;, &#123; id: 4, firstPage: "page3", secondPage: "page4", current: false &#125;,
            let [page, setPage] = useState&lt;number&gt;(0) ]
        </code>
    )

    const Config: any = (
        <div className="flex flex-col">
            <code className="code">
                const plugin = require("tailwindcss/plugin") const Myclass = plugin(function (
                &#123;addUtilities&#123;)&#123;" "&#123; &#123;addUtilities(&#123; ".perspective":
                &#123; perspective: "1000px", &#123;, &#123;)&#123;)
            </code>
            <code className="code">
                module.exports = &#123; content: [], theme: &#123; extend: &#123; &#125;, &#125;,
                plugins: [Myclass], &#125;
            </code>
        </div>
    )

    return (
        <div className="z-50 h-full  ">
            <p className="heading mb-6 text-center">
                Page Flip <small>(not animated)</small>
            </p>

            <div className=" mx-auto h-80 w-80 justify-center text-center text-black perspective">
                <div className="grid h-80 grid-cols-2">
                    <div onClick={() => setPage(page - 2)} className="bg-gray-200">
                        {page >= 0 && page - 1}
                        <div>{pages[page]?.firstPage}</div>
                    </div>

                    <div onClick={() => setPage(page + 2)} className="bg-black">
                        <p className="text-gray-200">{page >= 0 && page}</p>
                        <p className="text-gray-200">{pages[page]?.secondPage}</p>
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

export default PageFlip
