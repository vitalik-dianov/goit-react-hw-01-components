import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatsList, StatItem } from './Statistics.styled';

export const Statistics = ({ title, data }) => {
  return (
    <Box
      as="section"
      maxWidth={7}
      minWidth={5}
      minHeight={4}
      mt={5}
      mb={5}
      display="flex"
      justifyContent="flex-end"
      flexDirection="column"
      backgroundColor="backgroundWhite"
      boxShadow="all"
      textAlign="center"
    >
      {title && <h2>{title}</h2>}

      <StatsList>
        {data.map(el => (
          <StatItem key={el.id}>
            <span>{el.label}</span>
            <span>{el.percentage}%</span>
          </StatItem>
        ))}
      </StatsList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
