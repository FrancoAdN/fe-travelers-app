import React from 'react';
import { SignInInputStyles, SignInInputWrapperStyles, SignInLabelStyles } from '../../styles';

export interface SignInUpInputProps {
  inputType: string;
  labelValue: string;
  element: any;
  setElement: Function;
}

export function SignInUpInput(props: SignInUpInputProps) {
  return (
    <div style={SignInInputWrapperStyles}>
      <label htmlFor={props.inputType} style={SignInLabelStyles}>
        {props.labelValue}
      </label>
      <input
        style={SignInInputStyles}
        type={props.inputType}
        name={props.inputType}
        value={props.element}
        onChange={(e) => props.setElement(e.target.value)}
        required
      />
    </div>
  );
}
