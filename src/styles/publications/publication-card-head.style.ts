import CSS from 'csstype';
import { palette } from '../common.styles';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox } from '../common.styles';

export const PublicationCardHeadStyles: CSS.Properties = {
  width: '100%',
  height: '60px',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

export const PublicationHeadProfileWrapperStyles: CSS.Properties = {
  width: '50px',
  height: '50px',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'center',
  alignItems: 'center',
};

export const PublicationHeadUserLocationWrapperStyles: CSS.Properties = {
  width: '500px',
  height: '50px',
  ...BasicFlexBox(FlexDirectionEnum.Column),
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

export const PublicationHeadUserProfileStyles: CSS.Properties = {
  width: '100%',
  height: '50%',
  color: palette.WHITE,
  cursor: 'pointer',
  fontSize: '20px',
};

export const PublicationHeadLocationStyles: CSS.Properties = {
  width: '100%',
  height: '35%',
  color: palette.LIGHTEST_GREY,
  cursor: 'pointer',
  fontSize: '12px',
};
