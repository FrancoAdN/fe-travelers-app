import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox } from '../common.styles';

export const NavTravelersLogoStyles: CSS.Properties = {
  width: '180px',
  height: '90%',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-evenly',
  alignItems: 'center',
};
