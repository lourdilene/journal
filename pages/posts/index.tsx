// src/presentation/pages/posts/index.tsx
import React, { useEffect, useState } from 'react';
import PostForm from '../../presentation/components/PostForm';
import PostList from '../../presentation/components/PostList';

// Definindo o tipo para cada post
interface Post {
    id: string; // ou number, dependendo do seu modelo
    title: string;
    description: string;
}

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]); // Tipando o estado como um array de Post

    const fetchPosts = async () => {
        const response = await fetch('/api/posts');
        const data: Post[] = await response.json(); // Tipando a resposta como um array de Post
        setPosts(data);
    };

    const handleCreatePost = async (newPost: { title: string; description: string }) => {
        await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });
        fetchPosts(); // Atualiza a lista
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <PostForm onSubmit={handleCreatePost} />
            <PostList posts={posts} />
        </div>
    );
};

export default PostsPage;