import { Helmet, HelmetProvider } from 'react-helmet-async';

import StatisticsPage from 'components/StatisticsPage/StatisticsPage';

export default function Statistics() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Cabinet</title>
        </Helmet>
        <StatisticsPage />
      </div>
    </HelmetProvider>
  );
}
