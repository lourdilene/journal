//controllers/PostController.ts
import { getPosts, addPost as addPostService, deletePost as deletePostService } from '../services/PostService';
import { IPost } from '../models/PostModel';

export const fetchPosts = async (): Promise<IPost[]> => {
    return await getPosts();
};

export const createPost = async (newPost: IPost): Promise<IPost> => {
    return await addPostService(newPost);
};

export const removePost = async (id: number | null): Promise<void> => {
    await deletePostService(id);
};