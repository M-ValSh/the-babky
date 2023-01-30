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
import { Link } from 'react-router-dom';

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
          color="textMain"
          fontFamily="heading"
        >
          <GridItem bg={theme.colors.BgMain} area={'nav'} h="180px">
            <NavigationMobile />
            <BalanceBlockMob theme={theme}>
              <Balance />
            </BalanceBlockMob>
            {/*    <div
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
            </div> */}
          </GridItem>
          <GridItem bg={theme.colors.BgMain} area={'main'} h="100vh">
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
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem
            bg={theme.colors.BgMain}
            area={'nav'}
            h="234px"
            display="flex"
          >
            <section>
              <NavigationTablet />
              <BalanceBlockTablet theme={theme}>
                <Balance />
              </BalanceBlockTablet>
            </section>
            <Currency />
          </GridItem>
          <GridItem bg={theme.colors.BgMain} area={'main'} h="100vh">
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
          <GridItem
            bg={theme.colors.BgMain}
            area={'nav'}
            h="100vh"
            borderRight="1px solid #E7E5F2"
            boxShadow="-1px 0px 0px rgba(0, 0, 0, 0.05), 1px 0px 0px rgba(255, 255, 255, 0.6)"
          >
            <NavigationDesktop />
            <BalanceBlockDesk theme={theme}>
              <Balance />
            </BalanceBlockDesk>
            <Currency />
          </GridItem>
          <GridItem bg={theme.colors.BgMain} area={'main'} h="100vh">
            <Link to="/register">Register</Link>
            Main
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default HomePage;
