import React, { FunctionComponent } from 'react';
import { Post } from '../../shared/types';
import { Content, Figure, Title, Meta } from './style';
import Link from 'next/link';
import { Breadcrumbs } from '../Breadcrumbs';

interface PostBodyProps {
    post: Post
}

export const PostBody: FunctionComponent<PostBodyProps> = ({ post }: PostBodyProps) => {

    return (
        <div>
            <Breadcrumbs post={post} />
            <Title>
                {post.title}
            </Title>
            <Figure>
                <img src={post.image} alt={post.title} />
            </Figure>
            {/*Since our posts have HTML markup in their content fields we render them right away. 
        
                in real-world application, we could consider text preprocessing to avoid XSS or other security vulureabilities
            */}
            <Content dangerouslySetInnerHTML={{ __html: post.content }} />
            <Meta>
                <span>
                    {post.date}
                </span>
                <span>&middot;</span>
                <Link href="/category/[id]" as={`/category/${post.category.toLocaleLowerCase()}`}>
                    <a>{post.category}</a>
                </Link>
                <span>&middot;</span>
                <a href={post.source}>Source</a>
            </Meta>
        </div>
    )



}