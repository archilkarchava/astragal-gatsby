const formatPrice = (price: number): string => {
  return `${price
    .toFixed(2)
    .replace(/\.00$/, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`
}

export default formatPrice
