import { MainContentWrapperStyles } from "../../styles";

interface ContentProps {
  children: React.ReactNode
}
export function MainContentWrapper({children}:ContentProps) {
  return (
    <div style={MainContentWrapperStyles}>
      {children}
    </div>
  )
}