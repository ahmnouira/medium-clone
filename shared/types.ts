export type UriString = string; 
export type UniqueString = string; 
export type EntityId = number | UniqueString; 
export type Category = "Technology" | "Science" | "Arts" | "Sports"; 
export type DateIsoString  = string; 



export interface Post  {
    id: EntityId
    date: DateIsoString
    category: Category
    title: string
    lead: string
    content: string
    image: UriString
    source: UriString
}

export type Person = string; 
export type RelativeTime = string; 

export interface Comment {
    id: EntityId
    author: Person
    content: string 
    time: RelativeTime
    postId: EntityId
}

export type Optional<TEntity> = TEntity | null