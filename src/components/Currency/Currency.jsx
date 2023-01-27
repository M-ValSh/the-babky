import { fetchCurrency } from '../../services/fetchCurrency';
import { useEffect, useState } from 'react';
// import fetchCurrency from './fakeData.json';
import { Box } from '@chakra-ui/react';

export const Currency = () => {
  const [currency, setCurrency] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCurrency() {
      // function getCurrency() {

      setIsLoading(true);
      try {
        const { data } = await fetchCurrency();
        // const data = fetchCurrency;
        const dataCurrency = data.filter(el => {
          if (el['currencyCodeA'] === 978 && el['currencyCodeB'] === 980) {
            return el;
          }
          if (el['currencyCodeA'] === 840 && el['currencyCodeB'] === 980) {
            return el;
          }
          return null;
        });

        console.log('dataCurrency', dataCurrency);
        setCurrency(dataCurrency);
      } catch {
        setError(true);
        // console.error();
      } finally {
        setIsLoading(false);
      }
    }

    getCurrency();
  }, []);

  return (
    <>
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
            {isLoading && (
              <tr>
                <td>Please wait...</td>
              </tr>
            )}
            {error && (
              <tr>
                <td>Too many requests. Sorry, but try again later</td>
              </tr>
            )}

            {currency &&
              currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
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
    </>
  );
};
