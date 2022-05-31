import CSS from 'csstype';
import { palette, BasicIconStyles } from '../styles';
import { NavOptionsProps } from './nav-icons.interface';

export function MessagesIcon(props: NavOptionsProps) {
  const styles: CSS.Properties = {
    fill: props.focused ? palette.EMERALD : palette.WHITE,
    ...BasicIconStyles,
  };


  return (
    <svg onClick={() => props.onClick()} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 32 32" style={styles} xmlSpace="preserve">
        <g>
          <path d="M12.6,22.8C12.4,22.9,12.2,23,12,23s-0.4-0.1-0.6-0.2L1,15.9V25c0,2.8,2.2,5,5,5h12c2.8,0,5-2.2,5-5v-9.1L12.6,22.8z"/>
          <path d="M22.8,13.6C22.2,11.5,20.3,10,18,10H6c-2.3,0-4.2,1.5-4.8,3.6L12,20.8L22.8,13.6z"/>
        </g>
        <g>
          <path d="M24.4,12.2C24.8,13.1,25,14,25,15v7h1c2.8,0,5-2.2,5-5V7.9L24.4,12.2z"/>
        </g>
        <path d="M26,2H16h-2h-1c-2.2,0-4,1.8-4,4v2h7h1h1c2.2,0,4.1,1,5.4,2.5l7.4-4.9C30.2,3.5,28.3,2,26,2z"/>
    </svg>
  );
}