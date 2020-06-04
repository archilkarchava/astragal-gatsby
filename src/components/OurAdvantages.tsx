import classNames from "classnames"
import React from "react"
import WoodSvg from "./icons/WoodIcon"

const OurAdvantages: React.FC<JSX.IntrinsicElements["div"]> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        "box-border w-full px-5 py-14 md:py-24 bg-orange-100 text-black",
        className
      )}
      {...rest}
    >
      <h1 className="mb-20 text-3xl font-semibold leading-none text-center md:text-4xl">
        Наши приемущества
      </h1>
      <div className="container relative flex flex-wrap mx-auto my-0">
        <AdvantageItem title="Материалы" icon={WoodSvg}>
          Все наши изделия изготовлены из массива натурального дерева
        </AdvantageItem>
        <AdvantageItem title="Материалы" icon={WoodSvg}>
          Все наши изделия изготовлены из массива натурального дерева
        </AdvantageItem>
        <AdvantageItem title="Бесплатная консультация дизайнера" icon={WoodSvg}>
          В нашей столярной мастерской вы можете получить бесплатную
          консультацию профессионаольного дизайнера интерьеров, который подберет
          подходящую мебель по стилю
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
    <div className="content-center w-full px-2 mb-6 text-center md:w-1/3 md:m-0">
      <div className="w-20 mx-auto md:w-24">
        <Icon />
      </div>
      <div className="mt-3 mb-3 text-2xl font-semibold">{title}</div>
      <div className="text-lg">{children}</div>
    </div>
  )
}

export default OurAdvantages
