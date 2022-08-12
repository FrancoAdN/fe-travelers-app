import CSS from 'csstype';
import { BasicFlexBox, palette } from '../common.styles';
import { FlexDirectionEnum } from '../../enums';

export const ProfileHeaderWrapperStyles: CSS.Properties = {
  width: '800px',
  height: '300px',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  alignItems: 'center',
  borderBottom: `1px solid ${palette.LIGHT_GREY}`,
};
