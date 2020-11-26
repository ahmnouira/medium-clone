import React, { FC } from 'react';
import { Comment as CommentType } from '../../shared/types';
import { Container, Author, Body, Meta } from './style';

interface CommentProps {
    comment: CommentType
}

export const Comment: FC<CommentProps> = ({ comment }: CommentProps) => {

    return (
        <Container>
            <Author>
                {comment.author}
            </Author>
            <Body>
                {comment.content}
            </Body>
            <Meta>
                {comment.time}
            </Meta>
        </Container>
    )
}