import produce from "immer"
import React from "react"
import { StoreContext } from "../contexts/siteContext"
import useProducts from "./useProducts"

// const initCustomer = (
//   setStore
// ) => {
//   const customerEmail = cookie.get("customer_email")
//   const customerToken = cookie.get("customer_token")
//   const customerName = cookie.get("customer_firstName")

//   if (customerEmail && customerToken && customerName) {
//     setStore((prevState) => {
//       return { ...prevState, customerEmail, customerToken, customerName }
//     })
//   }
// }

export const useStore = () => {
  const { store } = React.useContext(StoreContext)
  return store
}

export const useCartToggle = (): [boolean, (isOpen: boolean) => void] => {
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

  const totalPrice = Array.from(cartItems.entries()).reduce(
    (acc, [id, item]) => {
      return acc + products.get(id).price * item.quantity
    },
    0
  )

  return totalPrice
}

export const useCartTotalQuantity = () => {
  const {
    store: { cartItems },
  } = React.useContext(StoreContext)

  if (!cartItems) return 0

  const totalQuantity = Array.from(cartItems.values()).reduce((acc, item) => {
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
): [number, (quantity: number) => void] => {
  const {
    store: { cartItems },
    setStore,
  } = React.useContext(StoreContext)

  // const cartItem = cartItems.find((item) => item.productId === productId)
  const qtty = cartItems.has(productId) ? cartItems.get(productId).quantity : 0

  const setCartItemQuantity = (quantity: number) => {
    setStore((prevState) => {
      if (quantity < 1) {
        return prevState
      }
      // if (!prevState.cartItems.has(productId)) {
      //   return produce(prevState, (draftState) => {
      //     draftState.cartItems.set(productId, { quantity })
      //     draftState.isCartOpen = true
      //   })
      // }
      return produce(prevState, (draftState) => {
        draftState.cartItems.get(productId).quantity = quantity
      })
    })
  }

  return [qtty, setCartItemQuantity]
}

export const useCustomer = () => {
  const {
    store: { customerPhoneNumber, customerName, customerToken },
  } = React.useContext(StoreContext)

  return { customerPhoneNumber, customerName, customerToken }
}

export const useAddItemToCart = () => {
  const { setStore } = React.useContext(StoreContext)

  const addItemToCart = (productId: string, quantity: number) => {
    setStore((prevState) => {
      return produce(prevState, (draftState) => {
        draftState.cartItems.set(productId, { quantity })
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
        // draftState.cartItems.filter((item) => item.productId !== productId)
        draftState.cartItems.delete(productId)
      })
    })
  }

  return removeItemFromCart
}
