// src/domain/repositories/PostRepository.ts
import { Post } from '../models/Post';

export interface PostRepository {
    create(post: Post): Promise<Post>;
    update(post: Post): Promise<Post>;
    findById(id: string): Promise<Post | null>;
    findAll(): Promise<Post[]>;
    delete(id: string): Promise<void>;
}
