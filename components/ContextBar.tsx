// @ts-nocheck
export default function ContextBar({ eventName, hiringFor }) {
  
  return (
    
    <div className="mb-5">
      <p className="text-sm text-gray-700 mb-1">
        Event: <span className="text-[#F4521E] font-bold">{eventName}</span>
      </p>

      <p className="text-sm text-gray-700 mb-0">
        Hiring for:{" "}
        <span className="bg-[#fff0eb] text-[#F4521E] border border-[#F4521E] rounded-full px-3 py-0.5 text-xs font-semibold">
          {hiringFor}
        </span>
      </p>
      
    </div>
  )
}
