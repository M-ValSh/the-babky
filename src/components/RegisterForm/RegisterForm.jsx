import * as Yup from 'yup';
import { useFormik } from 'formik';
import authOperations from '../../redux/auth/auth-operations';
// import { authReducer } from '../../redux/auth/auth-slice';
import WalletButton from 'components/WalletButton/WalletButton';
// import s from './RegisterForm.module.css';
// import { useState } from 'react';
// import { Container, FormEl, LogBtn } from './RegisterForm.styled';
// import { Logo } from 'components/Headers/Headers.styled';
import { Input, InputGroup, Stack, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const initialValues = {
  username: '',
  email: '',
  password: '',
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
  // const navigate = useNavigate();
  const auth = useSelector(state => state.auth);

  // const [password, setPassword] = useState('');

  // const onSubmit = params => {
  //   dispatch(authOperations.register(params));

  //   navigate('/login');
  // };

  // const onLoginBtn = () => {
  //   navigate('/login');
  // };

  const formik = useFormik({
    initialValues,
    validationSchema,

    onSubmit: ({ email, username, password }, { resetForm }) => {
      dispatch(authOperations.register({ email, username, password }));
      resetForm({
        values: {
          initialValues,
        },
      });
    },
  });
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      {/* <Logo /> */}
      {auth.error ? (
        <div>
          <p>{auth.error}</p>
        </div>
      ) : null}
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4}>
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
              value={formik.initialValues.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </InputGroup>
        </Stack>
        <InputGroup>
          <Input
            variant="flushed"
            type="text"
            name="username"
            placeholder="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.initialValues.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
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
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.initialValues.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
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
            placeholder="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
        </InputGroup>
        <WalletButton text={'register'} styleType={'normal'} type={'submit'} />
        <NavLink
          // onSubmit={() => onLoginBtn}
          text={'Log In'}
          // type={'transparent'}
          to="/login"
        >
          Log In
        </NavLink>
      </form>
    </div>
  );
};

export default RegisterForm;
