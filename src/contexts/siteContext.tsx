import produce from "immer"
import React from "react"

export interface Store {
  isCartOpen: boolean
  isNavOpen: boolean
  // page: undefined
  customer: {
    name?: string
    phoneNumber?: string
    email?: string
    orders?: {
      [orderId: string]: {
        items: {
          [productId: string]: {
            quantity: number
          }
        }
      }
    }
  }
  cartItems: {
    [sanityProductId: string]: {
      quantity: number
    }
  }
}

const initialStoreState: Store = {
  isCartOpen: false,
  isNavOpen: false,
  // page: undefined,
  customer: {},
  cartItems: {},
}

const StoreContext = React.createContext<{
  setStore: React.Dispatch<React.SetStateAction<Store>>
  store: Store
}>({
  store: initialStoreState,
  setStore: () => null,
})

const StoreContextProvider: React.FC = ({ children }) => {
  const [store, setStore] = React.useState(initialStoreState)

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"))
    if (data) {
      setStore((prevState) => {
        return produce(prevState, (draftState) => {
          draftState.cartItems = data
        })
      })
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(store.cartItems))
  }, [store])

  return (
    <StoreContext.Provider
      value={{
        store,
        setStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreContextProvider }
