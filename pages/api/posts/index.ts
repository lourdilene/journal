import { Request, Response } from 'express';
import database from "../../../infrastructure/database";

async function getPosts(request: Request, response: Response): Promise<void> {
  try {
    const result = await database.query("SELECT * FROM posts;");

    const posts: IPost[] = result.rows;

    response.status(200).json(posts);
  } catch (error) {
    console.error("Erro ao obter a versão do PostgreSQL:", error);
    response
      .status(500)
      .json({ error: "Erro ao obter a versão do PostgreSQL" });
  }
}

export default getPosts;