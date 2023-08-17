import { CloseApproachData } from '@/shared/types/asteroid'

export interface Types {
  data: CloseApproachData[]
  isInfiniteScroll?: boolean
  changePage?: () => void
  isLastPage?: boolean
}
