export class UserDto {
  _id: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
  avatar: string;
  following: string[];
  followers: string[];
  totalFollowing: number;
  totalFollowers: number;
  totalPosts: number;
  biography: string;

  get fullname() {
    return `${this.name} ${this.lastname}`;
  }
  constructor(user: Partial<UserDto> = {}) {
    Object.assign(this, user);
  }
}
