const getDiscountPercentStr = (oldPrice: number, newPrice: number) => {
  return `-${Math.round(((oldPrice - newPrice) / oldPrice) * 100)}%`
}

export default getDiscountPercentStr
