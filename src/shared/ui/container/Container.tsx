import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Container.module.css'
import { ContainerProps } from './Container.prop'

export const Container: FC<ContainerProps> = ({
  fluid,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(styles.container, className, { [styles.fluid]: fluid })}
      {...props}>
      {children}
    </div>
  )
}
