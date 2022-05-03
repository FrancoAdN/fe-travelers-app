import React, { useState } from 'react';
import { RecoverAuth, SignInUpWrapper } from '../components';
import { AuthRouteState } from '../enums';
import { AuthWrapperStyle } from './auth-wrapper.style';

export function RouteWrapper() {
  return (
  <div style={AuthWrapperStyle}>
    <AuthRoute />
  </div>
  );
}

function AuthRoute() {
  const [state, setState] = useState(AuthRouteState.SignIn);
  if (state === AuthRouteState.Recover) return <RecoverAuth setAuthState={setState}/>;

  return <SignInUpWrapper authState={state} setAuthState={setState} />;
}
