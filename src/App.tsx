import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, RouteWrapper } from './routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouteWrapper />} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  );
}

export default App;
