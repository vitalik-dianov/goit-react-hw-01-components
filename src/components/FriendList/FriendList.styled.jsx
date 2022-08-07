import styled from 'styled-components';

export const Friends = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]};
  margin: ${p => p.theme.space[0]};
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;
