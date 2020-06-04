import React from "react"

const BagIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
  return (
    <svg
      width={23}
      height={16}
      viewBox="0 0 27.03 38.05"
      fill="currentColor"
      {...props}
    >
      <desc>Иконка Корзины</desc>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M20.84,10V7.32a7.33,7.33,0,0,0-14.65,0V10H0V30.12c0,4.37,3.27,7.93,7.28,7.93H19.75c4,0,7.28-3.56,7.28-7.93V10ZM8.19,7.32a5.33,5.33,0,0,1,10.65,0V10H8.19Z" />
        </g>
      </g>
    </svg>
  )
}

export default BagIcon
