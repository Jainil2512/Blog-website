import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = { title, content, tags: tags.split(',') };
      await axios.post(`${process.env.REACT_APP_BASE_URL}/api/posts`, newPost);
      setTitle('');
      setContent('');
      setTags('');
      // Handle success 
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="container mt-3 mx-auto px-4 py-8  h-[500px] w-[80%] border border-orange-600 rounded-lg shadow-sm bg-blue-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium">Title</label>
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Content</label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Tags</label>
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Add Post
        </button>
        <button 
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 mb-4 ml-8"
      >
        Back
      </button>
      </form>
    </div>
  );
};

export default CreatePost;
