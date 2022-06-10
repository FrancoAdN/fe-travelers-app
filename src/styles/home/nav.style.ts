import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox, palette } from '../common.styles';

export const NavHomeStyles: CSS.Properties = {
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '60px',
  borderBottom: `1px solid ${palette.EMERALD}`,
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: '#181818',
  zIndex: 1000,
};
