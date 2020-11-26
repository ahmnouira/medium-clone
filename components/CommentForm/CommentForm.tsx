import React, { FC, useState, FormEvent, ChangeEvent } from 'react';
import { EntityId } from "../../shared/types";
import { Form } from './styles';
import { submitComment } from '../../api/comment';

interface CommentFormProps {
    postId: EntityId
}

export const CommentForm: FC<CommentFormProps> = ({ postId }: CommentFormProps) => {


    const [loading, setLoading] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const [name, setName] = useState<string>("");

    async function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const { status } = await submitComment(postId, name, value);
        setLoading(false);

        if (status === 201) { // something has been created
            location.hash = "comments"
            location.reload()
        }
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
            {loading ? <span>Submitting...</span>: <button>Submit</button> }
        </Form>
    )
}