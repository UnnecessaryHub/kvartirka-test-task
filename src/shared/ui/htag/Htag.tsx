import cn from 'classnames'
import { FC } from 'react'

import styles from './Htag.module.css'
import { HtagProps } from './Htag.prop'

export const Htag: FC<HtagProps> = ({
  tag: Component,
  className,
  center,
  children,
  ...props
}) => {
  return (
    <Component
      className={cn(className, styles[Component], styles.title, {
        [styles.center]: center
      })}
      {...props}>
      {children}
    </Component>
  )
}
