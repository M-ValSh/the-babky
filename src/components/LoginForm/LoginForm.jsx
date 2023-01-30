import { React } from 'react';
import { useDispatch } from 'react-redux';
// import { useState } from "react";
import authOperations from '../../redux/auth/auth-operations';
// import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// import { Logo } from 'components/Headers/Headers.styled';
import WalletButton from '../WalletButton/WalletButton';


import { NavLink } from 'react-router-dom';
import { Input, InputGroup, Stack, InputLeftElement, Box } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useTheme } from '@chakra-ui/react';
import { Logo } from 'components/Logo/Logo';
import Frame from '../../img/illustrations/Frame.svg';

import {
  FormWrapper,
  Illustration,
  IllustrationDesc,
  IllustrationWrapper,
  LoginFormPage,
  FormBlock,
} from './LoginForm.styled';



const LoginForm = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

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
      // <div>
      <LoginFormPage>
        <IllustrationWrapper>
          <Illustration src={Frame} width='435px' alt='Guy shopping online via mobile' />
          <IllustrationDesc>Finance App</IllustrationDesc>
        </IllustrationWrapper>
        <FormWrapper>
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
              <Form >
                {/* <div>
                  <Logo />
                  <h1>Wallet</h1>
                </div> */}
                <FormBlock>
                  <Logo />
                  <Stack spacing={0} mt='60px' gap='40px'>
                    {/* <p className="text">You can sign in using email and password</p> */}
                    <InputGroup >
                      <InputLeftElement
                        pointerEvents="none"
                        children={<EmailIcon color="gray.300" />}
                      />
                      <Input
                        variant="flushed"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="E-mail"
                        className="input"
                        width='410px'
                        height='32px'
                        errorBorderColor={theme.colors.BgBtnRed}
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
                        placeholder="Password"
                        className="input"
                        width='410px'
                        height='32px'
                        errorBorderColor={theme.colors.BgBtnRed}
                      />
                    </InputGroup>
                  </Stack>
                  <Stack spacing={0} mt='42px'>
                    <WalletButton text='LOG IN'/>
                    <NavLink to="/register">
                      <WalletButton text='REGISTER' type='transparent'/>
                    </NavLink>
                  </Stack>
                </FormBlock>
              </Form>
              
            )}
          </Formik>
        </FormWrapper>
      </LoginFormPage>         
      // </div>
  );
};

export default LoginForm;
