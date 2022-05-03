import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox } from '../common.styles';

export const SignInUpSelectorWrapperStyles: CSS.Properties = {
  ...BasicFlexBox(FlexDirectionEnum.Row),
};
