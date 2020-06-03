import React from "react"

interface InitialStore {
  isCartOpen: boolean
  isNavOpen: boolean
  // page: undefined
  orders: any[]
  customerPhoneNumber: string | undefined
  customerName: string | undefined
  customerToken: string | undefined
  cartItems: Map<string, { quantity: number }>
}

const initialStoreState: InitialStore = {
  isCartOpen: false,
  isNavOpen: false,
  // page: undefined,
  customerPhoneNumber: undefined,
  customerName: undefined,
  customerToken: undefined,
  orders: [],
  cartItems: new Map(),
}

const StoreContext = React.createContext<{
  setStore: React.Dispatch<React.SetStateAction<InitialStore>>
  store: InitialStore
}>({
  store: initialStoreState,
  setStore: () => null,
})

const StoreContextProvider: React.FC = ({ children }) => {
  const [store, setStore] = React.useState(initialStoreState)

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
