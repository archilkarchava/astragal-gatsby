import React from "react"

const DecreaseIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
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
        d="M17.6407 8.23225C18.0648 8.58613 18.1216 9.21674 17.7677 9.64075L12.7602 15.6407C12.5701 15.8685 12.2886 16.0001 11.9919 16C11.6952 15.9998 11.4139 15.8679 11.224 15.6399L6.23158 9.64529C5.87814 9.2209 5.93566 8.59035 6.36005 8.23692C6.78443 7.88349 7.41498 7.941 7.76841 8.36539L11.9932 13.4384L16.2322 8.35924C16.5861 7.93522 17.2167 7.87837 17.6407 8.23225Z"
      />
    </svg>
  )
}

export default DecreaseIcon
