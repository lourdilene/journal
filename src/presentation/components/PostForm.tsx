// src/presentation/components/PostForm.tsx
import React, { useState, FormEvent } from 'react';

// Definindo o tipo para as propriedades do componente
interface PostFormProps {
    onSubmit: (post: { title: string; description: string }) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
            />
            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostForm;