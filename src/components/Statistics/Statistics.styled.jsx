import styled from 'styled-components';
import { getRandomHexColor } from './getRandomColorHex';

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${p => p.theme.space[4]};
  background-color: ${getRandomHexColor};
`;
