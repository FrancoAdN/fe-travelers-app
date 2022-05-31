import CSS from 'csstype';
import { BasicIconStyles, palette } from '../styles';
import { NavOptionsProps } from './nav-icons.interface';

export function InteractionsIcon(props: NavOptionsProps) {

  const styles: CSS.Properties = {
    fill: props.focused ? palette.EMERALD : palette.WHITE,
    ...BasicIconStyles,
  };

  return (
    <svg onClick={() => props.onClick()} version="1.1" style={styles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.144 137.144" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g>
        <g>
          <path d="m89.144,34.286c-7.316,0-16.331,6.298-20.572,13.715-4.67-7.417-13.256-13.715-20.572-13.715-12.781,0-21.422,8.658-20.572,19.286 0.193,2.407-0.043,4.531 0,6.429 0,19.013 41.144,42.858 41.144,42.858s41.143-23.845 41.143-42.858c0.044-1.898-0.193-4.022 0-6.429 0.851-10.628-7.79-19.286-20.571-19.286zm20.571-34.286h-82.286c-15.149,0-27.429,12.28-27.429,27.428v82.287c0,15.149 12.28,27.429 27.429,27.429h82.286c15.149,0 27.429-12.28 27.429-27.429v-82.287c0-15.148-12.28-27.428-27.429-27.428zm13.715,102.859c0,11.361-9.21,20.571-20.572,20.571h-68.572c-11.361,0-20.572-9.21-20.572-20.571v-68.573c0-11.361 9.21-20.572 20.572-20.572h68.572c11.361,0 20.572,9.211 20.572,20.572v68.573z"/>
        </g>
      </g>
    </svg>
  )
}