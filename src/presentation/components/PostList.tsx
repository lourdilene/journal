// src/presentation/components/PostList.tsx
import React from 'react';

// Definindo o tipo para cada post
interface Post {
    id: string; // ou number, dependendo do seu modelo
    title: string;
    description: string;
}

// Definindo o tipo para as propriedades do componente
interface PostListProps {
    posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default PostList;