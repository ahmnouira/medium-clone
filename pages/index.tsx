import Head from 'next/head'
import React, { ReactElement } from 'react'

import { fetchCategories, fetchPosts } from '../api/summury'
import { Feed } from '../components/Feed/Feed'
import { Category, Post } from '../shared/types'

interface FrontProps {
  posts: Post[]
  categories: Category[]
}

export async function getStaticProps() {
  const categories: Category[] = await fetchCategories()
  const posts: Post[] = await fetchPosts()
  return {
    props: { posts, categories },
  }
}

export default function Front({ posts, categories }: FrontProps): ReactElement<FrontProps> {
  return (
    <>
      <Head>
        <title>Front page of the Internet</title>
      </Head>
      <Feed posts={posts} categories={categories} />
    </>
  )
}
