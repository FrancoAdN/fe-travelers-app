import CSS from 'csstype';
import { FlexDirectionEnum } from '../enums';
import { BasicFlexBox } from '../styles';

export const AuthWrapperStyle: CSS.Properties = {
  ...BasicFlexBox(FlexDirectionEnum.Column),
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
};
