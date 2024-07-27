// src/presentation/pages/posts/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Definindo o tipo para o post
interface Post {
    id: string; // ou number, dependendo do seu modelo
    title: string;
    description: string;
    createdAt: string; // ou Date, dependendo de como você está gerenciando as datas
    updatedAt: string; // ou Date, dependendo de como você está gerenciando as datas
}

const PostDetail: React.FC = () => {
    const [post, setPost] = useState<Post | null>(null); // Tipando o estado como Post ou null
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                const response = await fetch(`/api/posts?id=${id}`);
                const data: Post = await response.json(); // Tipando a resposta como Post
                setPost(data);
            };
            fetchPost();
        }
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>Created At: {post.createdAt}</p>
            <p>Updated At: {post.updatedAt}</p>
        </div>
    );
};

export default PostDetail;