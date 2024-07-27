// src/presentation/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PostPersistence } from '../../infrastructure/persistence/PostPersistence';
import { PostService } from '../../domain/services/PostService';
import { PostUseCases } from '../../application/useCases/PostUseCases';

const postRepository = new PostPersistence();
const postService = new PostService(postRepository);
const postUseCases = new PostUseCases(postService);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            if (req.query.id) {
                const post = await postUseCases.getPost(req.query.id as string);
                if (post) {
                    res.status(200).json(post);
                } else {
                    res.status(404).json({ message: 'Post not found' });
                }
            } else {
                const posts = await postUseCases.getAllPosts();
                res.status(200).json(posts);
            }
            break;
        case 'POST':
            const { title, description } = req.body;
            const newPost = await postUseCases.createPost(title, description);
            res.status(201).json(newPost);
            break;
        case 'PUT':
            const updatedPostData = req.body;
            const updatedPost = await postUseCases.updatePost(updatedPostData);
            res.status(200).json(updatedPost);
            break;
        case 'DELETE':
            await postUseCases.deletePost(req.query.id as string);
            res.status(204).end();
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
