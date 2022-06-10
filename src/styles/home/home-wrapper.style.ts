import CSS from 'csstype';
import { BasicFlexBox } from '../common.styles';
import { FlexDirectionEnum } from '../../enums';

export const HomeWrapperStyles: CSS.Properties = {
  width: '100%',
  height: '100%',
  ...BasicFlexBox(FlexDirectionEnum.Column),
  justifyContent: 'space-evenly',
  alignItems: 'center',
};
