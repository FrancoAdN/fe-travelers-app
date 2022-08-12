import CSS from 'csstype';
import { BasicFlexBox } from '../common.styles';
import { FlexDirectionEnum } from '../../enums';

export const ProfilePictureWrapperStyles: CSS.Properties = {
  width: '250px',
  height: '100%',
  ...BasicFlexBox(FlexDirectionEnum.Column),
  justifyContent: 'space-evenly',
  alignItems: 'center',
};
