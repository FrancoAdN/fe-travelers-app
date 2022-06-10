import { palette } from "../styles";

export function LeftArrowIcon() {
  const dimmension = '15px'
  return (
    <svg width={dimmension} height={dimmension} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7.5L11 0V15L3 7.5Z" fill={palette.BLACK_GREY}/>
    </svg>
  );
}