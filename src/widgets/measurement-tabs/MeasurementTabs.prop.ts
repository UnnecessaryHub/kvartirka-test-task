import { MeasurementValue } from '@/shared/types/common'

export interface MeasurementTabsProps {
  value: MeasurementValue
  changeValue: (arg0: MeasurementValue) => void
}
