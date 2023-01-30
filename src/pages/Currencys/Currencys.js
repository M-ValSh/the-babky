import { Helmet, HelmetProvider } from 'react-helmet-async';

import CurrencyPage from 'components/Currency Page/CurrencyPage';

export default function Currencys() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Cabinet</title>
        </Helmet>
        <CurrencyPage />
      </div>
    </HelmetProvider>
  );
}
