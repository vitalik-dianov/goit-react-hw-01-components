import styled from 'styled-components';

export const HeadTable = styled.th`
  background-color: ${p => p.theme.colors.primary};
  padding-top: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[7]};
  padding-right: ${p => p.theme.space[7]};
`;
export const TransactionRow = styled.tr`
  :nth-child(odd) {
    background-color: ${p => p.theme.colors.backgroundWhite};
  }
  :nth-child(even) {
    background-color: ${p => p.theme.colors.backgroundSecondary};
  }
`;
export const Cell = styled.td`
  padding-top: ${p => p.theme.space[4]};
  padding-bottom: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[7]};
  padding-right: ${p => p.theme.space[7]};
`;
