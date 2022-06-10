import { PublicationCardHeadStyles, PublicationHeadLocationStyles, PublicationHeadProfileWrapperStyles, PublicationHeadUserLocationWrapperStyles, PublicationHeadUserProfileStyles } from "../../styles";
import { ProfileCapsule } from "../common";

export function PublicationHead() {
  return (
    <div style={PublicationCardHeadStyles}>
      <div style={PublicationHeadProfileWrapperStyles}>
        <ProfileCapsule dimension="40px"  onClick={() => { console.log('click photo')}} />
      </div>
      <div style={PublicationHeadUserLocationWrapperStyles}>
        <div style={PublicationHeadUserProfileStyles}>fraancodinapoli</div>
        <div style={PublicationHeadLocationStyles}>Buenos Aires, Argentina</div>
      </div>

    </div>
  )
}

