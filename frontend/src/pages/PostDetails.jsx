import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Comment from '../components/comment';
import Loader from '../components/Loader';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`https://blog-website-be-9kiw.onrender.com/api/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post details:', error);
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? <Loader /> : (
        <div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            {post.comments.map((comment, index) => (
              <Comment key={index} author={comment.author} text={comment.text} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
