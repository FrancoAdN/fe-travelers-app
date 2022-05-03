import { useState } from 'react';
import { AuthRouteState } from '../../enums';
import {
  SignInUpSelectDivStyles,
  SignInUpSelectorWrapperStyles,
  SignInUpWrapperFormStyles,
} from '../../styles';
import { SignIn } from './sign-in.component';
import { SignUp } from './sign-up.component';

export interface SignInUpWrapperProps {
  authState: AuthRouteState;
  setAuthState: Function;
}

export function SignInUpWrapper(props: SignInUpWrapperProps) {
  const [login, setLogin] = useState(true);
  const changeAuthState = (auth: AuthRouteState) => {
    props.setAuthState(auth);
    setLogin(!login);
  };
  return (
    <div style={SignInUpWrapperFormStyles}>
      <div style={SignInUpSelectorWrapperStyles}>
        <div
          onClick={() => changeAuthState(AuthRouteState.SignIn)}
          style={SignInUpSelectDivStyles(login)}
        >
          Login
        </div>
        <div
          onClick={() => changeAuthState(AuthRouteState.SignUp)}
          style={SignInUpSelectDivStyles(!login)}
        >
          Sign Up
        </div>
      </div>
      {props.authState === AuthRouteState.SignIn ? <SignIn setAuthState={props.setAuthState}/> : <SignUp />}
    </div>
  );
}
