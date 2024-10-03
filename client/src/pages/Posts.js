import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Latest Posts</h1>
      <PostList posts={posts} />
    </div>
  );
}

export default Posts;
