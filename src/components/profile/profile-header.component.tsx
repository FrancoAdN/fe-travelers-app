import { ProfileCapsule } from "../../atoms";
import { UserDto } from "../../dtos";
import { FlexDirectionEnum } from "../../enums";
import { 
  BasicFlexBox,
  ProfileBiographyInfoWrapperStyles,
  ProfileButtonsStyles,
  ProfileButtonsWrapperStyles,
  ProfileFollowingInfoWrapperStyles,
  ProfileHeaderWrapperStyles,
  ProfileInformationWrapperStyles,
  ProfilePictureWrapperStyles,
  ProfileUsernameStyle,
  ProfileUsernameWrapperStyles 
} from "../../styles";


interface FollowingInfoProps {
  infoNumber:number;
  infoName:string;
}
function FollowingInfo({infoNumber, infoName}: FollowingInfoProps) {
  const infoStyle = {
    height: '20px',
    width: '120px',
    ...BasicFlexBox(FlexDirectionEnum.Row),
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  return (
    <div style={infoStyle}>
      <p><b>{infoNumber}</b> {infoName}</p>
    </div>
  )
}

interface ProfileHeaderProps {
  user: UserDto;
}

export function ProfileHeader({user}: ProfileHeaderProps) {
  return (
    <div style={ProfileHeaderWrapperStyles}>
      <div style={ProfilePictureWrapperStyles}>
        <ProfileCapsule dimension="150px"  profilePhoto={user.avatar} onClick={() => {}} />
      </div>
      <div style={ProfileInformationWrapperStyles}>
        <div style={ProfileUsernameWrapperStyles}>
          <div style={ProfileUsernameStyle}>
            <h3>{user.username}</h3>
          </div>

          <div style={ProfileButtonsWrapperStyles}>
            <button style={ProfileButtonsStyles}>Message</button>
            <button style={ProfileButtonsStyles}>Follow</button>
          </div>
        </div>
        <div style={ProfileFollowingInfoWrapperStyles}>
          <FollowingInfo infoName="post" infoNumber={user.totalPosts}/>
          <FollowingInfo infoName="followers" infoNumber={user.totalFollowers}/>
          <FollowingInfo infoName="following" infoNumber={user.totalFollowing}/>
        </div>
        <div style={ProfileBiographyInfoWrapperStyles}>
          <h5>{user.fullname}</h5>
          <p style={{fontSize: '12px'}}>{user.biography}</p>
        </div>
      </div>
    </div>
  )
}