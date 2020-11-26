import React, { FC } from 'react';
import { Post } from '../../shared/types';
import { Container } from './style';
import Link from 'next/link';

interface BreadcrumbsProps {
    post: Post
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ post }: BreadcrumbsProps) => {

    return (
        <Container>
            <Link href="/">
                <a>Front</a>
            </Link>
            <span>.</span>
            <Link href='/category/[id]' as={`/category/${post.category.toLocaleLowerCase()}`}>
                <a>{post.category}</a>
            </Link>
        </Container>
    )
}
