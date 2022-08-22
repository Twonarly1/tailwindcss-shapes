import React from "react"
import Copy from "./Copy"

const CoinFlip = () => {
    const coinflip: any = (
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
    return (
        <div className="mx-auto justify-center">
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
            <div className="mt-6 flex">
                {coinflip} <Copy toCopy={coinflip.props.children} />
            </div>
        </div>
    )
}

export default CoinFlip
