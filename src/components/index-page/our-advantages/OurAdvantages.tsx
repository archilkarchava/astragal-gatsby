import clsx from "clsx"
import React from "react"
import AdvantageItem from "./AdvantageItem"
import ColorPaletteIcon from "./ColorPaletteIcon"
import DesignerIcon from "./DesignerIcon"
import WoodSvg from "./WoodIcon"

const OurAdvantages: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "box-border w-full px-5 py-10 md:py-16 lg:py-20 bg-orange-100 text-black",
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

export default OurAdvantages
