import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomePost from '../components/HomePost';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

const MyBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/posts?author=myusername`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching my posts:', error);
        setLoading(false);
      }
    };

    fetchMyPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">My Blog Posts</h1>
      {loading ? <Loader /> : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <HomePost key={post._id} post={post} />
          ))}
        </div>
      )}
       <button 
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 mb-4"
      >
        Back
      </button>
    </div>
  );
};

export default MyBlog;
