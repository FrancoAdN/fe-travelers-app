import { NavHome, PublicationsWrapper } from "../../components";
import { HomeWrapperStyles } from "../../styles";

export function Home() {
  return (
  <div style={HomeWrapperStyles}>
    <NavHome />
    <PublicationsWrapper />
  </div>
  );
}