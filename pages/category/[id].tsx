import { ParsedUrlQuery } from 'querystring'

import { GetStaticProps, GetStaticPropsContext } from 'next'
import { NextRouter, useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

import { fetchPosts } from '../../api/category'
import { Loader } from '../../components/Loader'
import { Section } from '../../components/Section'
import { categoryPaths as paths } from '../../shared/staticPaths'
import { Post } from '../../shared/types'

interface CategoryProps {
  posts: Post[]
}

// Since we want this page to be pre-render as well, we create a getStaticProps
export const getStaticProps: GetStaticProps<CategoryProps, ParsedUrlQuery> = async ({
  params,
}: GetStaticPropsContext) => {
  if (typeof params.id !== 'string') throw new Error('Unexpected id')
  const posts: Post[] = await fetchPosts(params.id)
  return {
    props: { posts },
  }
}

// fallback: true to make sure that **no** page would return 404 when it's not pre-rendered
export async function getStaticPaths() {
  return {
    paths,
    fallback: true,
  }
}

const Category: FunctionComponent<CategoryProps> = ({ posts }: CategoryProps) => {
  const router: NextRouter = useRouter()
  if (router.isFallback) return <Loader />
  return <Section posts={posts} title={String(router.query.id)} />
}

export default Category
