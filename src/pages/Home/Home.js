import { Helmet } from 'react-helmet-async';

import HomePage from 'components/HomePage/HomePage';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomePage />
    </div>
  );
}
