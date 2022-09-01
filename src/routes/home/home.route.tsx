import { NavHome, PublicationsWrapper, MainContentWrapper } from "../../components";
import { PublicationArrayMock } from "../../mocks";
import { HomeWrapperStyles } from "../../styles";

export function Home() {
  return (
    <div style={HomeWrapperStyles}>
      <NavHome />
      <MainContentWrapper>
        <PublicationsWrapper publications={PublicationArrayMock}/>
      </MainContentWrapper>
    </div>
  );
}