// src/infrastructure/persistence/PostPersistence.ts
import { Post } from '../../domain/models/Post';
import { PostRepository } from '../../domain/repositories/PostRepository';

export class PostPersistence implements PostRepository {
    private posts: Post[] = [];

    async create(post: Post): Promise<Post> {
        this.posts.push(post);
        return post;
    }

    async update(post: Post): Promise<Post> {
        const index = this.posts.findIndex(p => p.id === post.id);
        if (index !== -1) {
            this.posts[index] = post;
        }
        return post;
    }

    async findById(id: string): Promise<Post | null> {
        return this.posts.find(post => post.id === id) || null;
    }

    async findAll(): Promise<Post[]> {
        return this.posts;
    }

    async delete(id: string): Promise<void> {
        this.posts = this.posts.filter(post => post.id !== id);
    }
}
