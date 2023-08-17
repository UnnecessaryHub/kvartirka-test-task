import React, { FC } from 'react'

import { HomeProps } from '@/shared/types/common'
import { MainBlock } from '@/widgets'

export const HomePage: FC<HomeProps> = ({ asteroids }) => {
  return (
    <MainBlock asteroids={asteroids} title="Ближайшие подлёты астероидов" />
  )
}
