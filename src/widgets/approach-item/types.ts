import { Asteroid, CloseApproachData } from '@/shared/types/asteroid'
import { MeasurementValue } from '@/shared/types/common'

export interface ApproachItemItemProps {
  as?: 'li' | 'div'
  className?: string
  data: CloseApproachData
  measurement: MeasurementValue
}
