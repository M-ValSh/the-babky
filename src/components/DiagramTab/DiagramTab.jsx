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
import fakeDataPereiodResp from './fakeDataPereiodResp.json';

export const DiagramTab = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [responce, setResponce] = useState({});
  console.log('month', month);
  console.log('year :>> ', year);
  // const [filteredCatsArr, setFilteredCatsArr] = useState([]);

  function handleChangeMonth(event) {
    setMonth(event.target.value);
  }

  function handleChangeYear(event) {
    setYear(event.target.value);
  }

  useEffect(() => {
    // console.log('month :>>', month);
    // console.log('year :>>', year);
    const response = fakeDataPereiodResp;
    console.log('response 34line', response);
    setResponce(response);
    // const fetchData = fakeDataPereiodResp(month, year);
  }, [month, year]);

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
        {/* СЮДИ ПРОКИДАТИ НЕ ФІЛЬТРОВАНІ ТРАНЗАКЦІЇ, А КАТЕГОРІЇ */}
        {console.log(
          'responce.categoriesSummary 74line:>> ',
          responce.categoriesSummary
        )}
        {responce.categoriesSummary.length > 0 ? (
          // <div>Дані прийшли</div>
          <CategoryTable responce={responce} />
        ) : (
          <div>Даних нема</div>
        )}
        {/* <CategoryTable /> */}
      </TableWrapperDesc>
    </WrapperDesc>
  );
};
