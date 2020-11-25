import { EntityId, Category } from "./types";


interface PostStaticParams {
    id: EntityId
}

interface PostStaticPaths {
    params: PostStaticParams
}


interface CategoryStaticParams {
    id: Category
}

interface CategoryStaticPaths {
    params: CategoryStaticParams
}

const staticPostsIdList: EntityId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// we include 3 categories to pre-render 
const categoriesToPreRender: Category[] = ['Science', 'Technology', 'Arts'];

export const categoryPaths: CategoryStaticPaths[] = categoriesToPreRender.map((category: Category) => ({
    params: { id: category }
}))

export const postPaths: PostStaticPaths[] = staticPostsIdList.map((id: EntityId) => ({
    params: { id: String(id) }
})); 
