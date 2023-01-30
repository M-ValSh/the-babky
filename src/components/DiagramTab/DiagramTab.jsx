import { CategoryTable } from 'components/CategoryTable/CategoryTable';
import { ChartComp } from 'components/Chart/ChartComp';
import {
  WrapperDesc,
  TableWrapperDesc,
  SelectWrapperDesc,
} from './DiagramTab.styled';
import { Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
// import fakeTransactions from './fakeTransactions.json';
// import fakeTACategories from './fakeTACategories.json';
import fakeDataPeriodResp from './fakeDataPeriodResp.json';

export const DiagramTab = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [responce, setResponce] = useState({});

  useEffect(() => {
    // console.log('Console, only after first render');
  }, []);

  useEffect(() => {
    delayedFetch();

    // const response = fakeDataPeriodResp;
    // console.log('response 33line', response);
    // setResponce(response);
    // console.log('Console after data update');
  }, [month, year, delayedFetch]);

  function delayedFetch() {
    window.setTimeout(setData, 1000);
  }

  function setData() {
    setResponce(fakeDataPeriodResp);
  }

  function handleChangeMonth(event) {
    setMonth(event.target.value);
  }

  function handleChangeYear(event) {
    setYear(event.target.value);
  }

  return (
    <WrapperDesc>
      <ChartComp />
      <TableWrapperDesc>
        <SelectWrapperDesc>
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
        </SelectWrapperDesc>
        {/* {responce.categoriesSummary.length > 0 ? (
          // <div>Дані прийшли</div>
          // <CategoryTable responce={responce} />
          <CategoryTable />
        ) : (
          <div>Даних нема</div>
        )} */}
        {responce && <CategoryTable responce={responce} />}
      </TableWrapperDesc>
    </WrapperDesc>
  );
};
