// one post has 0 or many commments (post.ts) NOT posts

import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction } from 'redux'

import { Optional, Post } from '../shared/types'
import { HydrateAction } from './hydrate'

export const UPDATE_POST_ACTION = 'UPDATE_POST'

export interface UpdatePostAction extends AnyAction {
  type: typeof UPDATE_POST_ACTION
  post: Post
}

export type PostState = Optional<Post>

type PostAction = HydrateAction | UpdatePostAction

export const postReducer = (state: PostState = null, action: PostAction) => {
  // When the hydration happens we either take the post from action.payload or set null
  // as a value for the state
  // besides we provide null as a default value for the state that's why we needed Optional<> type
  switch (action.type) {
    case HYDRATE:
      return action.payload?.post ?? null
    case UPDATE_POST_ACTION:
      return action.post
    default:
      return state
  }
}
