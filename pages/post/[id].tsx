import React, { FunctionComponent } from 'react';
import { Post as PostType, Comment as CommentType, Comment } from '../../shared/types';
import { fetchPost } from '../../api/post';
import { GetStaticPropsContext, GetStaticProps } from 'next';
import { useRouter, NextRouter } from 'next/router';
import { Loader } from '../../components/Loader';
import { postPaths as paths } from '../../shared/staticPaths';
import { PostBody } from '../../components/PostBody';
import { fetchComments } from '../../api/comment';
import { Comments } from '../../components/Comments';

interface PostProps {
    post: PostType
    comments: CommentType[]
}

// since the page is also going to be pre-rendred, we create getStaticProps
export const getStaticProps: GetStaticProps<PostProps> = async ({ params, }: GetStaticPropsContext) => {
    if (typeof params.id !== "string") throw new Error('Unexpected id');
    // fetch for posts
    const post: PostType = await fetchPost(params.id);
    // fetch for comments
    const comments: Comment[] = await fetchComments(params.id);
    return {
        props: { comments, post }
    }
}

// determines which paths should be rendered to HTML at build time
export async function getStaticPaths() {
    // when fallback is false: any paths not returned by getStaticpaths() will result 404page
    // when fallback is true: Next will return the "fallback" version of those paths
    // paths: list of paths that should be rendred at buld time
    return { paths, fallback: true }
}

const Post: FunctionComponent<PostProps> = ({ post, comments }: PostProps) => {
    const router: NextRouter = useRouter();

    if (router.isFallback) return <Loader />
    return (
        <>
            <PostBody post={post} />
            <Comments comments={comments} postId={post.id} />
        </>
    )
}

export default Post;