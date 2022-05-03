import React, { useState } from 'react';
import { SignInUpInput, SignInUpButton } from '../../atoms';
import { CredentialsDto } from '../../dtos';
import { AuthRouteState } from '../../enums';
import authService from '../../services/auth.service';
import { SignInPWrapperStyles, SignInUpFormStyles } from '../../styles';

export function SignIn(props: {setAuthState: Function}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (event: React.FormEvent) => {
    event.preventDefault();
    const credentials: CredentialsDto = {
      email,
      password,
    };

    authService.signIn(credentials);
  };

  return (
    <form onSubmit={signIn} style={SignInUpFormStyles('350px')}>
      <SignInUpInput inputType="text" labelValue="email" element={email} setElement={setEmail} />
      <SignInUpInput
        inputType="password"
        labelValue="password"
        element={password}
        setElement={setPassword}
      />
      <SignInUpButton />
      <div style={SignInPWrapperStyles} onClick={() => props.setAuthState(AuthRouteState.Recover)}>
        Forget your password?
      </div>
      
    </form>
  );
}
