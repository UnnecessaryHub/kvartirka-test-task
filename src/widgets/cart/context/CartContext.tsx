import { createContext, FC, useState } from 'react'

import { Asteroid } from '@/shared/types/asteroid'
import {
  InitialCartState,
  SearchContextProviderProps
} from '@/shared/types/cart'

const initialState: InitialCartState = {
  cartItems: [],
  addToCart: () => {}
}

export const CartContext = createContext<InitialCartState>(initialState)

export const CartContextProvider: FC<SearchContextProviderProps> = ({
  children
}) => {
  const [cartItems, setCartItems] = useState<Asteroid[]>([])

  const addToCart = (item: Asteroid) => {
    setCartItems([...cartItems, item])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
