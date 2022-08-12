import { PublicationsWrapperStyles } from "../../styles";
import { PublicationDto } from '../../dtos';
import { PublicationCard } from "./publication-card.component";

interface PublicationsWrapperProps {
  publications: PublicationDto[]
}
export function PublicationsWrapper({publications}:PublicationsWrapperProps) {
  return (
    <div style={PublicationsWrapperStyles}>
      {
        publications.map((pub) => 
          <PublicationCard key={pub.id} publication={pub}/>
        )
      }
    </div>
  );
}

