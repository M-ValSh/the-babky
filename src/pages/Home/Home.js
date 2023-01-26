import { Helmet, HelmetProvider } from 'react-helmet-async';

import LoginForm from 'components/LoginForm/LoginForm';

export default function Home() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
}
