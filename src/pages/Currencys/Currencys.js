import { Helmet } from 'react-helmet-async';

import CurrencyPage from 'components/Currency Page/CurrencyPage';

export default function Currencys() {
  return (
    <div>
      <Helmet>
        <title>Cabinet</title>
      </Helmet>
      <CurrencyPage />
    </div>
  );
}
