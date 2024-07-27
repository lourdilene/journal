// src/domain/services/PostService.ts
import { Post } from '../models/Post';
import { PostRepository } from '../repositories/PostRepository';

export class PostService {
    constructor(private postRepository: PostRepository) {}

    async createPost(title: string, description: string): Promise<Post> {
        const post = new Post(Date.now().toString(), title, description, new Date(), new Date());
        return this.postRepository.create(post);
    }

    async updatePost(post: Post): Promise<Post> {
        post.updatedAt = new Date();
        return this.postRepository.update(post);
    }

    async getPost(id: string): Promise<Post | null> {
        return this.postRepository.findById(id);
    }

    async getAllPosts(): Promise<Post[]> {
        return this.postRepository.findAll();
    }

    async deletePost(id: string): Promise<void> {
        return this.postRepository.delete(id);
    }
}
