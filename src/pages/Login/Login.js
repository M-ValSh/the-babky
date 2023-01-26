import { Helmet, HelmetProvider } from 'react-helmet-async';

import LoginForm from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
}
