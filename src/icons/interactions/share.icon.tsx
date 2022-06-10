import { BasicIconStyles, palette } from "../../styles";
import { InteractionIconsProps } from "./interaction-icons.props";
import CSS from 'csstype';


export function ShareIcon({interacted}: InteractionIconsProps) {
  const styles: CSS.Properties = {
    fill: interacted ? palette.WHITE : palette.WHITE,
    ...BasicIconStyles,
  };

  return (
    <svg style={styles} viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg">
      <path d="M27.45,15.11l-22-11a1,1,0,0,0-1.08.12,1,1,0,0,0-.33,1L7,16,4,26.74A1,1,0,0,0,5,28a1,1,0,0,0,.45-.11l22-11a1,1,0,0,0,0-1.78Zm-20.9,10L8.76,17H18V15H8.76L6.55,6.89,24.76,16Z"/>
    </svg>
  )
}