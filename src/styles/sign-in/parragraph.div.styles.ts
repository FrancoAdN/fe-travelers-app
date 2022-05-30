import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox, palette } from '../common.styles';

export const SignInPWrapperStyles: CSS.Properties = {
  ...BasicFlexBox(FlexDirectionEnum.Column),
  width: 'auto',
  alignItems: 'center',
  padding: '0px 10px 10px 10px',
  fontSize: '12px',
  fontWeight: 800,
  color: palette.LIGHT_GREY,
  textTransform: 'uppercase',
  borderBottom: `1px solid ${palette.LIGHT_GREY}`,
  cursor: 'pointer',
};
