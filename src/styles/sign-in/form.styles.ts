import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox, palette } from '../common.styles';

export const SignInUpFormStyles = (height: string): CSS.Properties => ({
  width: '400px',
  height,
  backgroundColor: palette.BLACK_GREY,
  ...BasicFlexBox(FlexDirectionEnum.Column),
  justifyContent: 'space-evenly',
  alignItems: 'center',
});
