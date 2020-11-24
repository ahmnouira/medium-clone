import React, { FunctionComponent } from 'react';
import { Post as PostType } from '../../shared/types';
import { Grid, Title } from './style';
import { Post } from '../Post/Post';

interface SectionProps {
    title: string
    posts: PostType[]
}

export const Section: FunctionComponent<SectionProps> = ({ title, posts }: SectionProps) => {

    return (
        <section>
            <Title>
                {title}
            </Title>
            <Grid>
                {
                    posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))
                }
            </Grid>
        </section>
    )
}