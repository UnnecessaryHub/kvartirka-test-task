import React, { useContext } from 'react'

import { CartContext } from '@/widgets/cart/context/CartContext'

import { MainBlock } from '../../widgets'

export const SendPage = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <MainBlock
      asteroids={cartItems}
      title="Заказ отправлен!"
      isNeedCart={false}
      isNeedPaginate={false}
    />
  )
}
