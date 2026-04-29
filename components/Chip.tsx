// @ts-nocheck
export default function Chip({ label, selected, onClick }) {
  return (
    
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer border border-solid transition-all
        ${selected
          ? "bg-[#F4521E] border-[#F4521E] text-white"
          : "bg-white border-gray-300 text-gray-700 hover:border-[#F4521E] hover:text-[#F4521E]"
        }`}
    >
      {label}
    </button>
  )
}
