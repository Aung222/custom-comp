"use client";

import { CircleX } from "lucide-react";
import { useState } from "react"

export function Input({ label, labelPlacement }: { label: string, labelPlacement?: string}) {

    const [value, setValue] = useState("")

    return (
        <>
            {labelPlacement === "outside" && <label htmlFor="" className="block text-sm font-medium text-gray-700">{label}</label>}
            <div className="p-2 w-60 bg-slate-600">
                {labelPlacement === "inside" && <label htmlFor="" className="block text-sm font-medium text-gray-700">{label}</label>}
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <CircleX className="ps-2" onClick={() => setValue("")} />
            </div>
        </>

    )
}