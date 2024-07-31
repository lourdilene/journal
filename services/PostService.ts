//services/PostService.ts
import { IPost } from '../models/PostModel';

const API_URL = 'http://localhost:3000/api/posts/';

export const getPosts = async (): Promise<IPost[]> => {
    const response = await fetch(API_URL);
    return response.json();
};

export const addPost = async (post: IPost): Promise<IPost> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });
    return response.json();
};

export const deletePost = async (id: number | null): Promise<void> => {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};