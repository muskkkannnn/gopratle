// @ts-nocheck
export default function TextInput({ placeholder, value, onChange, type = "text", error = "" }) {
  
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors
          ${error ? "border-[#F4521E]" : "border-gray-200 focus:border-[#F4521E]"}`}
      />
      
      {error && <p className="text-[#F4521E] text-xs mt-1">{error}</p>}
    </>
  )
}
