import CSS from 'csstype';
import { FlexDirectionEnum } from '../../enums';
import { BasicFlexBox, palette } from '../common.styles';

export const PublicationCardInteractionBoxStyles: CSS.Properties = {
  width: '100%',
  height: '200px',
};

export const PublicationCardDescriptionBoxStyles: CSS.Properties = {
  width: '100%',
  height: '80%',
  ...BasicFlexBox(FlexDirectionEnum.Column),
  justifyContent: 'space-around',
};

export const PublicationCardInteractionsStyles: CSS.Properties = {
  width: '100%',
  height: '20%',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  justifyContent: 'space-around',
  alignItems: 'center',
};

export const InteractionBoxStyles = (interacted: boolean): CSS.Properties => ({
  height: '100%',
  width: '150px',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  alignItems: 'center',
  justifyContent: 'space-evenly',
  color: interacted ? palette.RED : palette.WHITE,
  cursor: 'pointer',
});

export const InteractionBoxDescriptionTextStyles: CSS.Properties = {
  width: '90%',
  height: '70%',
  marginLeft: '5%',
  color: palette.WHITE,
  overflow: 'hidden',
  fontSize: '14px',
  textOverflow: 'ellipsis',
};

export const InteractionBoxDescriptionRateStyles: CSS.Properties = {
  width: '170px',
  height: '30px',
  marginLeft: '5%',
  ...BasicFlexBox(FlexDirectionEnum.Row),
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
};
