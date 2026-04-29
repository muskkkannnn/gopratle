// @ts-nocheck
import { IoArrowBack } from "react-icons/io5"
import Logo from "./Logo"

export default function TopBar({ onBack }) {
  
  return (
    <div className="flex justify-between items-center px-5 py-4">
      
      <button
        onClick={onBack}
        className="bg-transparent border-none cursor-pointer text-gray-800 p-1"
      >
        {onBack ? <IoArrowBack size={22} /> : <span className="w-6 block" />}
      </button>

      <Logo />
      
      <div className="w-9 h-9 bg-gray-300 rounded-full" />
    </div>
  )
}
