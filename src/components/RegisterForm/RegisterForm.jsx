import * as Yup from 'yup';
import { useFormik } from 'formik';

import authOperations from '../../redux/auth/auth-operations';
import WalletButton from 'components/WalletButton/WalletButton';

// import s from './RegisterForm.module.css';
// import { useState } from 'react';
// import { Container, FormEl, LogBtn } from './RegisterForm.styled';
// import { Logo } from 'components/Headers/Headers.styled';
import {
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  GridItem,
  Grid,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, AtSignIcon } from '@chakra-ui/icons';
import { useTheme } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import { Logo } from 'components/Logo/Logo';
import Frame from '../../img/illustrations/Frame.svg';
import pink_ellipse from '../../img/figures/pink_ellipse.svg';
import purple_ellipse from '../../img/figures/purple_ellipse.svg';
import { useDispatch, useSelector } from 'react-redux';

import {
  Illustration,
  IllustrationDesc,
  IllustrationWrapper,
  FormBlock,
} from './RegisterForm.styled';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter your email')
    .required('This field is required'),
  password: Yup.string()
    .min(6, 'At least 6 characters')
    .max(12, 'maximum of 12 characters')
    .required('This field is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords do not match'
  ),
  username: Yup.string()
    .typeError()
    .min(1, 'At least 1 character required')
    .max(12, 'maximum 12 characters required')
    .required('this field is required'),
});
const RegisterForm = () => {
  const dispatch = useDispatch();

  const media = useMedia();
  const theme = useTheme();
  // const navigate = useNavigate();

  const auth = useSelector(state => state.auth);

  const formik = useFormik({
    initialValues,
    validationSchema,

    onSubmit: ({ email, username, password }, { resetForm }) => {
      dispatch(authOperations.register({ email, username, password }));
      resetForm({ values: '' });
    },
  });
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
          backgroundColor="mainBgUnderColor"
          backgroundRepeat="no-repeat, no-repeat"
          backgroundImage={`url(${pink_ellipse}), url(${purple_ellipse})`}
          backgroundPosition="top -150px right -150px, bottom -150px left -150px"
          // color='blackAlpha.700'
          // fontWeight='bold'
        >
          {auth.error ? (
            <div>
              <p>{auth.error}</p>
            </div>
          ) : null}
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
          <GridItem
            pl="2"
            area={'main'}
            centerContent
            backgroundColor="mainBgLighter"
            backdropFilter="blur(25px)"
          >
            <form onSubmit={formik.handleSubmit}>
              <FormBlock>
                <Logo />
                <Stack spacing={0} mt="60px" gap="40px">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<EmailIcon color="gray.300" />}
                    />
                    <Input
                      variant="flushed"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      width="410px"
                      height="32px"
                      errorBorderColor={theme.colors.BgBtnRed}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email
                      ? toast.info(formik.errors.email)
                      : null}
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<AtSignIcon color="gray.300" />}
                    />
                    <Input
                      variant="flushed"
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      width="410px"
                      height="32px"
                      errorBorderColor={theme.colors.BgBtnRed}
                      // value={formik.initialValues.username}
                    />
                    {formik.touched.username && formik.errors.username
                      ? toast.info(formik.errors.username)
                      : null}
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
                      placeholder="Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      width="410px"
                      height="32px"
                      errorBorderColor={theme.colors.BgBtnRed}
                      // value={formik.initialValues.password}
                    />
                    {formik.touched.password && formik.errors.password
                      ? toast.info(formik.errors.password)
                      : null}
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<LockIcon color="gray.300" />}
                    />
                    <Input
                      variant="flushed"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      width="410px"
                      height="32px"
                      errorBorderColor={theme.colors.BgBtnRed}
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? toast.info(formik.errors.confirmPassword)
                      : null}
                  </InputGroup>
                </Stack>
                <Stack spacing={0} mt="42px">
                  <WalletButton
                    text={'register'}
                    styleType={'normal'}
                    type={'submit'}
                  />
                  <NavLink
                    // onSubmit={() => onLoginBtn}
                    text={'Log In'}
                    // type={'transparent'}
                    to="/login"
                  >
                    <WalletButton text="log in" styleType="transparent" />
                  </NavLink>
                </Stack>
              </FormBlock>
            </form>
          </GridItem>
        </Grid>
      )}
    </>
    // <div
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     alignContent: 'center',
    //   }}
    // >

    // </div>
  );
};

export default RegisterForm;
