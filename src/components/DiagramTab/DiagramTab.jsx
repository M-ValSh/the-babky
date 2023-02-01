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
  NoDataDesk,
  NoDataTablet,
  NoDataMobile,
  ChartCompLoadingDesk,
  ChartCompLoadingTablet,
  ChartCompLoadingMobile,
  MySelect,
} from './DiagramTab.styled';
// import { Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { categoryColorSwitcher } from '../CategoryTable/categoryColorSwitcher.js';
import { useMedia } from 'components/Media/useMedia';
import {
  selectTrSummary,
  selectIsLoading,
  selectError,
  selectExpenseSummary,
  selectIncomeSummary,
} from 'redux/transactionsSumCont/transactionsSumCont-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsSummary } from 'redux/transactionsSumCont/transactionsSumCont-operations';
import { MoonLoader } from 'react-spinners';
import { SlArrowDown } from 'react-icons/sl';

export const DiagramTab = () => {
  const dispatch = useDispatch();
  const media = useMedia();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const trSummary = useSelector(selectTrSummary);
  const expenseSummary = useSelector(selectExpenseSummary);
  const incomeSummary = useSelector(selectIncomeSummary);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const fetchTransactionsData = ({ month, year }) => {
      dispatch(getTransactionsSummary({ month, year }));
    };

    if (month && year) {
      fetchTransactionsData({ month, year });
    }
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

            {/* INITIAL MOMENT OF TIME */}
            {!isLoading && (month.length === 0 || year.length === 0) && (
              <ChartComp data={initialData} />
            )}

            {/* WHEN SELECTED PERIOD BUT NO RESULTS */}
            {!isLoading && month && year && trSummary.length === 0 && (
              <ChartComp data={initialData} />
            )}

            {/* WHEN THERE ARE RESULTS */}
            {!isLoading &&
              trSummary.length > 0 &&
              month.length > 0 &&
              year.length > 0 && <ChartComp data={prepareData()} />}

            {/* IN CASE OF LOADING */}
            {isLoading && !error && (
              <ChartCompLoadingDesk>
                <MoonLoader color="#36d7b7" />
              </ChartCompLoadingDesk>
            )}
          </ChartWrapperDesk>
          <TableWrapperDesk>
            <SelectWrapperDesk>
              <MySelect
                variant="mySelectStyle"
                icon={<SlArrowDown fill="#000" />}
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
              </MySelect>
              <MySelect
                variant="mySelectStyle"
                icon={<SlArrowDown fill="#000" />}
                placeholder="Year"
                onChange={handleChangeYear}
              >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </MySelect>
            </SelectWrapperDesk>

            {/* INITIAL MOMENT OF TIME */}
            {!isLoading && (month.length === 0 || year.length === 0) && (
              <NoDataDesk>
                Please, select period above to see transactions
              </NoDataDesk>
            )}

            {/* WHEN SELECTED PERIOD BUT NO RESULTS */}
            {!isLoading && month && year && trSummary.length === 0 && (
              <NoDataDesk>
                Sorry, but there are no transactions during that period
              </NoDataDesk>
            )}

            {/* WHEN THERE ARE RESULTS */}
            {!isLoading &&
              trSummary.length > 0 &&
              month.length > 0 &&
              year.length > 0 && (
                <CategoryTable
                  categoriesSummary={trSummary}
                  incomeSummary={incomeSummary}
                  expenseSummary={expenseSummary}
                />
              )}
          </TableWrapperDesk>
        </WrapperDesk>
      )}
      {media.isTablet && (
        <WrapperTablet>
          <ChartWrapperTablet>
            <StatsTitleTablet>Statistics</StatsTitleTablet>
            {/* INITIAL MOMENT OF TIME */}
            {!isLoading && (month.length === 0 || year.length === 0) && (
              <ChartComp data={initialData} />
            )}

            {/* WHEN SELECTED PERIOD BUT NO RESULTS */}
            {!isLoading && month && year && trSummary.length === 0 && (
              <ChartComp data={initialData} />
            )}

            {/* WHEN THERE ARE RESULTS */}
            {!isLoading &&
              trSummary.length > 0 &&
              month.length > 0 &&
              year.length > 0 && <ChartComp data={prepareData()} />}

            {/* IN CASE OF LOADING */}
            {isLoading && !error && (
              <ChartCompLoadingTablet>
                <MoonLoader color="#36d7b7" />
              </ChartCompLoadingTablet>
            )}
          </ChartWrapperTablet>
          <TableWrapperTablet>
            <SelectWrapperTablet>
              <MySelect
                variant="mySelectStyle"
                icon={<SlArrowDown fill="#000" />}
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
              </MySelect>
              <MySelect
                variant="mySelectStyle"
                icon={<SlArrowDown fill="#000" />}
                placeholder="Year"
                onChange={handleChangeYear}
              >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </MySelect>
            </SelectWrapperTablet>
            {/* INITIAL MOMENT OF TIME */}
            {!isLoading && (month.length === 0 || year.length === 0) && (
              <NoDataTablet>
                Please, select period above to see transactions
              </NoDataTablet>
            )}

            {/* WHEN SELECTED PERIOD BUT NO RESULTS */}
            {!isLoading && month && year && trSummary.length === 0 && (
              <NoDataTablet>
                Sorry, but there are no transactions during that period
              </NoDataTablet>
            )}

            {/* WHEN THERE ARE RESULTS */}
            {!isLoading &&
              trSummary.length > 0 &&
              month.length > 0 &&
              year.length > 0 && (
                <CategoryTable
                  categoriesSummary={trSummary}
                  incomeSummary={incomeSummary}
                  expenseSummary={expenseSummary}
                />
              )}
          </TableWrapperTablet>
        </WrapperTablet>
      )}
      {media.isMobile && (
        <WrapperMobile>
          <ChartWrapperMobile>
            <StatsTitleMobile>Statistics</StatsTitleMobile>
            {/* INITIAL MOMENT OF TIME */}
            {!isLoading && (month.length === 0 || year.length === 0) && (
              <ChartComp data={initialData} />
            )}

            {/* WHEN SELECTED PERIOD BUT NO RESULTS */}
            {!isLoading && month && year && trSummary.length === 0 && (
              <ChartComp data={initialData} />
            )}

            {/* WHEN THERE ARE RESULTS */}
            {!isLoading &&
              trSummary.length > 0 &&
              month.length > 0 &&
              year.length > 0 && <ChartComp data={prepareData()} />}

            {/* IN CASE OF LOADING */}
            {isLoading && !error && (
              <ChartCompLoadingMobile>
                <MoonLoader color="#36d7b7" />
              </ChartCompLoadingMobile>
            )}
          </ChartWrapperMobile>
          <TableWrapperMobile>
            <SelectWrapperMobile>
              <MySelect
                variant="mySelectStyle"
                icon={<SlArrowDown fill="#000" />}
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
              </MySelect>
              <MySelect
                variant="mySelectStyle"
                icon={<SlArrowDown fill="#000" />}
                placeholder="Year"
                onChange={handleChangeYear}
              >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </MySelect>
            </SelectWrapperMobile>
            {/* INITIAL MOMENT OF TIME */}
            {!isLoading && (month.length === 0 || year.length === 0) && (
              <NoDataMobile>
                Please, select period above to see transactions
              </NoDataMobile>
            )}

            {/* WHEN SELECTED PERIOD BUT NO RESULTS */}
            {!isLoading && month && year && trSummary.length === 0 && (
              <NoDataMobile>
                Sorry, but there are no transactions during that period
              </NoDataMobile>
            )}

            {/* WHEN THERE ARE RESULTS */}
            {!isLoading &&
              trSummary.length > 0 &&
              month.length > 0 &&
              year.length > 0 && (
                <CategoryTable
                  categoriesSummary={trSummary}
                  incomeSummary={incomeSummary}
                  expenseSummary={expenseSummary}
                />
              )}
          </TableWrapperMobile>
        </WrapperMobile>
      )}
    </>
  );
};
