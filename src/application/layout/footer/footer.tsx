import React from 'react'

import { Container } from '@/shared/ui'

import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>© Все права и планета защищены</Container>
    </div>
  )
}
