import React, { FC } from 'react';
import { EntityId, Comment as CommentType } from '../../shared/types';
import { List, Item, Container } from './style';
import { Comment } from '../Commnet';
import { CommentForm } from '../CommentForm';

interface CommentsProps {
    postId: EntityId,
    comments: CommentType[]
}

// wrapper
export const Comments: FC<CommentsProps> = ({ postId, comments }: CommentsProps) => {

    return (
        <Container id="comments">
            <h3>Comments</h3>
            <List>
                {
                    comments.map((comment) => (
                        <Item key={comment.id}>
                            <Comment comment={comment} />
                        </Item>
                    ))
                }
            </List>
            <CommentForm postId={postId} />
        </Container>

    )

}