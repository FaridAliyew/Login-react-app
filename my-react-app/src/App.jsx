import React from 'react';
import Register from './Component/Register';
import Login from './Component/Login';
import './Style/register.css';
import './Style/login.css'
import './Style/post.css';
import Post from './Component/Post';

function App() {
  return (
    <>
      <Register />
      <Login />
      <Post/>
    </>

  );
}

export default App;
