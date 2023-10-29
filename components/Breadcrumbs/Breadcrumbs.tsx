import Link from 'next/link'
import React, { FC } from 'react'

import { Post } from '../../shared/types'
import { Container } from './style'

interface BreadcrumbsProps {
  post: Post
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ post }: BreadcrumbsProps) => {
  return (
    <Container>
      <Link href='/'>Front</Link>
      <span>.</span>
      <Link href='/category/[id]' as={`/category/${post.category.toLocaleLowerCase()}`}>
        {post.category}
      </Link>
    </Container>
  )
}
