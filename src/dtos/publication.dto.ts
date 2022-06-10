import { AlbumDto } from './album.dto';

export class PublicationDto {
  id: string;
  captions: string;
  likes: string[];
  comments: string[];
  album: AlbumDto;

  constructor(publication: Partial<PublicationDto> = {}) {
    Object.assign(this, publication);
  }
}
