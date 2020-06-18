import React from "react"

const AdvantageItem: React.FC<{
  title: string
  icon: React.ComponentType
}> = ({ children, title, icon: Icon }) => {
  return (
    <div
      data-sal="fade"
      data-sal-delay="200"
      data-sal-easing="ease"
      className="content-center w-full px-4 mb-6 md:w-1/3 md:m-0 min-w-58"
    >
      <div className="w-20 mx-auto lg:w-24">
        <Icon />
      </div>
      <div className="mt-3 mb-3 text-lg font-semibold text-center lg:text-xl">
        {title}
      </div>
      <div className="text-sm text-center lg:text-base">{children}</div>
    </div>
  )
}

export default AdvantageItem
