import { CategoryTable } from 'components/CategoryTable/CategoryTable';
import { ChartComp } from 'components/Chart/ChartComp';
import {
  WrapperDesk,
  TableWrapperDesk,
  SelectWrapperDesk,
  ChartWrapperDesk,
  StatsTitleDesk,
  WrapperTablet,
  TableWrapperTablet,
  SelectWrapperTablet,
  ChartWrapperTablet,
  StatsTitleTablet,
  WrapperMobile,
  TableWrapperMobile,
  SelectWrapperMobile,
  ChartWrapperMobile,
  StatsTitleMobile,
} from './DiagramTab.styled';
import { Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { categoryColorSwitcher } from '../CategoryTable/categoryColorSwitcher.js';
import { useMedia } from 'components/Media/useMedia';
import {
  selectTrSummary,
  // selectIsLoading,
  // selectError,
  selectExpenseSummary,
  selectIncomeSummary,
} from 'redux/transactionsSumCont/transactionsSumCont-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsSummary } from 'redux/transactionsSumCont/transactionsSumCont-operations';

export const DiagramTab = () => {
  const dispatch = useDispatch();
  const media = useMedia();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const trSummary = useSelector(selectTrSummary);
  const expenseSummary = useSelector(selectExpenseSummary);
  const incomeSummary = useSelector(selectIncomeSummary);

  useEffect(() => {
    const fetchTransactionsData = ({ month, year }) => {
      dispatch(getTransactionsSummary({ month, year }));
    };

    if (month && year) {
      fetchTransactionsData({ month, year });
    }

    // console.log('trSummary :>> ', trSummary);
  }, [month, year, dispatch]);

  const initialData = {
    datasets: [
      {
        label: '# of Votes',
        data: [1],
        backgroundColor: ['#a6a6a6'],
        borderColor: ['transparent'],
      },
    ],
  };

  // PREPARE DATA FOR CHART DIAGRAM
  function prepareData() {
    const total = trSummary.map(el => el.total);
    const colors = trSummary.map(el => categoryColorSwitcher(el.name));

    let data = {
      datasets: [
        {
          data: total,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1,
        },
      ],
    };
    return data;
  }

  function handleChangeMonth(event) {
    setMonth(event.target.value);
  }

  function handleChangeYear(event) {
    setYear(event.target.value);
  }

  return (
    <>
      {media.isDesktop && (
        <WrapperDesk>
          <ChartWrapperDesk>
            <StatsTitleDesk>Statistics</StatsTitleDesk>
            {trSummary.length > 0 ? (
              <ChartComp data={prepareData()} />
            ) : (
              <ChartComp data={initialData} />
            )}
          </ChartWrapperDesk>
          <TableWrapperDesk>
            <SelectWrapperDesk>
              <Select
                variant="filled"
                placeholder="Month"
                onChange={handleChangeMonth}
              >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Select>
              <Select
                variant="filled"
                placeholder="Year"
                onChange={handleChangeYear}
              >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </Select>
            </SelectWrapperDesk>
            {trSummary.length > 0 ? (
              <CategoryTable
                categoriesSummary={trSummary}
                incomeSummary={incomeSummary}
                expenseSummary={expenseSummary}
              />
            ) : (
              <div>Loading...</div>
            )}
          </TableWrapperDesk>
        </WrapperDesk>
      )}
      {media.isTablet && (
        <WrapperTablet>
          <ChartWrapperTablet>
            <StatsTitleTablet>Statistics</StatsTitleTablet>
            {trSummary.length > 0 ? (
              <ChartComp data={prepareData()} />
            ) : (
              <ChartComp data={initialData} />
            )}
          </ChartWrapperTablet>
          <TableWrapperTablet>
            <SelectWrapperTablet>
              <Select
                variant="filled"
                placeholder="Month"
                onChange={handleChangeMonth}
              >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Select>
              <Select
                variant="filled"
                placeholder="Year"
                onChange={handleChangeYear}
              >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </Select>
            </SelectWrapperTablet>
            {trSummary.length > 0 ? (
              <CategoryTable
                categoriesSummary={trSummary}
                incomeSummary={incomeSummary}
                expenseSummary={expenseSummary}
              />
            ) : (
              <div>Loading...</div>
            )}
          </TableWrapperTablet>
        </WrapperTablet>
      )}
      {media.isMobile && (
        <WrapperMobile>
          <ChartWrapperMobile>
            <StatsTitleMobile>Statistics</StatsTitleMobile>
            {trSummary.length > 0 ? (
              <ChartComp data={prepareData()} />
            ) : (
              <ChartComp data={initialData} />
            )}
          </ChartWrapperMobile>
          <TableWrapperMobile>
            <SelectWrapperMobile>
              <Select
                variant="filled"
                placeholder="Month"
                onChange={handleChangeMonth}
              >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </Select>
              <Select
                variant="filled"
                placeholder="Year"
                onChange={handleChangeYear}
              >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </Select>
            </SelectWrapperMobile>
            {trSummary.length > 0 ? (
              <CategoryTable
                categoriesSummary={trSummary}
                incomeSummary={incomeSummary}
                expenseSummary={expenseSummary}
              />
            ) : (
              <div>Loading...</div>
            )}
          </TableWrapperMobile>
        </WrapperMobile>
      )}
    </>
  );
};
