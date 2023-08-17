import { FC, PropsWithChildren } from 'react'

import { Footer } from './footer/footer'
import { Header } from './header/header'
import styles from './layout.module.css'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
