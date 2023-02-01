import * as Yup from 'yup';
import { useFormik } from 'formik';

import authOperations from '../../redux/auth/auth-operations';
import WalletButton from 'components/WalletButton/WalletButton';

import {
  Input,
  InputGroup,
  Stack,
  InputLeftElement,
  GridItem,
  Grid,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon, AtSignIcon } from '@chakra-ui/icons';
import { useTheme } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import { Logo } from 'components/Logo/Logo';
import Frame from '../../img/illustrations/Frame.svg';
import pink_ellipse from '../../img/figures/pink_ellipse.svg';
import purple_ellipse from '../../img/figures/purple_ellipse.svg';
import { useDispatch } from 'react-redux';

import {
  Illustration,
  IllustrationDesc,
  IllustrationWrapper,
  FormBlock,
} from './RegisterForm.styled';
import { NavLink } from 'react-router-dom';

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
          gridTemplateColumns={'42vw 1fr'}
          gap="0"
          h="100vh"
          backgroundColor="mainBgUnderColor"
          backgroundRepeat="no-repeat, no-repeat"
          backgroundImage={`url(${pink_ellipse}), url(${purple_ellipse})`}
          backgroundPosition="top -150px right -150px, bottom -150px left -150px"
        >
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
            area={'main'}
            centerContent
            backgroundColor="mainBgLighter"
            backdropFilter="blur(25px)"
          >
            <form onSubmit={formik.handleSubmit}>
              <FormBlock>
                <Logo />
                <Stack spacing={0} mt="60px" gap="40px">
                  <FormControl
                    isInvalid={formik.touched.email && formik.errors.email}
                    pb="20px"
                  >
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
                      />
                      <Input
                        variant="flushed"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        _placeholder={theme.placeholderCss}
                        borderColor={theme.colors.InputColor}
                        pl="60px"
                        width="410px"
                        height="40px"
                        errorBorderColor={theme.colors.BgBtnRed}
                        value={formik.values.email}
                      />
                    </InputGroup>
                    <FormErrorMessage position={'absolute'} bottom="0">
                      {formik.errors.email}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.touched.username && formik.errors.username
                    }
                    pb="20px"
                  >
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={
                          <AtSignIcon
                            color={theme.colors.InputColor}
                            w="24px"
                            h="24px"
                            ml="12px"
                          />
                        }
                      />
                      <Input
                        variant="flushed"
                        type="text"
                        name="username"
                        placeholder="Username"
                        _placeholder={theme.placeholderCss}
                        borderColor={theme.colors.InputColor}
                        pl="60px"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        width="410px"
                        height="40px"
                        errorBorderColor={theme.colors.BgBtnRed}
                        value={formik.values.username}
                      />
                    </InputGroup>
                    <FormErrorMessage position={'absolute'} bottom="0">
                      {formik.errors.email}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                    pb="20px"
                  >
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
                        placeholder="Password"
                        _placeholder={theme.placeholderCss}
                        borderColor={theme.colors.InputColor}
                        pl="60px"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        width="410px"
                        height="40px"
                        errorBorderColor={theme.colors.BgBtnRed}
                        value={formik.values.password}
                      />
                    </InputGroup>
                    <FormErrorMessage position={'absolute'} bottom="0">
                      {formik.errors.password}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                    pb="20px"
                  >
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
                        name="confirmPassword"
                        placeholder="Confirm password"
                        _placeholder={theme.placeholderCss}
                        borderColor={theme.colors.InputColor}
                        pl="60px"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        width="410px"
                        height="40px"
                        errorBorderColor={theme.colors.BgBtnRed}
                      />
                    </InputGroup>
                    <FormErrorMessage position={'absolute'} bottom="0">
                      {formik.errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                </Stack>
                <Stack spacing={0} mt="42px">
                  <WalletButton
                    text={'register'}
                    styleType={'normal'}
                    type={'submit'}
                  />
                  <NavLink text={'Log In'} to="/login">
                    <WalletButton text="log in" styleType="transparent" />
                  </NavLink>
                </Stack>
              </FormBlock>
            </form>
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default RegisterForm;
