// @ts-nocheck
export default function Field({ label, optional, children }) {
  
  return (
    <div className="mb-5">
      
      {label && (
        <p className="font-bold text-base mb-2">
          {label}{" "}
          {optional && <span className="font-normal text-gray-400 text-sm">(Optional)</span>}
        </p>
      )}
      
      {children}
    </div>
  )
}
