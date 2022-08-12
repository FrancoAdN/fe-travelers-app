import { UserDto } from '../dtos';

export const UserMock = new UserDto({
  _id: 'any-user-id',
  name: 'Franco',
  lastname: 'di Napoli',
  username: 'franco.antu',
  email: 'francoadinapoli@gmail.com',
  avatar: 'https://travelers-image-s3-bucket.s3.amazonaws.com/default-profile-icon.jpg',
  following: [],
  followers: [],
  totalFollowing: 982,
  totalFollowers: 766,
  totalPosts: 17,
  biography:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dignissimos quisquam debitis! Incidunt asperiores at quis sint, rem ducimus nostrum magni. Ut quis officiis officia cupiditate fugit eaque rem dolore?',
});
