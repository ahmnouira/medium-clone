import { EntityId } from "./types";


interface PostStaticParams {
    id: EntityId
}

interface PostStaticPaths {
    params: PostStaticParams
}

const staticPostsIdList: EntityId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const postPaths: PostStaticPaths[] = staticPostsIdList.map((id: EntityId) => ({
    params: { id: String(id) }
})); 
