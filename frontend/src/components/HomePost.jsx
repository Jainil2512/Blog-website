import React from 'react';
import { Link } from 'react-router-dom';

const HomePost = ({ post }) => (
  <div className="bg-white shadow-md rounded-lg p-4 mb-6">
    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
    <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
    <Link to={`/posts/${post._id}`} className="text-blue-500 hover:underline">Read More</Link>
  </div>
);

export default HomePost;
