import React, { useEffect, useState } from 'react';
import { SignInUpInput, SignInUpButton } from '../../atoms';
import { CredentialsDto } from '../../dtos';
import { AuthRouteState } from '../../enums';
import authService from '../../services/auth.service';
import { SignInPWrapperStyles, SignInUpFormStyles } from '../../styles';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router';

export function SignIn(props: {setAuthState: Function}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) navigate('/home')
  });
  const signIn = async (event: React.FormEvent) => {
    event.preventDefault();
    const credentials: CredentialsDto = {
      email,
      password,
    };

    const result = await authService.signIn(credentials);
    const authToken = result?.data.token;
    Cookie.set('user', authToken);
    setRedirect(true);
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
