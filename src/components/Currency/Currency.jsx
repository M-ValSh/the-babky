// import { fetchCurrency } from '../../services/fetchCurrency';
import { useEffect, useState } from 'react';
import fetchCurrency from './fakeData.json';
import { Box } from '@chakra-ui/react';

export const Currency = () => {
  const [currency, setCurrency] = useState(null);
  // const [error, setError] = useState(false);

  useEffect(() => {
    // async function fetchCurrency() {
    function getCurrency() {
      try {
        // const data = await fetchCurrency();
        const data = fetchCurrency;
        const dataCurrency = data.filter(el => {
          if (el['currencyCodeA'] === 978 && el['currencyCodeB'] === 980) {
            return el;
          }
          if (el['currencyCodeA'] === 840 && el['currencyCodeB'] === 980) {
            return el;
          }
          return null;
        });
        setCurrency(dataCurrency);
      } catch {
        // setError(true);
        console.error();
      }
    }

    getCurrency();
  }, []);

  return (
    <>
      {currency && (
        <Box>
          <table>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Purchase</th>
                <th>Sale</th>
              </tr>
            </thead>
            <tbody>
              {currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
                const codeCurrency = currencyCodeA === 978 ? 'EUR' : 'USD';
                const rateBuyCurrency = Number(rateBuy).toFixed(2);
                const rateSellCurrency = Number(rateSell).toFixed(2);
                return (
                  <tr key={currencyCodeA}>
                    <td>{codeCurrency}</td>
                    <td>{rateBuyCurrency}</td>
                    <td>{rateSellCurrency}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Box>
      )}
    </>
  );
};
