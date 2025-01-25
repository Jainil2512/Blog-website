import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePost from '../components/homepost';
import Loader from '../components/loader';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Blog Posts</h1>
      <div className="flex justify-between mb-6">
        <button 
          onClick={() => navigate('/createpost')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Create Post
        </button>
        <button 
          onClick={() => navigate('/myblog')}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
        >
          View My Blog
        </button>
      </div>
      {loading ? <Loader /> : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post._id} className="relative">
              <HomePost post={post} />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button 
                  onClick={() => navigate(`/editpost/${post._id}`)}
                  className="px-2 py-1 bg-cyan-400 text-white rounded-md hover:bg-cyan-700"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(post._id)}
                  className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

