import CSS from 'csstype';
import { BasicIconStyles, palette } from '../styles';
import { NavOptionsProps } from './nav-icons.interface';

export function CompassIcon(props: NavOptionsProps) {
  const styles: CSS.Properties = {
    fill: props.focused ? palette.EMERALD : palette.WHITE,
    ...BasicIconStyles,
  };
  
  return (
    <svg onClick={() => props.onClick()} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={styles}
      viewBox="0 0 490 490" xmlSpace="preserve">
      <g>
        <path d="M245.004,490C380.089,490,490,380.095,490,244.993C490,109.905,380.089,0,245.004,0C109.911,0,0,109.905,0,244.993
          C0,380.095,109.911,490,245.004,490z M245.004,30.213c118.203,0,214.371,96.348,214.371,214.78s-96.168,214.795-214.371,214.795
          c-118.21,0-214.378-96.363-214.378-214.795S126.794,30.213,245.004,30.213z"/>
        <path d="M344.793,89.641L186.036,208.136l-40.827,192.218L303.967,281.86L344.793,89.641z M271.907,261.817
          c-9.416,14.659-29.096,19.013-43.955,9.724c-14.859-9.289-19.272-28.704-9.855-43.363c9.416-14.659,29.095-19.012,43.955-9.723
          C276.911,227.743,281.323,247.158,271.907,261.817z"/>
      </g>
    </svg>
  )
}