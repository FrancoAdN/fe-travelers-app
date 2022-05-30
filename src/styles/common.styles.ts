import CSS from 'csstype';
import { FlexDirectionEnum } from '../enums';

const BLACK_GREY = '#2A2D33';
const LIGHT_GREY = '#515866';
const WHITE = '#FEFFFF';
const EMERALD = '#19CC8B';

export const palette = {
  BLACK_GREY,
  LIGHT_GREY,
  WHITE,
  EMERALD,
};

export const BasicFlexBox = (flexDirection: FlexDirectionEnum): CSS.Properties => ({
  display: 'flex',
  flexDirection,
});
