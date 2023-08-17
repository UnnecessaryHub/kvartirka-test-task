import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import spinnerUrl from '@/assets/svg/spinner.svg'

import styles from './Spinner.module.css'
import { SpinnerProps } from './Spinner.prop'

export const Spinner: FC<SpinnerProps> = ({ className = '' }) => {
  return (
    <div className={cn(styles.root, className)}>
      <Image
        className={styles.img}
        width={50}
        height={50}
        src={spinnerUrl}
        alt="Загрузка..."
      />
    </div>
  )
}
