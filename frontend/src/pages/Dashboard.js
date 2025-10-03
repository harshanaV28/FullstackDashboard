// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('username')) navigate('/');
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

export default Dashboard;
