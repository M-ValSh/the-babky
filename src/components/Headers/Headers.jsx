import { Grid, GridItem } from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import authSelectors from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  Logo,
  LogoMob,
  ClientName,
  ClientNameMob,
  LogoutButton,
  LogoutImg,
} from './Headers.styled';
import logoSvg from 'assets/images/icons/logo-icon.svg';
import logOutSvg from 'assets/images/icons/logout-icon.svg';

import { openModalLogout } from 'redux/global/global-slice';
import {selectIsModalLogoutOpen} from 'redux/global/global-selectors';
import LogOutModal from 'components/Modals/LogOutModal/LogOutModal';

export const Headers = () => {
  const dispatch = useDispatch();
  const media = useMedia();
  const theme = useTheme();
  const { selectUser } = authSelectors;
  const userName = useSelector(selectUser);
  const isModalOpen = useSelector(selectIsModalLogoutOpen);

  return (
    <>
      {media.isMobile ? (
      <>
        <Grid
        templateAreas={`"header header"`}
        gridTemplateRows={'60px 1fr'}
        gridTemplateColumns={'150px 1fr'}
        gap="0.5"
        color="blackAlpha.700"
        fontWeight="bold"
        >
          <GridItem
            pl="2"
            bg={theme.colors.textSecondary}
            area={'header'}
            h="60px"
            padding="15px 20px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <LogoMob src={logoSvg} />
            <ClientNameMob theme={theme}> {userName}</ClientNameMob>
            <LogoutButton onClick={() => dispatch(openModalLogout())}>
              <LogoutImg src={logOutSvg} />
            </LogoutButton>
          </GridItem>
        </Grid>
        {/* {isModalOpen && (<LogOutModal />)} */}
      </>
    ) : (
      <>
        <Grid
        templateAreas={`"header header"`}
        gridTemplateRows={'80px 1fr'}
        gridTemplateColumns={'150px 1fr'}
        gap="0.5"
        color="blackAlpha.700"
        fontWeight="bold"
        >
          <GridItem
            pl="2"
            bg={theme.colors.textSecondary}
            area={'header'}
            h="80px"
            padding="20px 16px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            zIndex="2"
          >
          <Logo src={logoSvg} />
          <ClientName theme={theme}> {userName}</ClientName>
          <LogoutButton onClick={() => dispatch(openModalLogout())}>
            <LogoutImg src={logOutSvg} /> Exit
          </LogoutButton>
        </GridItem>
        {/* {isModalOpen && (<LogOutModal />)} */}
        </Grid>
        {/* {isModalOpen && (<LogOutModal />)} */}
      </>
      )}
    </>
  );
};
