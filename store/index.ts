import { MakeStore, createWrapper } from 'next-redux-wrapper'
import { Reducer } from 'react'
import { AnyAction, CombinedState, combineReducers, createStore } from 'redux'

import { CommentState, commentsReducer } from './comments'
import { PostState, postReducer } from './post'

export interface State {
  post: PostState
  comments: CommentState
}

const combinedReducer: Reducer<CombinedState<State>, AnyAction> = combineReducers({
  post: postReducer,
  comments: commentsReducer,
})

const makeStore: MakeStore<State, AnyAction> = () => createStore(combinedReducer)

export const store = createWrapper<State, AnyAction>(makeStore, {
  debug: true,
})
