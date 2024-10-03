import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <Link to={`/posts/${post._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;
