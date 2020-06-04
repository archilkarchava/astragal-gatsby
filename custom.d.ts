declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module "*.css" {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames
  export = classNames
}
