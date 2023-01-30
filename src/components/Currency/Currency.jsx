import { bankApi } from 'index';
import { useEffect, useState } from 'react';
// import { Box } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import {
  TableWrapperDesc,
  THDesc,
  TableTextDesc,
  TRDesc,
  TableWrapperTablet,
  THTablet,
  TableTextTablet,
  TRTablet,
  TableWrapperMobile,
  THMobile,
  TableTextMobile,
  TRMobile,
} from './Currency.styled';
import CurrencyDesc from '../../assets/images/iMac-currency.svg';
import CurrencyTablet from '../../assets/images/tablet-currency.svg';
import CurrencyMobile from '../../assets/images/mobile-currency.svg';

// const ONE_HOUR = 3600000;
const ONE_HOUR = 86400000;
let timeDiff = 0;
let dataCurrency = {};

async function fetchAndFilter() {
  const { data } = await bankApi.get('');
  return data.filter(el => {
    if (el['currencyCodeA'] === 978 && el['currencyCodeB'] === 980) {
      return el;
    }
    if (el['currencyCodeA'] === 840 && el['currencyCodeB'] === 980) {
      return el;
    }
    return null;
  });
}

function writeToLS(dataCurrency) {
  const currentDate = new Date().getTime();
  localStorage.setItem(
    'currency',
    JSON.stringify({ dataCurrency, currentDate })
  );
}

export const Currency = () => {
  const media = useMedia();

  const [currency, setCurrency] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCurrency() {
      setIsLoading(true);

      try {
        // Checking if LS contains time and data
        if (localStorage.getItem('currency')) {
          const lsTimeParsed = JSON.parse(
            localStorage.getItem('currency')
          ).currentDate;
          const newDate = new Date().getTime();
          timeDiff = newDate - lsTimeParsed;
          // console.log('timeDiff', timeDiff);

          // IF time from last fetch is more them 1 hour
          // then do fetch
          if (timeDiff > ONE_HOUR) {
            dataCurrency = await fetchAndFilter();
            writeToLS(dataCurrency);
            return;
          }
          // IF time from last fetch if less them 1 hour
          // then read data from LocalStorage
          const lsCurrencyData = localStorage.getItem('currency');
          const lsCurrencyParsedData = JSON.parse(lsCurrencyData).dataCurrency;
          // console.log('lsCurrencyParsedData:', lsCurrencyParsedData);
          setCurrency(lsCurrencyParsedData);
          return;
        }
        dataCurrency = await fetchAndFilter();
        // console.log(dataCurrency);

        // Write time and fetchedData to LocalStorage
        writeToLS(dataCurrency);

        setCurrency(dataCurrency);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getCurrency();
  }, []);

  return (
    <>
      {media.isDesktop && (
        // <Box>
        <TableWrapperDesc bg={CurrencyDesc}>
          <table>
            <thead>
              <TRDesc>
                <THDesc>Currency</THDesc>
                <THDesc>Purchase</THDesc>
                <THDesc>Sale</THDesc>
              </TRDesc>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <TableTextDesc>Please wait...</TableTextDesc>
                </tr>
              )}
              {error && (
                <tr>
                  <TableTextDesc colSpan="3">
                    Too many requests. Sorry, but try again later
                  </TableTextDesc>
                </tr>
              )}

              {currency &&
                currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
                  const codeCurrency = currencyCodeA === 978 ? 'EUR' : 'USD';
                  const rateBuyCurrency = Number(rateBuy).toFixed(2);
                  const rateSellCurrency = Number(rateSell).toFixed(2);
                  return (
                    <TRDesc key={currencyCodeA}>
                      <TableTextDesc>{codeCurrency}</TableTextDesc>
                      <TableTextDesc>{rateBuyCurrency}</TableTextDesc>
                      <TableTextDesc>{rateSellCurrency}</TableTextDesc>
                    </TRDesc>
                  );
                })}
            </tbody>
          </table>
        </TableWrapperDesc>
        // </Box>
      )}

      {media.isTablet && (
        // <Box>
        <TableWrapperTablet bg={CurrencyTablet}>
          <table>
            <thead>
              <TRTablet>
                <THTablet>Currency</THTablet>
                <THTablet>Purchase</THTablet>
                <THTablet>Sale</THTablet>
              </TRTablet>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <TableTextTablet>Please wait...</TableTextTablet>
                </tr>
              )}
              {error && (
                <tr>
                  <TableTextTablet colSpan="3">
                    Too many requests. Sorry, but try again later
                  </TableTextTablet>
                </tr>
              )}

              {currency &&
                currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
                  const codeCurrency = currencyCodeA === 978 ? 'EUR' : 'USD';
                  const rateBuyCurrency = Number(rateBuy).toFixed(2);
                  const rateSellCurrency = Number(rateSell).toFixed(2);
                  return (
                    <TRTablet key={currencyCodeA}>
                      <TableTextTablet>{codeCurrency}</TableTextTablet>
                      <TableTextTablet>{rateBuyCurrency}</TableTextTablet>
                      <TableTextTablet>{rateSellCurrency}</TableTextTablet>
                    </TRTablet>
                  );
                })}
            </tbody>
          </table>
        </TableWrapperTablet>
        // </Box>
      )}

      {media.isMobile && (
        // <Box>
        <TableWrapperMobile bg={CurrencyMobile}>
          <table>
            <thead>
              <TRMobile>
                <THMobile>Currency</THMobile>
                <THMobile>Purchase</THMobile>
                <THMobile>Sale</THMobile>
              </TRMobile>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <TableTextMobile>Please wait...</TableTextMobile>
                </tr>
              )}
              {error && (
                <tr>
                  <TableTextMobile colSpan="3">
                    Too many requests. Sorry, but try again later
                  </TableTextMobile>
                </tr>
              )}

              {currency &&
                currency.map(({ currencyCodeA, rateBuy, rateSell }) => {
                  const codeCurrency = currencyCodeA === 978 ? 'EUR' : 'USD';
                  const rateBuyCurrency = Number(rateBuy).toFixed(2);
                  const rateSellCurrency = Number(rateSell).toFixed(2);
                  return (
                    <TRMobile key={currencyCodeA}>
                      <TableTextMobile>{codeCurrency}</TableTextMobile>
                      <TableTextMobile>{rateBuyCurrency}</TableTextMobile>
                      <TableTextMobile>{rateSellCurrency}</TableTextMobile>
                    </TRMobile>
                  );
                })}
            </tbody>
          </table>
        </TableWrapperMobile>
        // </Box>
      )}
    </>
  );
};
