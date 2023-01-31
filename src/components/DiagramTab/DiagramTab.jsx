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
import fakeDataPeriodResp from './fakeDataPeriodResp.json';
import { useMedia } from 'components/Media/useMedia';

export const DiagramTab = () => {
  const media = useMedia();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [categoriesSummary, setCategoriesSummary] = useState([]);
  const [incomeSummary, setIncomeSummary] = useState(null);
  const [expenseSummary, setExpenseSummary] = useState(null);

  useEffect(() => {
    function delayedFetch() {
      window.setTimeout(setData, 1000);
    }

    function setData() {
      setCategoriesSummary(fakeDataPeriodResp.categoriesSummary);
      setIncomeSummary(fakeDataPeriodResp.incomeSummary);
      setExpenseSummary(fakeDataPeriodResp.expenseSummary);
    }

    delayedFetch();
  }, [month, year]);

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
    const total = categoriesSummary.map(el => el.total);
    const colors = categoriesSummary.map(el => categoryColorSwitcher(el.name));

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
            {categoriesSummary.length > 0 ? (
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
            {categoriesSummary.length > 0 ? (
              <CategoryTable
                categoriesSummary={categoriesSummary}
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
            {categoriesSummary.length > 0 ? (
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
            {categoriesSummary.length > 0 ? (
              <CategoryTable
                categoriesSummary={categoriesSummary}
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
            {categoriesSummary.length > 0 ? (
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
            {categoriesSummary.length > 0 ? (
              <CategoryTable
                categoriesSummary={categoriesSummary}
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
