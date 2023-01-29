import { Grid, GridItem } from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';
import { Currency } from 'components/Currency/Currency';
import { Balance } from 'components/Balance/Balance';
import { useMedia } from 'components/Media/useMedia';
import {
  BalanceBlockDesk,
  BalanceBlockTablet,
  BalanceBlockMob,
} from 'components/Balance/Balance.styled';

import {
  NavigationMobile,
  NavigationTablet,
  NavigationDesktop,
} from 'components/Navigations/Navigation';

const HomePage = () => {
  const media = useMedia();
  console.log(media);
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      {media.isMobile && (
        <Grid
          templateAreas={`"nav nav"
                  "main main"`}
          gridTemplateRows={' 1fr 30px'}
          gridTemplateColumns={'1fr'}
          h="200px"
          gap="0.5"
          color="textMain"
          fontFamily="heading"
        >
          <GridItem pl="2" bg="pink.300" area={'nav'} h="234px">
            <NavigationMobile />
            <BalanceBlockMob theme={theme}>
              <Balance />
            </BalanceBlockMob>
            <div
              style={{
                fontSize: 40,
                fontFamily: 'Poppins',
              }}
            >
              TEST tets font FONT
            </div>
            <div
              style={{
                fontSize: 40,
                fontFamily: 'Circe',
              }}
            >
              TEST tets font FONT
            </div>
            <div
              style={{
                fontSize: 40,
                fontFamily: 'Poppins',
                textAlign: 'center',
              }}
            >
              TEST tets font FONT
            </div>
          </GridItem>
          <GridItem pl="2" bg="green.300" area={'main'}>
            Main
          </GridItem>
        </Grid>
      )}
      {media.isTablet && (
        <Grid
          templateAreas={`"nav nav"
                  "main main"`}
          gridTemplateRows={'1fr 30px'}
          gridTemplateColumns={'1fr'}
          h="200px"
          gap="0.5"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="pink.300" area={'nav'} h="234px">
            <NavigationTablet />
            <BalanceBlockTablet theme={theme}>
              <Balance />
            </BalanceBlockTablet>
          </GridItem>
          <GridItem pl="2" bg="green.300" area={'main'}>
            Main
          </GridItem>
        </Grid>
      )}
      {media.isDesktop && (
        <Grid
          templateAreas={`"nav main"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'37vw 1fr'}
          h="200px"
          gap="0.5"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="pink.300" area={'nav'} h="800px">
            <NavigationDesktop />
            <BalanceBlockDesk theme={theme}>
              <Balance />
            </BalanceBlockDesk>
            <Currency />
          </GridItem>
          <GridItem pl="2" bg="green.300" area={'main'}>
            Main
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default HomePage;
