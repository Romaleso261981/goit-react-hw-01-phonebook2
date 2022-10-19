import PropTypes from 'prop-types';
import {
  StatisticSection,
  Title,
  StatisticList,
  StatisticItem,
  Label,
  Percentage,
} from './StatisticsStyled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <Title>{title}</Title>}

      <StatisticList>
        {stats.map(stat => {
          return (
            <StatisticItem key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
