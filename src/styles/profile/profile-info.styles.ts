import CSS from 'csstype';
import { BasicFlexBox, palette } from '../common.styles';
import { FlexDirectionEnum } from '../../enums';

export const ProfileUsernameWrapperStyles: CSS.Properties = {
  width: '80%',
  height: '50px',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-between',
  alignItems: 'center',
  color: palette.WHITE,
};

export const ProfileUsernameStyle: CSS.Properties = {
  width: '250px',
  height: '100%',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-around',
  alignItems: 'center',
};

export const ProfileButtonsWrapperStyles: CSS.Properties = {
  width: '180px',
  height: '100%',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

export const ProfileButtonsStyles: CSS.Properties = {
  outline: 'none',
  color: palette.WHITE,
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '4px',
  paddingBottom: '4px',
  backgroundColor: '#181818',
  borderWidth: '0.01em',
  borderStyle: 'solid',
  borderColor: palette.LIGHTEST_GREY,
  fontSize: '16px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export const ProfileFollowingInfoWrapperStyles: CSS.Properties = {
  width: '80%',
  height: '40px',
  color: palette.WHITE,
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-around',
  alignItems: 'center',
};

export const ProfileBiographyInfoWrapperStyles: CSS.Properties = {
  width: '80%',
  height: '140px',
  color: palette.WHITE,
};
