import styled from 'styled-components';

export const Status = styled.span`
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${p => p.theme.space[4]};
    width: ${p => p.theme.sizes[0]};
    height: ${p => p.theme.sizes[0]};
    background-color: ${p =>
      p.status ? p.theme.colors.turqtoise : p.theme.colors.red};
    border-radius: ${p => p.theme.radii.round};
  }
`;

export const FriendItem = styled.li`
  position: relative;
  margin: ${p => p.theme.space[3]};
  padding: ${p => p.theme.space[3]};
  min-width: ${p => p.theme.sizes[5]};
  display: flex;
  gap: ${p => p.theme.space[6]};
  box-shadow: ${p => p.theme.shadows.all};
  background-color: ${p => p.theme.colors.backgroundWhite};
`;
