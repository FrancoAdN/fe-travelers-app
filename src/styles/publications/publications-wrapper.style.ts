import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox } from '../common.styles';

export const MainContentWrapperStyles: CSS.Properties = {
  width: '100%',
  height: 'max-content',
  marginTop: '90px',
  ...BasicFlexBox(FlexDirectionEnum.Column),
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

export const PublicationsWrapperStyles: CSS.Properties = {
  width: '600px',
  height: '100%',
};
