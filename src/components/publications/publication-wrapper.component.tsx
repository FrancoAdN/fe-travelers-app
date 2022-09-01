import { BasicFlexBox, PublicationsWrapperStyles } from "../../styles";
import { PublicationDto } from '../../dtos';
import { PublicationCard } from "./publication-card.component";
import { FlexDirectionEnum } from "../../enums";

interface PublicationsWrapperProps {
  publications: PublicationDto[]
}
export function PublicationsWrapper({publications}:PublicationsWrapperProps) {
  return (
    <div style={{
      width: '100%',
      height: 'max-content',
      ...BasicFlexBox(FlexDirectionEnum.Row),
      justifyContent: 'center'
    }}>
    <div style={PublicationsWrapperStyles}>
      {
        publications.map((pub) => 
          <PublicationCard key={pub.id} publication={pub}/>
        )
      }
    </div>
    </div>

  );
}

