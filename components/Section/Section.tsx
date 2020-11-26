import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import { Post as PostType } from '../../shared/types'
import { Post } from '../Post/Post'
import { Grid, MoreLink, Title } from './style'

interface SectionProps {
  title: string
  posts: PostType[]
  isCompact?: boolean
}

export const Section: FunctionComponent<SectionProps> = ({ title, posts, isCompact = false }: SectionProps) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map((post: PostType, index: number) => (
          <Post key={index} post={post} />
        ))}
      </Grid>
      {isCompact && (
        <Link href={`/category/${title}`} as={`/category/${title.toLocaleLowerCase()}`} passHref>
          <MoreLink>More in {title}</MoreLink>
        </Link>
      )}
    </section>
  )
}
