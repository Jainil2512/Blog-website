import React from 'react';

const Profile = () => {
  // Mock data for demonstration purposes
  const user = {
    username: 'myusername',
    email: 'myemail@example.com',
    bio: 'This is my bio',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2">Username: {user.username}</h2>
        <p className="text-gray-700 mb-2">Email: {user.email}</p>
        <p className="text-gray-700">Bio: {user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
