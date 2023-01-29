import { Grid, GridItem } from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';

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

export const Headers = () => {
  const media = useMedia();
  const theme = useTheme();
  return (
    <>
      {media.isMobile ? (
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
            <ClientNameMob theme={theme}> Name</ClientNameMob>
            <LogoutButton>
              <LogoutImg src={logOutSvg} />
            </LogoutButton>
          </GridItem>
        </Grid>
      ) : (
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
          >
            <Logo src={logoSvg} />
            <ClientName theme={theme}> Name</ClientName>
            <LogoutButton>
              <LogoutImg src={logOutSvg} /> Exit
            </LogoutButton>
          </GridItem>
        </Grid>
      )}
    </>
  );
};
