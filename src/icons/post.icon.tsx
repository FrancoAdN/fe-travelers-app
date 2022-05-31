import { BasicIconStyles, palette } from '../styles';
import { NavOptionsProps } from './nav-icons.interface';

export function PostIcon(props: NavOptionsProps) {

  const color = props.focused ? palette.EMERALD : palette.WHITE;

  return (
    <svg onClick={() => props.onClick()} fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" style={BasicIconStyles}>
      <path clipRule="evenodd" d="M1 7C1 3.68629 3.68629 1 7 1H17C20.3137 1 23 3.68629 23 
      7V17C23 20.3137 20.3137 23 17 23H7C3.68629 23 1 20.3137 1 17V7ZM7 3C4.79086 3 3 4.79086 
      3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7Z" 
      fill={color} fillRule="evenodd"/>
      <path clipRule="evenodd" d="M11 18V6H13V18H11Z" fill={color} fillRule="evenodd"/>
      <path clipRule="evenodd" d="M18 13H6V11H18V13Z" fill={color} fillRule="evenodd"/>
    </svg>
  )
}