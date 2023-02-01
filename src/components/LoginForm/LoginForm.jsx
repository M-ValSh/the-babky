import { React } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from '../../redux/auth/auth-operations';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import WalletButton from '../WalletButton/WalletButton';
import { useMedia } from 'components/Media/useMedia';

import { ReactComponent as Frame } from 'img/illustrations/Frame.svg';

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
// import Frame from '../../img/illustrations/Frame.svg';
import pink_ellipse from '../../img/figures/pink_ellipse.svg';
import purple_ellipse from '../../img/figures/purple_ellipse.svg';

import {
  Illustration,
  IllustrationDesc,
  IllustrationWrapper,
  FormBlock,
  FormBlockMobile,
  BubbleWrapper,
  Overlay,
  IllustrationWrapperTab,
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
          gridTemplateColumns={'42vw 1fr'}
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
              {/* <Illustration
                src={Frame}
                width="435px"
                alt="Guy shopping online via mobile"
              /> */}
              <Frame />
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
                    <Stack spacing={0} mt="60px" gap="40px">
                      {/* <p className="text">You can sign in using email and password</p> */}
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={
                            <EmailIcon
                              color={theme.colors.InputColor}
                              w="24px"
                              h="24px"
                              ml="12px"
                            />
                          }
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
                          _placeholder={theme.placeholderCss}
                          borderColor={theme.colors.InputColor}
                          pl="60px"
                          className="input"
                          width="410px"
                          height="40px"
                          errorBorderColor={theme.colors.BgBtnRed}
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={
                            <LockIcon
                              color={theme.colors.InputColor}
                              w="24px"
                              h="24px"
                              ml="12px"
                            />
                          }
                        />
                        <Input
                          variant="flushed"
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          placeholder="Password"
                          _placeholder={theme.placeholderCss}
                          borderColor={theme.colors.InputColor}
                          pl="60px"
                          className="input"
                          width="410px"
                          height="40px"
                          errorBorderColor={theme.colors.BgBtnRed}
                        />
                      </InputGroup>
                    </Stack>
                    <Stack spacing={0} mt="42px">
                      <WalletButton text="LOG IN" />
                      <NavLink to="/register">
                        <WalletButton
                          text="REGISTER"
                          styleType="transparent"
                          type="submit"
                        />
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

      {media.isMobile && (
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

              <FormBlockMobile>
                <Logo />
                <Stack spacing={0} mt="60px" gap="40px">
                  {/* <p className="text">You can sign in using email and password</p> */}
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <EmailIcon
                          color={theme.colors.InputColor}
                          w="24px"
                          h="24px"
                          ml="12px"
                        />
                      }
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
                      _placeholder={theme.placeholderCss}
                      borderColor={theme.colors.InputColor}
                      pl="60px"
                      className="input"
                      width="280px"
                      height="40px"
                      errorBorderColor={theme.colors.BgBtnRed}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <LockIcon
                          color={theme.colors.InputColor}
                          w="24px"
                          h="24px"
                          ml="12px"
                        />
                      }
                    />
                    <Input
                      variant="flushed"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Password"
                      _placeholder={theme.placeholderCss}
                      borderColor={theme.colors.InputColor}
                      pl="60px"
                      className="input"
                      width="280px"
                      height="40px"
                      errorBorderColor={theme.colors.BgBtnRed}
                    />
                  </InputGroup>
                </Stack>
                <Stack spacing={0} mt="42px">
                  <WalletButton text="LOG IN" style={{ minWidth: '280px' }} />
                  <NavLink to="/register">
                    <WalletButton
                      text="REGISTER"
                      styleType="transparent"
                      type="submit"
                      style={{ minWidth: '280px' }}
                    />
                  </NavLink>
                </Stack>
              </FormBlockMobile>
            </Form>
          )}
        </Formik>
      )}

      {media.isTablet && (
        <BubbleWrapper>
          <Overlay>
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
                    <Stack spacing={0} mt="60px" gap="40px">
                      {/* <p className="text">You can sign in using email and password</p> */}
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={
                            <EmailIcon
                              color={theme.colors.InputColor}
                              w="24px"
                              h="24px"
                              ml="12px"
                            />
                          }
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
                          _placeholder={theme.placeholderCss}
                          borderColor={theme.colors.InputColor}
                          pl="60px"
                          className="input"
                          width="410px"
                          height="40px"
                          errorBorderColor={theme.colors.BgBtnRed}
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={
                            <LockIcon
                              color={theme.colors.InputColor}
                              w="24px"
                              h="24px"
                              ml="12px"
                            />
                          }
                        />
                        <Input
                          variant="flushed"
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          placeholder="Password"
                          _placeholder={theme.placeholderCss}
                          borderColor={theme.colors.InputColor}
                          pl="60px"
                          className="input"
                          width="410px"
                          height="40px"
                          errorBorderColor={theme.colors.BgBtnRed}
                        />
                      </InputGroup>
                    </Stack>
                    <Stack spacing={0} mt="42px">
                      <WalletButton text="LOG IN" />
                      <NavLink to="/register">
                        <WalletButton
                          text="REGISTER"
                          styleType="transparent"
                          type="submit"
                        />
                      </NavLink>
                    </Stack>
                  </FormBlock>
                </Form>
              )}
            </Formik>
          </Overlay>
          <Grid
            templateAreas={`
                          "nav main"
                          "nav main"`}
            gridTemplateRows={'1fr 30px'}
            gridTemplateColumns={'42vw 1fr'}
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
              <IllustrationWrapperTab>
                {/* <Illustration
                  src={Frame}
                  width="260px"
                  height="250px"
                  alt="Guy shopping online via mobile"
                /> */}
                <Frame width="260" />
              </IllustrationWrapperTab>
            </GridItem>

            <GridItem
              pl="2"
              area={'main'}
              backgroundColor="mainBgLighter"
              // backdropFilter="blur(25px)"
            >
              <IllustrationDesc>Finance App</IllustrationDesc>
            </GridItem>
            {/* </FormWrapper> */}
            {/* </LoginFormPage>   */}
          </Grid>
        </BubbleWrapper>
      )}
    </>
  );
};

export default LoginForm;
