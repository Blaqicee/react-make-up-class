import React, { useEffect, useState } from 'react';
import PostList from './components/PostList';
import Navbar from './components/Navbar';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">MERN Blog</h1>
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default App;
