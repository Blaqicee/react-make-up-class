import React from 'react';

const PostList = ({ posts }) => (
  <div>
    {posts.length === 0 ? <p>No posts yet</p> : posts.map(post => (
      <div key={post._id} className="border p-2 mb-2">
        <h2 className="font-bold">{post.title}</h2>
        <p>{post.content}</p>
        <p className="italic text-sm">Category: {post.category?.name}</p>
      </div>
    ))}
  </div>
);

export default PostList;
