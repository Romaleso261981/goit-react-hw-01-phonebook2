import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableTitle,
  TableBody,
  TableRow,
  TableContent,
} from './TransactionHistoryStyled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(item => {
          return (
            <TableRow key={item.id}>
              <TableContent>{item.type}</TableContent>
              <TableContent>{item.amount}</TableContent>
              <TableContent>{item.currency}</TableContent>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
