import { Asteroid } from '@/shared/types/asteroid'

export interface AsteroidListProps {
  data: Asteroid[]
  isInfiniteScroll?: boolean
  changePage?: () => void
  isLastPage?: boolean
}
