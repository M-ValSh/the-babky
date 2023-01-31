import { React } from 'react';
import { useDispatch } from 'react-redux';
// import { useState } from "react";
import authOperations from '../../redux/auth/auth-operations';
// import { NavLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// import { Logo } from 'components/Headers/Headers.styled';
import WalletButton from '../WalletButton/WalletButton';
import { useMedia } from 'components/Media/useMedia';

import { NavLink } from 'react-router-dom';
import {
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  GridItem,
  Grid,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useTheme } from '@chakra-ui/react';
import { Logo } from 'components/Logo/Logo';
import Frame from '../../img/illustrations/Frame.svg';
import pink_ellipse from '../../img/figures/pink_ellipse.svg';
import purple_ellipse from '../../img/figures/purple_ellipse.svg';

import {
  Illustration,
  IllustrationDesc,
  IllustrationWrapper,
  FormBlock,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const media = useMedia();
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
    <>
      {media.isDesktop && (
        <Grid
          templateAreas={`
                        "nav main"
                        "nav main"`}
          gridTemplateRows={'1fr 30px'}
          gridTemplateColumns={'550px 1fr'}
          gap="0"
          h="100vh"
          backgroundColor="mainBgUnderColor"
          backgroundRepeat="no-repeat, no-repeat"
          backgroundImage={`url(${pink_ellipse}), url(${purple_ellipse})`}
          backgroundPosition="top -150px right -150px, bottom -150px left -150px"
          // color='blackAlpha.700'
          // fontWeight='bold'
        >
          {/* <LoginFormPage> */}
          <GridItem pl="2" area={'nav'}>
            <IllustrationWrapper>
              <Illustration
                src={Frame}
                width="435px"
                alt="Guy shopping online via mobile"
              />
              <IllustrationDesc>Finance App</IllustrationDesc>
            </IllustrationWrapper>
          </GridItem>
          {/* <IllustrationWrapper> */}
          {/* <Illustration src={Frame} width='435px' alt='Guy shopping online via mobile' /> */}
          {/* <IllustrationDesc>Finance App</IllustrationDesc> */}
          {/* </IllustrationWrapper> */}
          {/* <FormWrapper> */}
          <GridItem
            pl="2"
            area={'main'}
            backgroundColor="mainBgLighter"
            backdropFilter="blur(25px)"
          >
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
                  {/* <div>
                  <Logo />
                  <h1>Wallet</h1>
                </div> */}

                <FormBlock>
                  <Logo />
                  <Stack spacing={0} mt='60px' gap='40px'>
                    {/* <p className="text">You can sign in using email and password</p> */}
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<EmailIcon color={theme.colors.InputColor} w='24px' h='24px' ml='12px'/>}
                        // pb='5px'
                      />
                      <Input
                        variant="flushed"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="E-mail"
                        _placeholder={ theme.placeholderCss }
                        borderColor= {theme.colors.InputColor}
                        pl='60px'
                        className="input"
                        width='410px'
                        height='40px'
                        errorBorderColor={theme.colors.BgBtnRed}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<LockIcon color={theme.colors.InputColor} w='24px' h='24px' ml='12px' />}
                      />
                      <Input
                        variant="flushed"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Password"
                        _placeholder={ theme.placeholderCss }
                        borderColor= {theme.colors.InputColor}
                        pl='60px'
                        className="input"
                        width='410px'
                        height='40px'
                        errorBorderColor={theme.colors.BgBtnRed}
                      />
                    </InputGroup>
                  </Stack>
                  <Stack spacing={0} mt='42px'>
                    <WalletButton text='LOG IN'/>
                    <NavLink to="/register">
                      <WalletButton text='REGISTER' styleType='transparent'/>
                    </NavLink>
                  </Stack>
                </FormBlock>
              </Form>
              
            )}
          </Formik>
        </GridItem>
        {/* </FormWrapper> */}
      {/* </LoginFormPage>   */}
      </Grid>     

      )}
    </>
  );
};

export default LoginForm;
