import fetch, { Response } from "node-fetch";
import { config } from './config';
import { EntityId, Person, Comment } from "../shared/types";

export async function fetchComments(postId: EntityId): Promise<Comment[]> {
    const res: Response = await fetch(`${config.baseUrl}/comments/${postId}`);
    return await res.json();
}

export async function submitComment(postId: EntityId, name: Person, comment: string): Promise<Response> {
    return await fetch(`${config.baseUrl}/posts/${postId}/comments`, {
        method: "POST", 
        headers : {
            "Content-Type": "application/json;charset=utf-8", 
        },
        body: JSON.stringify({name, comment})
    })
}



