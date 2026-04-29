// @ts-nocheck
"use client"
import { useState } from "react"
import TopBar from "./TopBar"
import ProgressBar from "./ProgressBar"
import Field from "./Field"
import TextInput from "./TextInput"
import Chip from "./Chip"
import ContinueBtn from "./ContinueBtn"

const EVENT_TYPES = ["Birthday Party", "Wedding", "Corporate", "Concert", "Festival", "Other"]
const HIRING_OPTIONS = ["Event Planner", "Crew", "Performer"]

export default function Step1({ data, setData, onNext }) {
  const [errors, setErrors] = useState({})

  function validate() {
    let e = {}
    
    if (!data.eventName) e.eventName = "Event name is required"
    
    if (!data.eventType) e.eventType = "Select an event type"
    
    if (!data.eventDate) e.eventDate = "Select a date"
    
    if (!data.area) e.area = "Area is required"
    
    if (!data.cityState) e.cityState = "City / State is required"
    
    if (!data.hiringFor) e.hiringFor = "Select what you are hiring for"
    
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <div className="flex flex-col h-full">

      <TopBar onBack={null} />
      <ProgressBar step={1} total={4} />

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pt-2 pb-4">

        <Field label="Event Name">
          <TextInput
            placeholder="Eg: Riya's Birthday Party"
            value={data.eventName}
            onChange={e => setData({ ...data, eventName: e.target.value })}
            error={errors.eventName}
          />
        </Field>

        {/* Event Type and Date */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          
          <div>
            <select
              value={data.eventType}
              onChange={e => setData({ ...data, eventType: e.target.value })}
              className={`w-full px-3 py-3 rounded-xl text-sm font-semibold bg-white border outline-none cursor-pointer
                ${errors.eventType ? "border-[#F4521E]" : "border-gray-200 focus:border-[#F4521E]"}`}
            >
              <option value="">Event Type ›</option>
              {EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
            
            {errors.eventType && <p className="text-[#F4521E] text-xs mt-1">{errors.eventType}</p>}
          </div>

          <div>
            <input
              type="date"
              value={data.eventDate}
              onChange={e => setData({ ...data, eventDate: e.target.value })}
              className={`w-full px-3 py-3 rounded-xl text-sm font-semibold bg-white border outline-none
                ${errors.eventDate ? "border-[#F4521E]" : "border-gray-200 focus:border-[#F4521E]"}`}
            />
            
            {errors.eventDate && <p className="text-[#F4521E] text-xs mt-1">{errors.eventDate}</p>}
          
          </div>
        </div>

        <Field label="Location">
          <div className="grid grid-cols-2 gap-2.5 mb-2.5">
            
            <div>
              <input
                placeholder="Area"
                value={data.area}
                onChange={e => setData({ ...data, area: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl text-sm border outline-none
                  ${errors.area ? "border-[#F4521E]" : "border-gray-200 focus:border-[#F4521E]"}`}
              />

              {errors.area && <p className="text-[#F4521E] text-xs mt-1">{errors.area}</p>}
            
            </div>
            
            <div>
              <input
                placeholder="City, State"
                value={data.cityState}
                onChange={e => setData({ ...data, cityState: e.target.value })}
                className={`w-full px-4 py-3 rounded-xl text-sm border outline-none
                  ${errors.cityState ? "border-[#F4521E]" : "border-gray-200 focus:border-[#F4521E]"}`}
              />

              {errors.cityState && <p className="text-[#F4521E] text-xs mt-1">{errors.cityState}</p>}
            
            </div>
          </div>
          
          <input
            placeholder="Venue (Optional)"
            value={data.venue}
            onChange={e => setData({ ...data, venue: e.target.value })}
            className="w-full px-4 py-3 rounded-xl text-sm border border-gray-200 outline-none focus:border-[#F4521E]"
          />

        </Field>

        <Field label="What are you hiring for?">

          {errors.hiringFor && <p className="text-[#F4521E] text-xs mb-2">{errors.hiringFor}</p>}
          
          <div className="flex flex-wrap gap-2.5">
            {HIRING_OPTIONS.map(opt => (
              
              <Chip
                key={opt}
                label={opt}
                selected={data.hiringFor === opt}
                onClick={() => setData({ ...data, hiringFor: opt })}
              />

            ))}
          </div>
          
        </Field>

      </div>

      {/* Continue Button*/}
      <ContinueBtn onClick={() => { if (validate()) onNext() }} />

    </div>
  )
}
