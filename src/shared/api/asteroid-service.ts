import {
  Asteroid,
  GetAllNeoAsteroidQuery,
  GetAllNeoAsteroidResponse,
  GetNeoAsteroidByIdQuery
} from '@/shared/types/asteroid'

import { httpService } from './httpService'

const asteroidService = {
  async getAll(params?: GetAllNeoAsteroidQuery) {
    const { data } = await httpService.get<GetAllNeoAsteroidResponse>('feed', {
      params
    })
    return data
  },
  async getById(asteroidId: GetNeoAsteroidByIdQuery['asteroid_id']) {
    const { data } = await httpService.get<Asteroid>(`neo/${asteroidId}`)
    return data
  }
}

export default asteroidService
