import { Helmet, HelmetProvider } from 'react-helmet-async';

import HomePage from 'components/HomePage/HomePage';

export default function Home() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <HomePage />
      </div>
    </HelmetProvider>
  );
}
