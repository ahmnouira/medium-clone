// this file for the front page (main page)

import fetch from 'node-fetch'

/**
 * node-fetch: this is because when Next builds a project it will run outside the browser's enviroment so it wan't
 * have access to API fetch
 */
import { Category, Post } from '../shared/types'
import { config } from './config'

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${config.baseUrl}/posts`)
  return await res.json()
}

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${config.baseUrl}/categories`)
  return await res.json()
}
