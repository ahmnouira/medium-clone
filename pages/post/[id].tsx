import React, { FunctionComponent } from 'react';
import { Post as PostType, Comment as CommentType } from '../../shared/types';
import { fetchPost } from '../../api/post';
import { GetStaticPropsContext, GetStaticProps, GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useRouter, NextRouter } from 'next/router';
import { Loader } from '../../components/Loader';
import { postPaths as paths } from '../../shared/staticPaths';
import { PostBody } from '../../components/PostBody';
import { fetchComments } from '../../api/comment';
import { Comments } from '../../components/Comments';
import { store, State } from '../../store';
import { UPDATE_POST_ACTION } from '../../store/post';
import { UPDATE_COMMENTS_ACTION } from '../../store/comments';
import { ParsedUrlQuery } from 'querystring';
import { useSelector } from "react-redux"

interface PostProps {
    post: PostType
    comments: CommentType[]
}

export const getServerSideProps: GetServerSideProps<Promise<void>, ParsedUrlQuery> = store.getServerSideProps(
    async ({ store, params }) => {
        if (typeof params.id !== "string") throw new Error("Unexpected id")
        const comments: CommentType[] = await fetchComments(params.id)
        const post: PostType = await fetchPost(params.id)
        store.dispatch({ type: UPDATE_POST_ACTION, post })
        store.dispatch({ type: UPDATE_COMMENTS_ACTION, comments })
    }
)


/** 
// since the page is also going to be pre-rendred, we create getStaticProps, to make the page SSR-ed we have export GetServerSideProps
export const getStaticProps: GetServerSideProps<PostProps> = async ({ params, }: GetServerSidePropsContext) => {
    if (typeof params.id !== "string") throw new Error('Unexpected id');
    // fetch for posts
    const post: PostType = await fetchPost(params.id);
    // fetch for comments
    const comments: Comment[] = await fetchComments(params.id);
    return {
        props: { comments, post }
    }
}
**/

/*  
// determines which paths should be rendered to HTML at build time
export async function getStaticPaths() {
    // when fallback is false: any paths not returned by getStaticpaths() will result 404page
    // when fallback is true: Next will return the "fallback" version of those paths
    // paths: list of paths that should be rendred at buld time
    return { paths, fallback: true }
}
*/

/** 
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

*/

const Post: NextPage = () => {
    const { post, comments } = useSelector<State, State>((state: State) => state)

    if (!post) return <Loader />

    return (
        <>
            <PostBody post={post} />
            <Comments comments={comments} postId={post.id} />
        </>
    )
}
export default Post;