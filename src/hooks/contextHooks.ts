import produce from "immer"
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

  const setIsCartOpen = (isShow: boolean) => {
    setStore((prevState) => {
      return produce(prevState, (draftState) => {
        draftState.isShowMap = isShow
      })
    })
  }

  return [isShowMap, setIsCartOpen]
}

export const useCartToggle = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const {
    store: { isCartOpen },
    setStore,
  } = React.useContext(StoreContext)

  const setIsCartOpen = (isOpen: boolean) => {
    setStore((prevState) => {
      return produce(prevState, (draftState) => {
        draftState.isCartOpen = isOpen
      })
    })
  }

  return [isCartOpen, setIsCartOpen]
}

export const useCartTotalPrice = () => {
  const products = useProducts()
  const {
    store: { cartItems },
  } = React.useContext(StoreContext)

  if (!cartItems) return 0

  const totalPrice = Object.entries(cartItems).reduce((acc, [id, item]) => {
    return acc + products[id].price * item.quantity
  }, 0)

  return totalPrice
}

export const useCartTotalQuantity = () => {
  const {
    store: { cartItems },
  } = React.useContext(StoreContext)

  if (!cartItems) return 0

  const totalQuantity = Object.values(cartItems).reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  return totalQuantity
}

export const useCartItems = () => {
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

  // const cartItem = cartItems.find((item) => item.productId === productId)
  const qtty = productId in cartItems ? cartItems[productId].quantity : 0

  const setCartItemQuantity = (quantity: number) => {
    setStore((prevState) => {
      if (quantity < 1) {
        return produce(prevState, (draftState) => {
          delete draftState.cartItems[productId]
        })
      }
      return produce(prevState, (draftState) => {
        draftState.cartItems[productId].quantity = quantity
      })
    })
  }

  return [qtty, setCartItemQuantity]
}

export const useAddItemToCart = () => {
  const { setStore } = React.useContext(StoreContext)

  const addItemToCart = (productId: string, quantity: number) => {
    setStore((prevState) => {
      return produce(prevState, (draftState) => {
        draftState.cartItems[productId] = { quantity }
        draftState.isCartOpen = true
      })
    })
  }

  return addItemToCart
}

export const useRemoveItemFromCart = () => {
  const { setStore } = React.useContext(StoreContext)

  const removeItemFromCart = (productId: string) => {
    setStore((prevState) => {
      return produce(prevState, (draftState) => {
        delete draftState.cartItems[productId]
      })
    })
  }

  return removeItemFromCart
}

export const useUpdateItemsFromCart = () => {
  const { setStore } = React.useContext(StoreContext)

  const updateCartItem = (items: Store["cartItems"]) => {
    setStore((prevState) => {
      return produce(prevState, (draftState) => {
        draftState.cartItems = items
      })
    })
  }

  return updateCartItem
}
