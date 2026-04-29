// @ts-nocheck
import { IoCheckmarkCircle, IoArrowBack } from "react-icons/io5"

export default function SuccessScreen({ onReset }) {
  
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center px-10 py-16">

      {/* logo */}
      <div className="mb-14">
        <div className="w-24 h-24 bg-[#F4521E] rounded-2xl flex items-center justify-center text-white font-extrabold text-5xl mx-auto mb-3">
          G
        </div>
        <p className="text-2xl font-bold text-gray-900">GoPratle</p>
      </div>

      {/* Success msg */}
      <div className="mb-14 text-left w-full max-w-xs">

        <div className="flex items-center gap-3 mb-4">
          <IoCheckmarkCircle size={24} className="text-[#F4521E] shrink-0" />
          <p className="text-lg font-semibold text-gray-900 m-0">Your Event Created</p>
        </div>

        <div className="flex items-center gap-3">
          <IoCheckmarkCircle size={24} className="text-[#F4521E] shrink-0" />
          <p className="text-lg font-semibold text-gray-900 m-0">Requirements Submitted</p>
        </div>

      </div>

      {/* Back to home */}
      <button
        onClick={onReset}
        className="flex items-center gap-2 bg-transparent border-none text-[#F4521E] text-base font-semibold cursor-pointer"
      >
        <IoArrowBack size={18} />
        Back to Home
      </button>

    </div>
  )
}
