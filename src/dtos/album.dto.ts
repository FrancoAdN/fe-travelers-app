export class AlbumDto {
  id: string;
  images: string[];
  rate: number;
  location: string;

  constructor(album: Partial<AlbumDto> = {}) {
    Object.assign(this, album);
  }
}
