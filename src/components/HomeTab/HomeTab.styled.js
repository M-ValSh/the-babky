import styled from '@emotion/styled';

// export const TransactionsList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   list-style: none;
// `;
// export const TransactionsItem = styled.li`
//   /* display: flex;
//   flex-direction: column;
//   gap: 8px; */
//   margin: 0 auto;
//   width: 280px;
//   border-radius: 10px;

//   &:first-of-type {
//     /* width: 120px; */
//     border-top-left-radius: 30px;
//     border-bottom-left-radius: 30px;
//   }
//   &:last-child {
//     /* width: 60px; */
//     border-top-right-radius: 30px;
//     border-bottom-right-radius: 30px;
//   }
// `;

export const Table = styled.table`
  table-layout: fixed;
  width: 704px;
  border-collapse: collapse;
  /* border: 3px solid purple; */
  margin: 0 auto;
`;

export const TableHead = styled.tr`
  background-color: #fff;
`;

export const TableRowDesk = styled.tr`
  border-bottom: 1px solid #dcdcdf;
  &:last-child {
    border-bottom: none;
  }
`;
export const THelement = styled.th`
  padding: 16px 20px;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 18px;
  color: #000000;

  &:nth-of-type(1) {
    width: 20%;
    border-radius: 30px 0 0 30px;
  }
  &:nth-of-type(2) {
    width: 11%;
    text-align: center;
  }
  &:nth-of-type(3) {
    width: 17%;
  }
  &:nth-of-type(4) {
    width: 25%;
  }
  &:nth-of-type(5) {
    width: 12%;
    text-align: right;
  }

  &:nth-of-type(6) {
    text-align: right;
    border-radius: 0 30px 30px 0;
  }
`;
export const TDelement = styled.td`
  padding: 14px 20px;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  font-size: 16px;
  color: #000000;

  &:nth-of-type(2) {
    text-align: center;
  }

  &:nth-of-type(6) {
    text-align: right;
  }
`;

export const TDElementSum = styled.td`
  color: ${props => (props.isIncome ? '#24CCA7' : '#FF6596')};
  text-align: right;
  padding: 14px 15px;
`;

export const NoTransactions = styled.p`
  text-align: center;
`;

//  стилі від Ксенії
export const TableWrapMob = styled.div`
  padding: 0 20px;
`;

export const TableWrapDesk = styled.div`
  padding: 46px 69px;
`;

export const TableRow = styled.tr`
  background-color: #fff;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.308);
  }

  &:not(:first-child, :last-child) {
    box-shadow: inset 4px 0px 0px
      ${({ styleType }) => (styleType ? '#24CCA7' : '#ff6596')};
  }

  &:first-child {
    & > td:first-child {
      border-top-left-radius: 10px;
      box-shadow: inset 4px 0px 0px
        ${({ styleType }) => (styleType ? '#24CCA7' : '#ff6596')};
    }
    & > td:nth-child(2) {
      border-top-right-radius: 10px;
    }
  }

  &:last-child {
    & > td:first-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: inset 4px 0px 0px
        ${({ styleType }) => (styleType ? '#24CCA7' : '#ff6596')};
    }
    & > td:nth-child(2) {
      border-bottom-right-radius: 10px;
    }
  }
`;

export const TableCategory = styled.td`
  text-align: left;
  font-weight: 700;
  z-index: -1;
  left: 10px;
  font-size: 18px;
  padding: 10px 15px;

  /* scpt */
`;

export const TableTransactions = styled.td`
  padding: 10px 15px;
  text-align: right;
  font-weight: 400;
  font-size: 16px;
`;

export const Amount = styled(TableTransactions)`
  color: ${({ styleAmount }) => (styleAmount ? '#24CCA7' : '#ff6596')};
`;

export const ScrollTableBodyMob = styled.div`
  overflow-x: auto;
  margin-top: 0px;
  margin-bottom: 20px;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 3px #24cca7;
  }
`;

export const TableWrapper = styled.table`
  border-collapse: collapse;
  margin-bottom: 8px;
  table-layout: fixed;
  text-align: center;
  width: 100%;
`;
export const ScrollTableMob = styled.div`
  box-sizing: inherit;
`;
