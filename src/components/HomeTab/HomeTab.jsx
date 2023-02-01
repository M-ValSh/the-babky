import { useDispatch, useSelector } from 'react-redux';
import {
  Amount,
  NoTransactions,
  ScrollTableBodyMob,
  ScrollTableMob,
  TDElementSum,
  TDelement,
  THelement,
  Table,
  TableCategory,
  TableHead,
  TableRow,
  TableRowDesk,
  TableTransactions,
  TableWrapMob,
  TableWrapper,
  TableWrapDesk,
} from './HomeTab.styled';
import { useMedia } from 'components/Media/useMedia';
import { selectTransactions } from 'redux/transactions/transactions-selectors';
import { selectTransactionCategories } from 'redux/transactionsCategories/transactionsCategories-selectors';
import { fetchTransactionCategories } from 'redux/transactionsCategories/transactionsCategories-operations';

import { useEffect } from 'react';
import { fetchTransactions } from 'redux/transactions/transactions-operations';

export const HomeTab = () => {
  const mobile = useMedia().isMobile;
  const tablet = useMedia().isTablet;
  const desktop = useMedia().isDesktop;
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const transactionsCategories = useSelector(selectTransactionCategories);

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchTransactionCategories());
  }, [dispatch]);

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate) ?? []
  );

  const dataCorrection = data => data.replaceAll('-', '.');

  const getCategoryName = id => {
    return transactionsCategories.find(el => el.id === id).name;
  };

  return (
    <>
      {mobile && (
        <TableWrapMob>
          <ScrollTableMob>
            <ScrollTableBodyMob>
              {sortedTransactions.length !== 0 &&
              transactionsCategories.length !== 0 ? (
                sortedTransactions.map(
                  ({
                    id,
                    transactionDate,
                    type,
                    categoryId,
                    comment,
                    amount,
                    balanceAfter,
                  }) => (
                    <TableWrapper key={id}>
                      <tbody>
                        <TableRow styleType={type.toLowerCase() === 'income'}>
                          <TableCategory>Date</TableCategory>
                          <TableTransactions>
                            {dataCorrection(transactionDate)}
                          </TableTransactions>
                        </TableRow>
                        <TableRow styleType={type.toLowerCase() === 'income'}>
                          <TableCategory>Type</TableCategory>
                          <TableTransactions>
                            {type !== 'EXPENSE' ? '+' : '-'}
                          </TableTransactions>
                        </TableRow>

                        <TableRow styleType={type.toLowerCase() === 'income'}>
                          <TableCategory>Category</TableCategory>
                          <TableTransactions>
                            {getCategoryName(categoryId)}
                          </TableTransactions>
                        </TableRow>
                        <TableRow styleType={type.toLowerCase() === 'income'}>
                          <TableCategory>Comment</TableCategory>
                          <TableTransactions>{comment}</TableTransactions>
                        </TableRow>
                        <TableRow styleType={type.toLowerCase() === 'income'}>
                          <TableCategory>Sum</TableCategory>
                          <Amount styleAmount={type.toLowerCase() === 'income'}>
                            {amount}
                          </Amount>
                        </TableRow>
                        <TableRow styleType={type.toLowerCase() === 'income'}>
                          <TableCategory>Balance</TableCategory>
                          <TableTransactions>{balanceAfter}</TableTransactions>
                        </TableRow>
                      </tbody>
                    </TableWrapper>
                  )
                )
              ) : (
                <p>No transactions</p>
              )}
            </ScrollTableBodyMob>
          </ScrollTableMob>
        </TableWrapMob>
      )}
      {/* tablet */}
      {tablet && (
        <>
          {sortedTransactions.length > 0 &&
          transactionsCategories.length !== 0 ? (
            <Table>
              <thead>
                <TableHead>
                  <THelement>Date</THelement>
                  <THelement>Type</THelement>
                  <THelement>Category</THelement>
                  <THelement>Comment</THelement>
                  <THelement>Sum</THelement>
                  <THelement>Balance</THelement>
                </TableHead>
              </thead>
              <tbody>
                {sortedTransactions.map(
                  ({
                    id,
                    transactionDate,
                    type,
                    categoryId,
                    comment,
                    amount,
                    balanceAfter,
                  }) => {
                    return (
                      <TableRowDesk key={id}>
                        <TDelement>{dataCorrection(transactionDate)}</TDelement>
                        <TDelement>
                          {type.toLowerCase() === 'income' ? '+' : '-'}
                        </TDelement>
                        <TDelement>{getCategoryName(categoryId)}</TDelement>
                        <TDelement>{comment}</TDelement>
                        <TDElementSum
                          isIncome={type.toLowerCase() === 'income'}
                        >
                          {amount}
                        </TDElementSum>
                        <TDelement>{balanceAfter}</TDelement>
                      </TableRowDesk>
                    );
                  }
                )}
              </tbody>
            </Table>
          ) : (
            <NoTransactions>
              There are no any transactions at the moment
            </NoTransactions>
          )}
        </>
      )}
      {/* desktop */}
      {desktop && (
        <TableWrapDesk>
          {sortedTransactions.length > 0 &&
          transactionsCategories.length !== 0 ? (
            <Table>
              <thead>
                <TableHead>
                  <THelement>Date</THelement>
                  <THelement>Type</THelement>
                  <THelement>Category</THelement>
                  <THelement>Comment</THelement>
                  <THelement>Sum</THelement>
                  <THelement>Balance</THelement>
                </TableHead>
              </thead>
              <tbody>
                {sortedTransactions.map(
                  ({
                    id,
                    transactionDate,
                    type,
                    categoryId,
                    comment,
                    amount,
                    balanceAfter,
                  }) => {
                    return (
                      <TableRowDesk key={id}>
                        <TDelement>{dataCorrection(transactionDate)}</TDelement>
                        <TDelement>
                          {type.toLowerCase() === 'income' ? '+' : '-'}
                        </TDelement>
                        <TDelement>{getCategoryName(categoryId)}</TDelement>
                        <TDelement>{comment}</TDelement>
                        <TDElementSum
                          isIncome={type.toLowerCase() === 'income'}
                        >
                          {amount}
                        </TDElementSum>
                        <TDelement>{balanceAfter}</TDelement>
                      </TableRowDesk>
                    );
                  }
                )}
              </tbody>
            </Table>
          ) : (
            <NoTransactions>
              There are no any transactions at the moment
            </NoTransactions>
          )}
        </TableWrapDesk>
      )}
    </>
  );
};
