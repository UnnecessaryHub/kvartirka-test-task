import { useRouter } from 'next/router'
import React, { FC, useContext } from 'react'

import { declinationOfNum } from '@/shared/lib/helpers/declinationOfNum'
import { Button } from '@/shared/ui'
import { CartContext } from '@/widgets/cart/context/CartContext'

import styles from './styles.module.css'

export const Cart: FC = () => {
  const { push } = useRouter()
  const { cartItems } = useContext(CartContext)
  const count = cartItems.length

  const onClick = () => {
    push('/send')
  }

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <div className={styles.title}>Корзина</div>
        <div className={styles.count}>
          {count}{' '}
          {declinationOfNum(count, ['астероид', 'астероида', 'астероидов'])}
        </div>
      </div>
      <Button
        className={styles.btn}
        onClick={onClick}
        disabled={cartItems.length === 0}>
        Отправить
      </Button>
    </div>
  )
}
