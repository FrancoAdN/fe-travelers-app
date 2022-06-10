import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox } from '../common.styles';

export const NavOptionsWrapperStyles: CSS.Properties = {
  width: '300px',
  height: '90%',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-evenly',
  alignItems: 'center',
};
