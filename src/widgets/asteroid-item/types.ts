import { Asteroid } from '@/shared/types/asteroid'
import { MeasurementValue } from '@/shared/types/common'

export interface AsteroidItemProps {
  as?: 'li' | 'div'
  className?: string
  data: Asteroid
  measurement: MeasurementValue
}
