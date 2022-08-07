import styled from 'styled-components';

// export const Wrapper = styled.div`
//   padding: 40px;
//   width: 300px;
// `;
export const Avatar = styled.img`
  width: ${p => p.theme.sizes[4]};
  border-radius: ${p => p.theme.radii.round};
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;
export const StatsItem = styled.li`
  border-right: ${p => p.theme.borders.normal};
  border-top: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  width: 100%;
  padding-top: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[4]};
  :last-child {
    border-right: ${p => p.theme.borders.none};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
