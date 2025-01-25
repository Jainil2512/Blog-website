import React from 'react';

const Comment = ({ author, text }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-4">
    <h3 className="font-bold">{author}</h3>
    <p>{text}</p>
  </div>
);

export default Comment;
