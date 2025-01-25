import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import MyBlog from './pages/MyBlogs';
import PostDetails from './pages/PostDetails';
import Profile from './pages/Profile';

const App = () => {
  return (

    <div className="bg-dark-blue min-h-screen text-black">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/editpost/:id" element={<EditPost />} />
        <Route path="/myblog" element={<MyBlog />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
