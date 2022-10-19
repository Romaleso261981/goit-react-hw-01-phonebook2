import styled from 'styled-components';

export const Table = styled.table`
  width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
`;

export const TableHead = styled.thead`
  border-spacing: 0;
  color: white;
  text-transform: uppercase;
`;

export const TableTitle = styled.th`
  width: 250px;
  padding: 16px 0;
  border-right: 1px solid white;
  :last-child {
    border-right: 0;
  }
  background-color: #48cbdd;
`;

export const TableBody = styled.tbody`
  text-align: center;
  border-spacing: 0;
  border-top: 0;
  color: #5c6664;
`;

export const TableRow = styled.tr`
  background-color: #d6e1e0;
  :nth-last-child(2n) {
    background-color: #f1f8f7;
  }
`;

export const TableContent = styled.td`
  width: 250px;
  padding: 16px 0;
  border-right: 1px solid #c5cecd;
  :last-child {
    border-right: 0;
  }
`;
