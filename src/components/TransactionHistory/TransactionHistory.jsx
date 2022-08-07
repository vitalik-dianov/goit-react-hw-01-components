import { PropTypes } from 'prop-types';
import { HeadTable, TransactionRow, Cell } from './TransactionHistory.styled';


export const TransactionHistory = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <HeadTable>Type</HeadTable>
          <HeadTable>Amount</HeadTable>
          <HeadTable>Currency</HeadTable>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
            <TransactionRow key={transaction.id}>
              <Cell>{transaction.type}</Cell>
              <Cell>{transaction.amount}</Cell>
              <Cell>{transaction.currency}</Cell>
            </TransactionRow>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
