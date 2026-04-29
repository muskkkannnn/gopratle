// @ts-nocheck
import { IoArrowForward, IoCheckmark } from "react-icons/io5"

export default function ContinueBtn({ onClick, label = "Continue", green = false }) {
  
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white px-5 pt-3 pb-8 border-t border-gray-100">
      
      <button
        onClick={onClick}
        className={`w-full py-4 rounded-2xl text-white text-base font-semibold cursor-pointer border-none flex items-center justify-center gap-2
          ${green ? "bg-[#27A84A]" : "bg-[#F4521E]"}`}
      >
        {label}
        {green ? <IoCheckmark size={20} /> : <IoArrowForward size={18} />}
      </button>

    </div>
  )
}
