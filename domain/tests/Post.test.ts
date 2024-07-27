// src/domain/models/Post.test.ts
import { Post } from '../models/Post';

describe('Post Model', () => {
  test('should create a post with the correct properties', () => {
    const id = 'post-1';
    const title = 'My First Post';
    const description = 'This is my first blog post.';
    const createdAt = new Date();
    const updatedAt = new Date();

    const post = new Post(id, title, description, createdAt, updatedAt);

    expect(post.id).toBe(id);
    expect(post.title).toBe(title);
    expect(post.description).toBe(description);
    expect(post.createdAt).toEqual(createdAt);
    expect(post.updatedAt).toEqual(updatedAt);
    expect(post.deletedAt).toBeUndefined();
  });

  test('should create a post with a deleted date', () => {
    const id = 'post-2';
    const title = 'Deleted Post';
    const description = 'This post has been deleted.';
    const createdAt = new Date();
    const updatedAt = new Date();
    const deletedAt = new Date();

    const post = new Post(id, title, description, createdAt, updatedAt, deletedAt);

    expect(post.id).toBe(id);
    expect(post.title).toBe(title);
    expect(post.description).toBe(description);
    expect(post.createdAt).toEqual(createdAt);
    expect(post.updatedAt).toEqual(updatedAt);
    expect(post.deletedAt).toEqual(deletedAt);
  });
});
