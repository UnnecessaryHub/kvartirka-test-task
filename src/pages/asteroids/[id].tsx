import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import React, { FC } from 'react'

import { WithLayout } from '@/application/layout/with-layout'
import asteroidService from '@/shared/api/asteroid-service'
import { AsteroidProps } from '@/shared/types/asteroid'
import { AsteroidPage } from '@/templates/asteroid/page'

const Asteroid: FC<AsteroidProps> = ({ asteroid }) => {
  return (
    <>
      <Head>
        <title>{`Астероид ${asteroid.name}`}</title>
      </Head>
      <AsteroidPage asteroid={asteroid} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<AsteroidProps> = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query?.id

  if (!id || isNaN(Number(id))) {
    return {
      notFound: true
    }
  }

  try {
    const asteroid = await asteroidService.getById(Number(id))
    return { props: { asteroid } }
  } catch (error) {
    console.error((error as Error).message)
    return {
      notFound: true
    }
  }
}

export default WithLayout(Asteroid)
