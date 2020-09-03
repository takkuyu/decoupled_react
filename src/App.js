import React from 'react';
import logo from './logo.svg';
import './App.css';
import NodeReadWrite from './components/NodeReadWrite';
import LoginForm from './components/LoginFrom';

function App() {
  return (
    <>
      <LoginForm />
      <NodeReadWrite />
    </>
  );
}

export default App;
