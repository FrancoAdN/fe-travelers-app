import { useState } from "react";
import { useParams } from "react-router-dom";
import { MainContentWrapper, NavHome, ProfileHeader, ProfileMap, PublicationsWrapper } from "../../components";
import { ProfileView } from "../../enums";
import { ProfileMapIcon, ProfilePostIcon } from "../../icons";
import { PublicationArrayMock, UserMock } from "../../mocks";
import { HomeWrapperStyles,  PublicationSwitcherOptions, PublicationSwitcherStyles } from "../../styles";

export function Profile() {
  const { username } = useParams();
  const [view, setView] = useState<ProfileView>(ProfileView.Map);
  const changeView = (newView: ProfileView) => {
    setView(newView);
  }
  return (
    <div style={HomeWrapperStyles}>
      <NavHome />
      <MainContentWrapper>
        <ProfileHeader user={UserMock}/>
        <div style={PublicationSwitcherStyles}>
          <div style={PublicationSwitcherOptions(view === ProfileView.Map, true)}
          onClick={() => changeView(ProfileView.Map)}>
          <ProfileMapIcon isSelected={view === ProfileView.Map}/>
          </div>
          <div style={PublicationSwitcherOptions(view === ProfileView.Posts, false)}
            onClick={() => changeView(ProfileView.Posts)}>
            <ProfilePostIcon isSelected={view === ProfileView.Posts}/>
          </div>
        </div>
        {
          view === ProfileView.Map ?
            <ProfileMap username={username || ''} dimension={1100} selectable={false} /> 
            : <PublicationsWrapper publications={PublicationArrayMock} />
        }


      </MainContentWrapper>

      {/* <h3>ID: {username}</h3> */}
    </div>
  );;
}
