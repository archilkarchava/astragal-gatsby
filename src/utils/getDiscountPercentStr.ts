const getDiscountPercentStr = (oldPrice: number, newPrice: number): string => {
  return `-${Math.round(((oldPrice - newPrice) / oldPrice) * 100)}%`
}

export default getDiscountPercentStr
