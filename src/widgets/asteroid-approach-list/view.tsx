import React, { FC, useEffect, useRef, useState } from 'react'

import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver'
import { MeasurementValue } from '@/shared/types/common'
import { Spinner } from '@/shared/ui'

import { MeasurementTabs } from '..'
import styles from './styles.module.css'
import { Types } from './types'

export const ApproachAsteroidList: FC<Types> = ({
  data,
  isInfiniteScroll = false,
  changePage,
  isLastPage = false
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [measurement, setMeasurement] = useState<MeasurementValue>('kilometers')
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = Boolean(entry?.isIntersecting)

  useEffect(() => {
    if (!isVisible || !changePage || !isInfiniteScroll) {
      return
    }

    setIsLoading(true)
    const timer = setTimeout(changePage, 1000)

    return () => {
      setIsLoading(false)
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])

  const measurementChangeHandler = (value: MeasurementValue) => {
    setMeasurement(value)
  }

  return (
    <div className={styles.root}>
      <MeasurementTabs
        value={measurement}
        changeValue={measurementChangeHandler}
      />

      <ul className={styles.asteroidList}>
        {data.map((asteroid, i) => (
          <ApproachAsteroidList
            key={i}
            data={asteroid}
            measurement={measurement}
          />
        ))}
      </ul>
      <div className={styles.bottom} ref={ref} />
      {isLoading && !isLastPage && <Spinner className={styles.spinner} />}
    </div>
  )
}
