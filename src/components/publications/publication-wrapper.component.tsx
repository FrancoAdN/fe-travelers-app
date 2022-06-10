import { PublicationsWrapperStyles } from "../../styles";
import {PublicationDto} from '../../dtos';
import { PublicationCard } from "./publication-card.component";

export function PublicationsWrapper() {
  const images = [
    'https://www.w3schools.com/css/img_5terre.jpg',
    'https://www.w3schools.com/css/img_forest.jpg',
    'https://www.w3schools.com/css/img_lights.jpg',
    'https://www.w3schools.com/css/img_mountains.jpg',
  ]

  const publication = new PublicationDto({
    album: {
      images,
      id: 'alb_id',
      location: 'Buenos Aires, Argentina',
      rate: 3,
    },
    id:'pub-id',
    comments: ['comment-1', 'comment-2', 'comment-3'],
    likes: ['like-1', 'like-1', 'like-1', 'like-1', 'like-1', 'like-1', 'like-1','like-1',],
  })
  const publication2 = new PublicationDto({
    album: {
      images: [
        'https://www.w3schools.com/css/img_lights.jpg',
        'https://www.w3schools.com/css/img_mountains.jpg',
      ],
      id: 'alb_id',
      location: 'Buenos Aires, Argentina',
      rate: 3,
    },
    id:'pub-id-2',
    comments: ['comment-1', 'comment-2', 'comment-3'],
    likes: ['like-1', 'like-1', 'like-1', 'like-1', 'like-1', 'like-1', 'like-1','like-1',],
  })

  const publications: PublicationDto[] = [publication, publication2];

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

