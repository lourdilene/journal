// client/src/App.tsx
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from "../components/Post";
import CreateArea from "../components/CreatePost";
import { getPosts, addPost as addPostService, deletePost as deletePostService } from '../../services/PostService';
import { IPost } from '../../models/PostModel';
import './App.css';

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 9rem 0 7rem 0;

    .app__list--posts {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .app__feed {
      margin: 1.5rem 0 0.5rem 0;
    }

    @media only screen and (min-width: 1200px) {
      width: 50%;
      margin: auto;
      margin-top: 7rem;
      margin-bottom: 7rem;
    }
`;

const App: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const loadedPosts = await getPosts();
            setPosts(loadedPosts);
        };
        fetchPosts();
    }, []);

    const addPost = async (newPost: IPost) => {
        const addedPost = await addPostService(newPost);
        setPosts(prevPosts => [...prevPosts, addedPost]);
    };

    const deletePost = async (id:number | null) => {
        await deletePostService(id);
        setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    };

    return (
        <StyledApp>
            <CreateArea onAdd={addPost} />
            {posts.length > 0 && <p className='color-warm-grey-two app__feed'>Feed</p>}
            <div className='app__list--posts'>
                {posts.map(postItem => (
                    <Post
                        key={postItem.id}
                        id={postItem.id}
                        name={postItem.name}
                        message={postItem.message}
                        imageUrl={postItem.imageUrl}
                        onDelete={deletePost}
                    />
                ))}
            </div>
        </StyledApp>
    );
}

export default App;