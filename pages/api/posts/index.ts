//pages/api/posts/index.ts
import { Request, Response } from 'express';
import { PostModel, IPost } from '../../../models/PostModel'; 

async function getPosts(request: Request, response: Response): Promise<void> {
  try {
    const posts: IPost[] = await PostModel.getPosts(); 
    response.status(200).json(posts);
  } catch (error) {
    console.error("Erro ao obter os posts:", error);
    response.status(500).json({ error: "Erro ao obter os posts" });
  }
}

async function addPost(request: Request, response: Response): Promise<void> {
  try {
    const newPost: IPost = request.body; 
    const createdPost: IPost = await PostModel.addPost(newPost); 
    response.status(201).json(createdPost); 
  } catch (error) {
    console.error("Erro ao adicionar o post:", error);
    response.status(500).json({ error: "Erro ao adicionar o post" });
  }
}

export default async function handler(req: Request, res: Response): Promise<void> {
  switch (req.method) {
    case 'GET':
      await getPosts(req, res);
      break;
    case 'POST':
      await addPost(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
