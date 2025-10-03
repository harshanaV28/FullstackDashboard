// src/components/PostCard.js
import React, { useState } from 'react';

function PostCard({ post }) {
  const [likes, setLikes] = useState(post.likes);

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
      <button>Comment</button>
    </div>
  );
}

export default PostCard;
