// src/application/useCases/PostUseCases.ts
import { PostService } from '../../domain/services/PostService';
import { Post } from '../../domain/models/Post';

export class PostUseCases {
    constructor(private postService: PostService) {}

    async createPost(title: string, description: string): Promise<Post> {
        return this.postService.createPost(title, description);
    }

    async updatePost(post: Post): Promise<Post> {
        return this.postService.updatePost(post);
    }

    async getPost(id: string): Promise<Post | null> {
        return this.postService.getPost(id);
    }

    async getAllPosts(): Promise<Post[]> {
        return this.postService.getAllPosts();
    }

    async deletePost(id: string): Promise<void> {
        return this.postService.deletePost(id);
    }
}
