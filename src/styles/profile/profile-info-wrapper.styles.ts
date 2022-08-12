import CSS from 'csstype';
import { BasicFlexBox } from '../common.styles';
import { FlexDirectionEnum } from '../../enums';

export const ProfileInformationWrapperStyles: CSS.Properties = {
  width: '550px',
  height: '100%',
  ...BasicFlexBox(FlexDirectionEnum.Column),
  justifyContent: 'space-around',
  alignItems: 'center',
};
