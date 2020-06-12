import classNames from "classnames"
import React from "react"
import ColorPaletteIcon from "./icons/ColorPaletteIcon"
import DesignerIcon from "./icons/DesignerIcon"
import WoodSvg from "./icons/WoodIcon"

const OurAdvantages: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        "box-border w-full px-5 py-10 md:py-20 lg:py-24 bg-orange-100 text-black",
        className
      )}
      {...rest}
    >
      <h1
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
        className="mb-20 text-3xl font-semibold leading-none text-center lg:text-4xl"
      >
        Наши преимущества
      </h1>
      <div className="container relative flex flex-col justify-center px-10 mx-auto my-0 md:flex-row">
        <AdvantageItem title="Материалы" icon={WoodSvg}>
          Все наши изделия изготовлены из массива натурального дерева
        </AdvantageItem>
        <AdvantageItem title="Уникальный дизайн" icon={DesignerIcon}>
          Наш дизайнер создаст уникальный макет изделия, учитывая ваши пожелания
        </AdvantageItem>
        <AdvantageItem title="Подберём цвет" icon={ColorPaletteIcon}>
          Подбёрем и покрасим в цвет, который подойдет к вашему интерьеру
        </AdvantageItem>
      </div>
    </div>
  )
}

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

export default OurAdvantages
