import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
