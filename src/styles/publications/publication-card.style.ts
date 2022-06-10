import CSS from 'csstype';
import { palette } from '../common.styles';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox } from '../common.styles';

const border = `1px solid ${palette.LIGHT_GREY}`;
export const PublicationCardStyles: CSS.Properties = {
  marginTop: '30px',
  width: '100%',
  height: 'auto',
  border,
  ...BasicFlexBox(FlexDirectionEnum.Column),
};
