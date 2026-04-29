// @ts-nocheck
"use client"
import { useState } from "react"
import Step1 from "@/components/Step1"
import Step2 from "@/components/Step2"
import Step3 from "@/components/Step3"
import Step4 from "@/components/Step4"
import SuccessScreen from "@/components/SuccessScreen"

const emptyForm = {
  // Step 1
  eventName: "", eventType: "", eventDate: "",
  area: "", cityState: "", venue: "", hiringFor: "",

  // Step 2
  performerTypes: [], genres: [], duration: "",
  minBudget: "", maxBudget: "",

  // Step 3
  description: "", specificRequirements: [],
  performanceTime: "", referenceFile: "",

  // Step 4
  fullName: "", email: "", phone: "", company: ""
}

export default function App() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  function goNext() { setStep(step + 1) }
  function goBack() { setStep(step - 1) }

  function handleReset() {
    setStep(1)
    setFormData(emptyForm)
    setSubmitted(false)
  }

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-[#e0e0e0]">

      {/* Phone frame*/}
      <div className="relative w-full max-w-[390px] min-h-screen bg-white shadow-2xl flex flex-col sm:rounded-3xl sm:h-[844px] sm:min-h-0">

        {submitted && <SuccessScreen onReset={handleReset} />}

        {!submitted && step === 1 && <Step1 data={formData} setData={setFormData} onNext={goNext} />}

        {!submitted && step === 2 && <Step2 data={formData} setData={setFormData} onNext={goNext} onBack={goBack} />}

        {!submitted && step === 3 && <Step3 data={formData} setData={setFormData} onNext={goNext} onBack={goBack} />}
        
        {!submitted && step === 4 && <Step4 data={formData} setData={setFormData} onSubmit={() => setSubmitted(true)} onBack={goBack} />}

      </div>
    </div>
  )
}
