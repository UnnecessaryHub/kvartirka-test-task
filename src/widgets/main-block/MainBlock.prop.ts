import { Asteroid } from '@/shared/types/asteroid'

export interface MainBlockProps {
  asteroids: Asteroid[]
  title: string
  isNeedCart?: boolean
  isNeedPaginate?: boolean
}
