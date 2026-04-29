// @ts-nocheck
export default function ProgressBar({ step, total }) {
  return (
    <div className="px-5 pb-3">

      <div className="flex gap-1.5 mb-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1 rounded-full ${i < step ? "bg-[#F4521E]" : "bg-gray-200"}`}
          />
        ))}
      </div>

      <p className="text-center text-gray-400 text-xs m-0">
        Step {step} of {total}
      </p>

    </div>
  )
}
