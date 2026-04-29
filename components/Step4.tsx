// @ts-nocheck
"use client"
import { useState } from "react"
import TopBar from "./TopBar"
import ProgressBar from "./ProgressBar"
import Field from "./Field"
import TextInput from "./TextInput"
import ContinueBtn from "./ContinueBtn"
import ContextBar from "./ContextBar"

export default function Step4({ data, setData, onSubmit, onBack }) {
  const [errors, setErrors] = useState({})

  function validate() {
    let e = {}
    
    if (!data.fullName) e.fullName = "Full name is required"
    
    if (!data.email || !data.email.includes("@")) e.email = "Enter a valid email"
    
    if (!data.phone || data.phone.length < 10) e.phone = "Enter a valid 10-digit number"
    
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <div className="flex flex-col h-full">

      <TopBar onBack={onBack} />
      <ProgressBar step={4} total={4} />

      <div className="flex-1 overflow-y-auto scrollbar-hide px-5 pt-2 pb-4">

        <ContextBar eventName={data.eventName} hiringFor={data.hiringFor} />

        <Field label="Full Name *">
          <TextInput
            placeholder="Enter your name"
            value={data.fullName}
            onChange={e => setData({ ...data, fullName: e.target.value })}
            error={errors.fullName}
          />
        </Field>

        <Field label="Email Address *">
          <TextInput
            type="email"
            placeholder="example@email.com"
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
            error={errors.email}
          />
        </Field>

        <Field label="Phone Number *">         
          <div className="flex gap-2.5">

            <div className="flex items-center justify-center px-3 py-3 border border-gray-200 rounded-xl text-gray-500 font-semibold text-sm shrink-0">
              +91
            </div>

            <div className="flex-1">
              <input
                type="tel"
                placeholder="XXXXX XXXXX"
                value={data.phone}
                onChange={e => setData({ ...data, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                className={`w-full px-4 py-3 rounded-xl text-sm border outline-none
                  ${errors.phone ? "border-[#F4521E]" : "border-gray-200 focus:border-[#F4521E]"}`}
              />
              
              {errors.phone && <p className="text-[#F4521E] text-xs mt-1">{errors.phone}</p>}
            
            </div>
          </div>
        </Field>

        <Field label="Company" optional>
          <TextInput
            placeholder="Enter company name"
            value={data.company}
            onChange={e => setData({ ...data, company: e.target.value })}
          />
        </Field>

      </div>

      {/* Submit Button*/}
      <ContinueBtn
        onClick={() => { if (validate()) onSubmit() }}
        label="Submit ✓"
        green={true}
      />

    </div>
  )
}
