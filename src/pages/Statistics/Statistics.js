import { Helmet } from 'react-helmet-async';

import StatisticsPage from 'components/StatisticsPage/StatisticsPage';

export default function Statistics() {
  return (
    <div>
      <Helmet>
        <title>Cabinet</title>
      </Helmet>
      <StatisticsPage />
    </div>
  );
}
