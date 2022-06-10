import CSS from 'csstype';
import { FlexDirectionEnum } from '../enums';

const BLACK_GREY = '#2A2D33';
const LIGHT_GREY = '#515866';
const WHITE = '#FEFFFF';
const EMERALD = '#19CC8B';
const RED = '#EB4D5A';
const LIGHTEST_GREY = '#F8F8F8';
export const palette = {
  BLACK_GREY,
  LIGHT_GREY,
  WHITE,
  EMERALD,
  RED,
  LIGHTEST_GREY,
};

export const BasicFlexBox = (flexDirection: FlexDirectionEnum): CSS.Properties => ({
  display: 'flex',
  flexDirection,
});
