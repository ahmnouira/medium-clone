import fetch from 'node-fetch'

import { EntityId, Post } from '../shared/types'
import { config } from './config'

export async function fetchPosts(categoryId: EntityId): Promise<Post[]> {
  const url: string = `${config.baseUrl}/categories/${categoryId}`
  const res = await fetch(url)
  return await res.json()
}
