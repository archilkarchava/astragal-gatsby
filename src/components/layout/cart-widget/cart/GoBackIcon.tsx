import React from "react"

const GoBackIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => (
  <svg
    width={38}
    height={11}
    viewBox="0 0 38 11"
    fill="currentColor"
    {...props}
  >
    <desc>Иконка вернуться назад</desc>
    <path
      fillRule="evenodd"
      d="M5.665 0L1.063 4.469l-.001-.002L0 5.498v.004l1.062 1.031.001-.001L5.665 11 6.73 9.967 2.878 6.229h35.121V4.771H2.878l3.852-3.74z"
    />
  </svg>
)

export default GoBackIcon
