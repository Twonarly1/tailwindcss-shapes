import React from "react"
import Copy from "../components/Copy"

const modifyText = (text: string) => {
    return text
}

const test = () => {
    const circle = "<div className=h-[100px] w-[100px] rounded-full bg-gray-200></div>"

    const check = modifyText(circle)
    console.log(check)
    return (
        <div>
            <div className="flex">
                {circle} <Copy toCopy={circle} />
            </div>
            {circle}
        </div>
    )
}

export default test
