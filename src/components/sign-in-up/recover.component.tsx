import { useState } from "react";
import { SignInUpButton, SignInUpInput } from "../../atoms";
import { AuthRouteState } from "../../enums";
import { SignInUpFormStyles, SignInUpSelectDivStyles, SignInUpSelectorWrapperStyles, SignInUpWrapperFormStyles } from "../../styles";



export function RecoverAuth(props:{ setAuthState: Function}) {
  const [recover, setRecover] = useState(true) 
  const [email, setEmail] = useState('');

  const changeAuthState = (auth: AuthRouteState) => {
    props.setAuthState(auth);
    setRecover(!recover);
  };

  const recoverPassword = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <div style={SignInUpWrapperFormStyles}>
      <div style={SignInUpSelectorWrapperStyles}>
        <div
          style={SignInUpSelectDivStyles(recover)}
        >
        Reset
      </div>
      <div
        onClick={() => changeAuthState(AuthRouteState.SignIn)}
        style={SignInUpSelectDivStyles(!recover)}
      >
        Back
      </div>
      </div>
      <form onSubmit={recoverPassword} style={SignInUpFormStyles('200px')}>
        <SignInUpInput inputType="text" labelValue="email" element={email} setElement={setEmail} />
        <SignInUpButton />
      </form>
    </div>
  );
}