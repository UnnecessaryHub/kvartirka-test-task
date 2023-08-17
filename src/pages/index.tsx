import { GetStaticProps } from 'next'
import { FC } from 'react'

import { WithLayout } from '@/application/layout/with-layout'
import neoAsteroidService from '@/shared/api/asteroid-service'
import { sortNeoAsteroidListByDateCallback } from '@/shared/lib/helpers'
import { Asteroid } from '@/shared/types/asteroid'
import { HomeProps } from '@/shared/types/common'
import { HomePage } from '@/templates'

const Home: FC<HomeProps> = ({ asteroids }) => {
  return (
    <>
      <HomePage asteroids={asteroids} />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let asteroids: Asteroid[] = []

  try {
    const data = await neoAsteroidService.getAll()
    asteroids = Object.values(data.near_earth_objects).flat(1)
    asteroids.sort(sortNeoAsteroidListByDateCallback)
  } catch (error) {
    console.error((error as Error).message)
  }

  return {
    props: {
      asteroids
    }
  }
}

export default WithLayout(Home)
