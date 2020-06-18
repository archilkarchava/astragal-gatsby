import React from "react"

const IncreaseIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6407 15.7678C18.0648 15.4139 18.1216 14.7833 17.7677 14.3593L12.7602 8.35925C12.5701 8.13146 12.2886 7.99985 11.9919 8.00001C11.6952 8.00016 11.4139 8.13206 11.224 8.36006L6.23158 14.3547C5.87814 14.7791 5.93566 15.4096 6.36005 15.7631C6.78443 16.1165 7.41498 16.059 7.76841 15.6346L11.9932 10.5616L16.2322 15.6408C16.5861 16.0648 17.2167 16.1216 17.6407 15.7678Z"
      />
    </svg>
  )
}

export default IncreaseIcon
