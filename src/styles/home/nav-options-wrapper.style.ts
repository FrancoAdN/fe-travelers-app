import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox, palette } from '../common.styles';

export const NavSearchWrapper: CSS.Properties = {
  width: '380px',
  height: '70%',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

export const NavSearchInput: CSS.Properties = {
  width: '300px',
  height: '20px',
  color: palette.LIGHT_GREY,
  border: 'none',
  outline: 'none',
  borderRadius: '10px',
  fontSize: '16px',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '5px',
  paddingBottom: '5px',
};
