import React from 'react';
import { SignInButtonSubmitStyles, SignInButtonWrapperStyles } from '../../styles';

export function SignInUpButton() {
  return (
    <div style={SignInButtonWrapperStyles}>
      <button type="submit" style={SignInButtonSubmitStyles}>
        Submit
      </button>
    </div>
  );
}
