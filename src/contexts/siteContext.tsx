import produce from "immer"
import Cookies from "js-cookie"
import React from "react"

export interface Store {
  isCartOpen: boolean
  isNavOpen: boolean
  isShowMap: boolean
  orderStatus: "idle" | "pending" | "failure" | "success"
  customerId?: string
  cartItems: {
    [sanityProductId: string]: {
      quantity: number
    }
  }
}

const initialStoreState: Store = {
  isCartOpen: false,
  isNavOpen: false,
  isShowMap: false,
  orderStatus: "idle",
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
    const customerId = Cookies.get("customerId")
    const cartItems = JSON.parse(localStorage.getItem("cart"))
    if (customerId) {
      setStore((prevState) => {
        return produce(prevState, (draftState) => {
          draftState.customerId = customerId
        })
      })
    }
    if (cartItems) {
      setStore((prevState) => {
        return produce(prevState, (draftState) => {
          draftState.cartItems = cartItems
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
