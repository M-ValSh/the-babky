import { React } from 'react';
import { useDispatch } from 'react-redux';
// import { useState } from "react";
import authOperations from '../../redux/auth/auth-operations';
// import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Logo } from 'components/Headers/Headers.styled';
import WalletButton from '../WalletButton/WalletButton';
import { NavLink } from 'react-router-dom';
import { Input, InputGroup, Stack, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

const LoginForm = () => {
  const dispatch = useDispatch();

  const schema = Yup.object({
    email: Yup.string()
      .email('Please enter your email')
      .required('This field is required'),
    password: Yup.string()
      .min(6, 'At least 6 characters')
      .max(12, 'maximum of 12 characters')
      .required('This field is required'),
  });

  const handleLogin = ({ email, password }) => {
    // evt.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={handleLogin}
        validationSchema={schema}
      >
        {({ handleChange, handleBlur, values, isValid, dirty }) => (
          <Form>
            <div>
              <Logo />
              <h1>Wallet</h1>
            </div>
            <Stack spacing={4}>
              <p className="text">You can sign in using email and password</p>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="E-mail"
                  className="input"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="gray.300" />}
                />
                <Input
                  variant="flushed"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Пароль"
                  className="input"
                />
              </InputGroup>
            </Stack>
            <div>
              <WalletButton />
              <NavLink to="/register" className="main_btn">
                Registration
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
