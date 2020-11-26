import React, { FC } from 'react'

import { Comment as CommentType, EntityId } from '../../shared/types'
import { CommentForm } from '../CommentForm'
import { Comment } from '../Commnet'
import { Container, Item, List } from './style'

interface CommentsProps {
  postId: EntityId
  comments: CommentType[]
}

// wrapper
export const Comments: FC<CommentsProps> = ({ postId, comments }: CommentsProps) => {
  return (
    <Container id='comments'>
      <h3>Comments</h3>
      <List>
        {comments.map((comment) => (
          <Item key={comment.id}>
            <Comment comment={comment} />
          </Item>
        ))}
      </List>
      <CommentForm postId={postId} />
    </Container>
  )
}
