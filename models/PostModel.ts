// server/models/PostModel.ts
import database from '../infrastructure/database';
// import IPost from '../../lib/models/PostModel'

export interface IPost {
    id: number | null;
    name: string;
    message: string;
    imageUrl: string | null;
}

export class PostModel {
    static async getPosts(): Promise<IPost[]> {
        const result = await database.query('SELECT * FROM posts');
        return result.rows;
    }

    static async addPost(post: IPost): Promise<IPost> {
        const queryText = 'INSERT INTO posts (name, message, image_url) VALUES ($1, $2, $3) RETURNING *';
        const result = await database.query({
            text: queryText,
            values: [post.name, post.message, post.imageUrl]
        });
        return result.rows[0];
    }

    // static async deletePost(id: number): Promise<void> {
    //     await database.executeQuery('DELETE FROM posts WHERE id = $1', [id]);
    // }
}