import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox } from '../common.styles';

export const SignInInputWrapperStyles: CSS.Properties = {
  ...BasicFlexBox(FlexDirectionEnum.Column),
  width: '85%',
  alignItems: 'center',
};
