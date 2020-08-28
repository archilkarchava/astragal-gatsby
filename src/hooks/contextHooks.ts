import React from "react"
import { StoreContext } from "../contexts/siteContext"
import type { Store } from "../contexts/siteContext"
import useProducts from "./useProducts"

export const useStore = (): [
  Store,
  React.Dispatch<React.SetStateAction<Store>>
] => {
  const { store, setStore } = React.useContext(StoreContext)
  return [store, setStore]
}

export const useShowMap = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const {
    store: { isShowMap },
    setStore,
  } = React.useContext(StoreContext)

  const setIsShowMap = (isShow: boolean): void => {
    return setStore((prev) => ({ ...prev, isShowMap: isShow }))
  }

  return [isShowMap, setIsShowMap]
}

export const useCartToggle = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const {
    store: { isCartOpen },
    setStore,
  } = React.useContext(StoreContext)

  const setIsCartOpen = (isOpen: boolean): void =>
    setStore((prev) => ({ ...prev, isCartOpen: isOpen }))

  return [isCartOpen, setIsCartOpen]
}

export const useCartTotalPrice = (): number => {
  const products = useProducts()
  const {
    store: { cartItems },
  } = React.useContext(StoreContext)

  if (Object.keys(cartItems).length === 0) return 0

  const totalPrice = Object.entries(cartItems).reduce(
    (acc, [id, item]) => acc + products[id].price * item.quantity,
    0
  )

  return totalPrice
}

export const useCartTotalQuantity = (): number => {
  const {
    store: { cartItems },
  } = React.useContext(StoreContext)

  if (!cartItems) return 0

  const totalQuantity = Object.values(cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0
  )

  return totalQuantity
}

export const useCartItems = (): Store["cartItems"] => {
  const {
    store: { cartItems },
  } = React.useContext(StoreContext)

  return cartItems
}

export const useCartItemQuantity = (
  productId: string
): [number, React.Dispatch<React.SetStateAction<number>>] => {
  const {
    store: { cartItems },
    setStore,
  } = React.useContext(StoreContext)

  const qtty = productId in cartItems ? cartItems[productId].quantity : 0

  const setCartItemQuantity = (quantity: number): void =>
    setStore((prev) => {
      const newCartItems = { ...prev.cartItems }
      if (quantity < 1) {
        delete newCartItems[productId]
        return { ...prev, cartItems: newCartItems }
      }
      newCartItems[productId].quantity = quantity
      return { ...prev, cartItems: newCartItems }
    })

  return [qtty, setCartItemQuantity]
}

export const useAddItemToCart = (): ((
  productId: string,
  quantity: number
) => void) => {
  const { setStore } = React.useContext(StoreContext)

  const addItemToCart = (productId: string, quantity: number): void =>
    setStore((prev) => {
      const newCartItems = { ...prev.cartItems }
      newCartItems[productId] = { quantity }
      return { ...prev, isCartOpen: true, cartItems: newCartItems }
    })

  return addItemToCart
}

export const useRemoveItemFromCart = (): ((productId: string) => void) => {
  const { setStore } = React.useContext(StoreContext)

  const removeItemFromCart = (productId: string): void =>
    setStore((prev) => {
      const newCartItems = { ...prev.cartItems }
      delete newCartItems[productId]
      return { ...prev, cartItems: newCartItems }
    })

  return removeItemFromCart
}

export const useUpdateItemsFromCart = (): ((
  items: Store["cartItems"]
) => void) => {
  const { setStore } = React.useContext(StoreContext)

  const updateCartItem = (items: Store["cartItems"]): void =>
    setStore((prev) => ({ ...prev, cartItems: items }))

  return updateCartItem
}
