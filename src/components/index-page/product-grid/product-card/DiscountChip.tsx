import React from "react"

const DiscountChip: React.FC = ({ children }) => {
  return (
    <div className="absolute left-0 px-1 py-0.5 text-xs font-bold text-red-700 bg-white top-4 pointer-events-none">
      {children}
    </div>
  )
}

export default DiscountChip
