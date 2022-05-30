import React, { useState } from 'react';
import { SignInUpInput, SignInUpButton } from '../../atoms';
import { RegisterDto } from '../../dtos';
import authService from '../../services/auth.service';
import { SignInUpFormStyles } from '../../styles';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retype, setRetype] = useState('');

  const clearInputs = () => {
    setEmail('');
    setName('');
    setLastname('');
    setUsername('');
    setPassword('');
    setRetype('');
  }
  const signUp = async (event: React.FormEvent) => {
    event.preventDefault();

    const register: RegisterDto = {
      name,
      lastname,
      username,
      password,
      email,
    };

    await authService.signUp(register);
    clearInputs();
  };

  return (
    <form onSubmit={signUp} style={SignInUpFormStyles('600px')}>
      <SignInUpInput inputType="email" labelValue="email" element={email} setElement={setEmail} />
      <SignInUpInput inputType="text" labelValue="name" element={name} setElement={setName} />
      <SignInUpInput
        inputType="text"
        labelValue="lastname"
        element={lastname}
        setElement={setLastname}
      />
      <SignInUpInput
        inputType="text"
        labelValue="username"
        element={username}
        setElement={setUsername}
      />
      <SignInUpInput
        inputType="password"
        labelValue="password"
        element={password}
        setElement={setPassword}
      />
      <SignInUpInput
        inputType="password"
        labelValue="retype password"
        element={retype}
        setElement={setRetype}
      />
      <SignInUpButton />
    </form>
  );
}
