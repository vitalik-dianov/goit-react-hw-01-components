import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Avatar, Stats, StatsItem } from './Profile.styled';
import defaultImage from '../../image/defaultImage.jpg';
export const Profile = ({
  username,
  tag,
  location,
  avatar = defaultImage,
  stats,
}) => {
  return (
    <Box
      maxWidth={7}
      minWidth={5}
      display="flex"
      flexDirection="column"
      backgroundColor="backgroundWhite"
      boxShadow="all"
    >
      <Box pt={4} display="flex" flexDirection="column" alignItems="center">
        <Avatar src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>{`@${tag}`}</p>
        <p>{location}</p>
      </Box>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </StatsItem>
      </Stats>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
