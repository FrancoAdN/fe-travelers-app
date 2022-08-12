import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Profile, RouteWrapper } from './routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouteWrapper />} />
      <Route path="/home" element={<Home/>} />
      <Route path='/profile/:username' element={<Profile />}/>
    </Routes>
  );
}

export default App;
