// import { useParams } from "react-router-dom";
import { MainContentWrapper, NavHome, ProfileHeader, PublicationsWrapper } from "../../components";
import { PublicationArrayMock, UserMock } from "../../mocks";
import { HomeWrapperStyles } from "../../styles";

export function Profile() {
  // const { username } = useParams();

  return (
    <div style={HomeWrapperStyles}>
      <NavHome />
      <MainContentWrapper>
        <ProfileHeader user={UserMock}/>
        <PublicationsWrapper publications={PublicationArrayMock} />
      </MainContentWrapper>

      {/* <h3>ID: {username}</h3> */}
    </div>
  );;
}
