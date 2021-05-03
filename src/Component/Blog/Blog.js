import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            <h2> Numbers of Posts: {posts.length}</h2>
            {
                posts.map(post =><Post post={post}></Post>)
            }
        </div>
    );
};

export default Blog;