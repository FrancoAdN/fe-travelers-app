import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteWrapper } from './routes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouteWrapper />} />
    </Routes>
  );
}

export default App;
