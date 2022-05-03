import CSS from 'csstype';
import { palette } from '../common.styles';

export const SignInUpSelectDivStyles = (isSelected: boolean): CSS.Properties => {
  const colorSelected = isSelected ? palette.WHITE : palette.LIGHT_GREY;
  return {
    width: '50%',
    textAlign: 'center',
    fontSize: '20px',
    height: '50px',
    color: colorSelected,
    fontWeight: 800,
    borderBottom: `5px solid ${colorSelected}`,
  };
};
