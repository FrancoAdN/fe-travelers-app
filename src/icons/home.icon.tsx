import CSS from 'csstype';
import { BasicIconStyles, palette } from '../styles';
import { NavOptionsProps } from './nav-icons.interface';

export function HomeIcon(props: NavOptionsProps) {
  const styles: CSS.Properties = {
    fill: props.focused ? palette.EMERALD : palette.WHITE,
    ...BasicIconStyles,
  };
  
  return (
    <svg onClick={() => props.onClick()} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 477.863 477.863" xmlSpace="preserve" style={styles}>
        <g>
          <g>
            <path d="M472.864,226.864l-34.133-34.133L250.998,4.997c-6.665-6.663-17.468-6.663-24.132,0L39.132,192.73L4.999,226.864
              c-6.548,6.78-6.361,17.584,0.419,24.132c6.614,6.388,17.099,6.388,23.713,0l5.001-5.001v214.801
              c0,9.426,7.641,17.067,17.067,17.067h102.4V290.13c0-9.426,7.641-17.067,17.067-17.067h136.533
              c9.426,0,17.067,7.641,17.067,17.067v187.733h102.4c9.426,0,17.067-7.641,17.067-17.067V245.995l5,5.001
              c6.78,6.548,17.584,6.36,24.132-0.419C479.252,243.963,479.252,233.477,472.864,226.864z"/>
          </g>
        </g>
    </svg>
  )
}