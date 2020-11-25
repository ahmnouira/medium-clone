import React, { FunctionComponent } from 'react';
import { Section } from '../Section/Section';
import { Post, Category } from '../../shared/types';

interface FeedProps {
    posts: Post[]
    categories: Category[]
}

export const Feed: FunctionComponent<FeedProps> = ({ posts, categories }: FeedProps) => {
    return (
        <>

            {
                categories.map((category) => {
                    const inSection: Post[] = posts.filter((post) => post.category === category);
                    return (
                        <Section key={category} title={category} posts={inSection} isCompact />
                    )
                })
            }

        </>
    )
}