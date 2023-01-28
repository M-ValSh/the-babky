import { bankApi } from 'index';
// import fetchCurrency from './fakeData.json';
// import { fetchCurrency } from '../../services/fetchCurrency';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
// import { useMedia } from 'components/Media/useMedia';
import { TableWrapperDesc, THdesc, TableText, TR } from './Currency.styled';
import CurrencyDesc from '../../assets/images/iMac-currency.svg';

export const Currency = () => {
  // const media = useMedia();

  const [currency, setCurrency] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCurrency() {
      // function getCurrency() {

      setIsLoading(true);
      try {
        const { data } = await bankApi.get('');
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

        // console.log('dataCurrency', dataCurrency);
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
        <TableWrapperDesc bg={CurrencyDesc}>
          <table>
            <thead>
              <TR>
                <THdesc>Currency</THdesc>
                <THdesc>Purchase</THdesc>
                <THdesc>Sale</THdesc>
              </TR>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td>Please wait...</td>
                </tr>
              )}
              {error && (
                <tr>
                  <td colSpan="3">
                    Too many requests. Sorry, but try again later
                  </td>
                </tr>
              )}

              {currency &&
                currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
                  const codeCurrency = currencyCodeA === 978 ? 'EUR' : 'USD';
                  const rateBuyCurrency = Number(rateBuy).toFixed(2);
                  const rateSellCurrency = Number(rateSell).toFixed(2);
                  return (
                    <TR key={currencyCodeA}>
                      <TableText>{codeCurrency}</TableText>
                      <TableText>{rateBuyCurrency}</TableText>
                      <TableText>{rateSellCurrency}</TableText>
                    </TR>
                  );
                })}
            </tbody>
          </table>
        </TableWrapperDesc>
      </Box>
    </>
  );
};
