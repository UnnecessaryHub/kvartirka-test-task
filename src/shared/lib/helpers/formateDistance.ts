import { declinationOfNum } from '@/shared/lib/helpers'
import { MeasurementValue } from '@/shared/types/common'

export const formatNum = (
  distance: string | number,
  measurement: MeasurementValue | 'kilometers-per-hour'
) => {
  if (isNaN(Number(distance))) {
    throw new TypeError('Incorrect data')
  }

  const formattedDistance = new Intl.NumberFormat().format(
    Math.ceil(Number(distance))
  )
  let suffix = ''

  switch (measurement) {
    case 'kilometers':
      suffix = 'км'
      break
    case 'kilometers-per-hour':
      suffix = 'км/час'
      break
    case 'kilometers':
      suffix = 'км'
      break
    case 'lunar':
      suffix = declinationOfNum(Number(distance), [
        'лунная орбита',
        'лунные орбиты',
        'Лунных орбит'
      ])
      break
    default:
      const _: never = measurement
      throw new Error('Такая единица измерения не обработана')
  }

  return `${formattedDistance} ${suffix}`.trim()
}
