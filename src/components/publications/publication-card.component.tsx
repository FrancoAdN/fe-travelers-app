import { PublicationHead, PublicationImage, PublicationInteractionBox } from "../../atoms/publication";
import { PublicationDto } from "../../dtos";
import { PublicationCardStyles } from "../../styles";

export function PublicationCard(props: { publication: PublicationDto}) {
  return(
    <div style={PublicationCardStyles}>
      <PublicationHead />
      <PublicationImage images={props.publication.album.images}/>
      <PublicationInteractionBox />
    </div>
  )
}