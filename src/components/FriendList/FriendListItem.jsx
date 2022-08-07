import { Status, FriendItem } from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  return (
    <FriendItem>
      <Status status={friend.isOnline}></Status>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </FriendItem>
  );
};
