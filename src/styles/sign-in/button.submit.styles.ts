import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { palette } from '../common.styles';
import { BasicFlexBox } from '../common.styles';

export const SignInButtonSubmitStyles: CSS.Properties = {
  width: '60%',
  height: '40px',
  backgroundColor: palette.EMERALD,
  color: palette.WHITE,
  borderRadius: '10px',
  fontWeight: '800',
  lineHeight: '40px',
  textAlign: 'center',
  display: 'block',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
};

export const SignInButtonWrapperStyles: CSS.Properties = {
  ...BasicFlexBox(FlexDirectionEnum.Column),
  width: '85%',
  alignItems: 'center',
  justifyContent: 'center',
};
