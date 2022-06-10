import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox, palette } from '../common.styles';

export const PublicationCardImageStyles: CSS.Properties = {
  width: '100%',
  maxWidth: '800px',
  height: 'auto',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-around',
  alignItems: 'center',
};

export const ImageArrowStyles = (arrow: string, show: boolean): CSS.Properties => ({
  width: '25px',
  height: '25px',
  backgroundColor: palette.LIGHTEST_GREY,
  zIndex: 10,
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  margin: arrow === 'left' ? '0px -30px 0px 0px' : '0px 0px 0px -30px',
  opacity: 0.5,
  visibility: show ? 'visible' : 'hidden',
});

export const ImageWrapperStyles: CSS.Properties = {
  zIndex: 1,
};
