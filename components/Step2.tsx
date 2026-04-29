// @ts-nocheck
"use client"
import { useState } from "react"
import TopBar from "./TopBar"
import ProgressBar from "./ProgressBar"
import Field from "./Field"
import Chip from "./Chip"
import ContinueBtn from "./ContinueBtn"
import ContextBar from "./ContextBar"

const PERFORMER_TYPES = ["Singer", "DJ", "Dancer", "Band", "Host"]
const GENRES = ["Bollywood", "EDM", "Classical", "Punjabi", "Jazz", "Devotional", "Others"]
const DURATIONS = ["1 hour", "2 hours", "3 hours", "4+ hours"]

function toggleItem(list, item) {
  if (list.includes(item)) return list.filter(i => i !== item)
  return [...list, item]
}

export default function Step2({ data, setData, onNext, onBack }) {
  const [errors, setErrors] = useState({})

  function validate() {
    let e = {}

    if (data.performerTypes.length === 0) e.performerTypes = "Select at least one performer type"
    
    if (!data.duration) e.duration = "Select a duration"
    
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <div className="flex flex-col h-full">

      <TopBar onBack={onBack} />
      <ProgressBar step={2} total={4} />

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pt-2 pb-4">

        <ContextBar eventName={data.eventName} hiringFor={data.hiringFor} />

        <Field label="Performer Type">
          
          <p className="text-gray-400 text-xs mb-2">You can select multiple</p>
          
          {errors.performerTypes && <p className="text-[#F4521E] text-xs mb-2">{errors.performerTypes}</p>}
          
          <div className="flex flex-wrap gap-2.5">
            {PERFORMER_TYPES.map(t => (
              
              <Chip
                key={t}
                label={t}
                selected={data.performerTypes.includes(t)}
                onClick={() => setData({ ...data, performerTypes: toggleItem(data.performerTypes, t) })}
              />
            ))}

          </div>
        </Field>

        <Field label="Preferred Genre" optional>
          
          <div className="flex flex-wrap gap-2.5">
            
            {GENRES.map(g => (
              <Chip
                key={g}
                label={g}
                selected={data.genres.includes(g)}
                onClick={() => setData({ ...data, genres: toggleItem(data.genres, g) })}
              />
            ))}
          </div>
        </Field>

        <Field label="Performance Duration">
          
          {errors.duration && <p className="text-[#F4521E] text-xs mb-2">{errors.duration}</p>}
          
          <div className="flex flex-wrap gap-2.5">
            
            {DURATIONS.map(d => (
              <Chip
                key={d}
                label={d}
                selected={data.duration === d}
                onClick={() => setData({ ...data, duration: d })}
              />
            ))}
          </div>
        </Field>

        <Field label="Budget Range">
          
          <p className="text-gray-400 text-xs mb-2">Helps performers send better proposals</p>
          
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Rs. Min budget"
              value={data.minBudget}
              onChange={e => setData({ ...data, minBudget: e.target.value })}
              className="w-full px-3 py-3 rounded-xl text-sm border border-gray-200 outline-none focus:border-[#F4521E]"
            />

            <span className="text-gray-400 text-lg shrink-0">–</span>
            
            <input
              type="number"
              placeholder="Rs. Max budget"
              value={data.maxBudget}
              onChange={e => setData({ ...data, maxBudget: e.target.value })}
              className="w-full px-3 py-3 rounded-xl text-sm border border-gray-200 outline-none focus:border-[#F4521E]"
            />
          </div>
        </Field>

      </div>

      {/* Continue Button*/}
      <ContinueBtn onClick={() => { if (validate()) onNext() }} />

    </div>
  )
}
