import React, { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context';
import { UserDto } from './dtos';
import { decodeCookie } from './helpers';
import { Home, Profile, AuthRouteWrapper } from './routes';

function App() {
  const [user, setUser] = useState<UserDto | undefined>(decodeCookie<UserDto>('user'));
  const userContextProvider = useMemo(() => ({user, setUser}),[user, setUser]);
  return (
    <UserContext.Provider value={userContextProvider}>
      <Routes>
        <Route path="/" element={user ? <Home/> : <AuthRouteWrapper />} />
        <Route path='/profile/:username' element={<Profile />}/>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
