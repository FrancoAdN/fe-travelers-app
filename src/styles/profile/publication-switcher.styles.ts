import CSS from 'csstype';
import { BasicFlexBox, palette } from '../common.styles';
import { FlexDirectionEnum } from '../../enums';

export const PublicationSwitcherStyles: CSS.Properties = {
  width: '800px',
  height: '50px',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `1px solid ${palette.LIGHT_GREY}`,
  // backgroundColor: 'blue',
};

export const PublicationSwitcherMapStyles: CSS.Properties = {
  height: '100%',
  width: '50px',
  backgroundColor: 'red',
  marginRight: '20px',
};

export const PublicationSwitcherPostsStyles: CSS.Properties = {
  height: '100%',
  width: '50px',
  backgroundColor: 'yellow',
  marginLeft: '20px',
};

export const PublicationSwitcherOptions = (isSelected: boolean, left: boolean): CSS.Properties => {
  let styles: CSS.Properties = {
    height: '100%',
    width: '50px',
    ...BasicFlexBox(FlexDirectionEnum.Row),
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (left) {
    styles = {
      ...styles,
      marginRight: '20px',
    };
  } else {
    styles = {
      ...styles,
      marginLeft: '20px',
    };
  }

  if (isSelected) {
    styles = {
      ...styles,
      borderBottom: `3px solid ${palette.WHITE}`,
    };
  }

  return styles;
};
