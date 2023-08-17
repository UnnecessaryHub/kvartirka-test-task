import cn from 'classnames'
import React, { FC, Fragment } from 'react'

import { measurementValueList } from '@/shared/consts'

import styles from './MeasurementTabs.module.css'
import { MeasurementTabsProps } from './MeasurementTabs.prop'

export const MeasurementTabs: FC<MeasurementTabsProps> = ({
  changeValue,
  value
}) => {
  return (
    <div className={styles.measurement}>
      {measurementValueList.map((item, i) => (
        <Fragment key={item.value + i}>
          {i !== 0 && <span className={styles.separator}> | </span>}
          <button
            className={cn(styles.measurementValue, {
              [styles.active]: value === item.value
            })}
            onClick={() => changeValue(item.value)}
            type="button">
            {item.label}
          </button>
        </Fragment>
      ))}
    </div>
  )
}
