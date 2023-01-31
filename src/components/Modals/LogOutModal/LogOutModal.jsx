import { Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { closeModalLogout } from 'redux/global/global-slice';
import authOperations from '../../../redux/auth/auth-operations';
import {
  OverlayBox,
  ModalBox,
  ContentBox,
  ButtonsBox,
  KeepButton,
  LogoutButton,
} from './LogOutModal.styled';

const LogOutModal = () => {
  const dispatch = useDispatch();

  const onLogOutClick = () =>
    dispatch(authOperations.logOut())
      .unwrap()
      .then(() => dispatch(closeModalLogout()));
  const onKeepInClick = () => dispatch(closeModalLogout());

  const onBackdropClick = e => {
    if (e.currentTarget !== e.target) return;
    onKeepInClick();
  };

  useEffect(() => {
    const hideModal = e => {
      if (e.code === 'Escape') dispatch(closeModalLogout());
    };

    document.addEventListener('keydown', hideModal);

    return () => {
      document.removeEventListener('keydown', hideModal);
    };
  }, [dispatch]);

  return (
    <OverlayBox onClick={onBackdropClick} /* className={styles.overlay} */>
      <ModalBox /* className={styles.modal} */>
        <ContentBox>
          <Text>
            Are you sure, you want to <b>Log Out</b>?
          </Text>
          <ButtonsBox>
            <KeepButton type="button" onClick={onKeepInClick}>
              Keep In
            </KeepButton>
            <LogoutButton type="button" onClick={onLogOutClick}>
              Log Out
            </LogoutButton>
          </ButtonsBox>
        </ContentBox>
      </ModalBox>
    </OverlayBox>
  );
};

export default LogOutModal;
