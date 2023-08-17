import Image from 'next/image'
import React, { FC, useState } from 'react'

import dangerUrl from '@/assets/img/danger.png'
import { ASTEROIDS_PER_PAGE } from '@/shared/consts'
import { AsteroidProps } from '@/shared/types/asteroid'
import { Container, Htag } from '@/shared/ui'

import { AsteroidItem } from '../../widgets'
import styles from './page.module.css'

export const AsteroidPage: FC<AsteroidProps> = ({ asteroid }) => {
  const [page, setPage] = useState(1)
  const paginatedApproachList = asteroid.close_approach_data.slice(
    0,
    page * ASTEROIDS_PER_PAGE
  )
  const minDiameter = asteroid.estimated_diameter.meters.estimated_diameter_min
  const maxDiameter = asteroid.estimated_diameter.meters.estimated_diameter_max
  const isHazardous = asteroid.is_potentially_hazardous_asteroid

  const changePage = () => {
    setPage((prev) => ++prev)
  }

  return (
    <section>
      <Container>
        <Htag tag="h1">{asteroid.name}</Htag>

        <div className={styles.size}>
          <span className={styles.sizeTitle}>Размеры: </span>
          <span className={styles.minDiameter}>{Math.ceil(minDiameter)} м</span>
          <span> - </span>
          <span className={styles.maxDiameter}>{Math.ceil(maxDiameter)} м</span>
        </div>
        {isHazardous && (
          <Image
            className={styles.danger}
            src={dangerUrl}
            width={67}
            height={20}
            alt="Опасно"
          />
        )}

        <Htag className={styles.listTitle} tag="h2">
          Список сближения астероида:{' '}
        </Htag>
        <View
          data={paginatedApproachList}
          isInfiniteScroll={true}
          changePage={changePage}
          isLastPage={
            paginatedApproachList.length === asteroid.close_approach_data.length
          }
        />
      </Container>
    </section>
  )
}
