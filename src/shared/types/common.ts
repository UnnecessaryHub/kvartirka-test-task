import { Asteroid, NearEarthObjects } from '@/shared/types/asteroid'

export interface HomeProps extends Record<string, unknown> {
  asteroids: Asteroid[]
}

export type MeasurementValue = 'kilometers' | 'lunar'

export interface Measurement {
  label: string
  value: MeasurementValue
}
