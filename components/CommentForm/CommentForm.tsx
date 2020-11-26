import React, { FC, useState, FormEvent, ChangeEvent } from 'react';
import { EntityId, Comment } from "../../shared/types";
import { Form } from './styles';
import { submitComment } from '../../api/comment';
import { Response } from 'node-fetch';
import { useDispatch } from 'react-redux';
import { UPDATE_COMMENTS_ACTION } from '../../store/comments';

interface CommentFormProps {
    postId: EntityId
}

export const CommentForm: FC<CommentFormProps> = ({ postId }: CommentFormProps) => {


    const [loading, setLoading] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const [name, setName] = useState<string>("");
    const dispatch = useDispatch();

    async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const respsone: Response = await submitComment(postId, name, value);
        const comments: Comment[] = await respsone.json();
        setLoading(false);
        setName("");
        setValue("")
        if (respsone.status === 200) {
            dispatch({ type: UPDATE_COMMENTS_ACTION, comments })
        }
        /*
        if (status === 201) { // something has been created
            location.hash = "comments"
            location.reload()
        }*/
    }

    return (
        <Form onSubmit={handleOnSubmit}>
            <h3>
                Your comment
            </h3>
            <input
                type="text"
                value={name}
                name="name"
                placeholder="your name"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
            />
            <textarea name="comment" value={value} placeholder="what do you think?"
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                required
            />
            {loading ? <span>Submitting...</span> : <button>Submit</button>}
        </Form>
    )
}