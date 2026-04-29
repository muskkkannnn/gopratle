// @ts-nocheck
"use client"
import { useState } from "react"
import { IoCloudUploadOutline } from "react-icons/io5"
import TopBar from "./TopBar"
import ProgressBar from "./ProgressBar"
import Field from "./Field"
import Chip from "./Chip"
import ContinueBtn from "./ContinueBtn"
import ContextBar from "./ContextBar"

const SPECIFIC_REQS = ["Own Equipment", "Travel Required", "Indoor Setup", "Outdoor Setup", "Other"]
const TIMES = ["Morning", "Evening", "Night", "Flexible"]

function toggleItem(list, item) {
  if (list.includes(item)) return list.filter(i => i !== item)
  return [...list, item]
}

export default function Step3({ data, setData, onNext, onBack }) {
  const [errors, setErrors] = useState({})

  function validate() {
    let e = {}
    
    if (!data.description) e.description = "Please describe your requirement"
    
    if (!data.performanceTime) e.performanceTime = "Select a preferred time"
    
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <div className="flex flex-col h-full">

      <TopBar onBack={onBack} />
      <ProgressBar step={3} total={4} />

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pt-2 pb-4">

        <ContextBar eventName={data.eventName} hiringFor={data.hiringFor} />

        <Field label="Describe your requirement">
    
          {errors.description && <p className="text-[#F4521E] text-xs mb-1">{errors.description}</p>}
    
          <textarea
            placeholder="e.g. Looking for a DJ for a birthday party with Bollywood and EDM mix..."
            value={data.description}
            onChange={e => setData({ ...data, description: e.target.value })}
            rows={4}
            className={`w-full px-4 py-3 rounded-xl text-sm border outline-none resize-y
              ${errors.description ? "border-[#F4521E]" : "border-gray-200 focus:border-[#F4521E]"}`}
          />
        </Field>

        <Field label="Any specific requirements?" optional>
    
          <div className="flex flex-wrap gap-2.5">
    
            {SPECIFIC_REQS.map(r => (
              <Chip
                key={r}
                label={r}
                selected={data.specificRequirements.includes(r)}
                onClick={() => setData({ ...data, specificRequirements: toggleItem(data.specificRequirements, r) })}
              />
            ))}
          </div>
        </Field>

        <Field label="Preferred performance time">
    
          {errors.performanceTime && <p className="text-[#F4521E] text-xs mb-2">{errors.performanceTime}</p>}
    
          <div className="flex flex-wrap gap-2.5">
            {TIMES.map(t => (
              <Chip
                key={t}
                label={t}
                selected={data.performanceTime === t}
                onClick={() => setData({ ...data, performanceTime: t })}
              />
            ))}
          </div>
        </Field>

        <Field label="Add reference" optional>
    
          <p className="text-gray-400 text-xs mb-2">You can add inspiration or previous references</p>
    
          <label className="inline-flex items-center gap-2 border border-dashed border-gray-300 rounded-xl px-5 py-3 cursor-pointer text-gray-500 text-sm hover:border-[#F4521E] hover:text-[#F4521E]">
            <IoCloudUploadOutline size={18} />
            Upload file
            <input
              type="file"
              accept="image/*,.pdf"
              className="hidden"
              onChange={e => {
                const file = e.target.files[0]
                if (file) setData({ ...data, referenceFile: file.name })
              }}
            />
          </label>
    
          {data.referenceFile && (
            <p className="text-[#27A84A] text-xs mt-1.5">✓ {data.referenceFile}</p>
          )}
        </Field>
      </div>

      {/* Continue Button*/}
      <ContinueBtn onClick={() => { if (validate()) onNext() }} />

    </div>
  )
}
