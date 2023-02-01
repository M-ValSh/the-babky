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

import { BubleWrapper } from 'components/Navigations/Navigation.styled';
import {
  NavigationMobile,
  NavigationTablet,
  NavigationDesktop,
} from 'components/Navigations/Navigation';

import { HomeTab } from 'components/HomeTab/HomeTab';
import AddTrnsctnBtn from 'components/AddTrnsctnBtn/AddTrnsctnBtn';
import AddTransactionModal from 'components/AddTransactionModal/AddTransactionModal';
import { useSelector } from 'react-redux';
import { selectIsModalAddTransactionOpen } from 'redux/global/global-selectors';
import authOperations from 'redux/auth/auth-operations';
import { useEffect } from 'react';

const HomePage = () => {
  const media = useMedia();
  const theme = useTheme();
  const { fetchCurrentUser } = authOperations;

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const isModalAddTransactionOpen = useSelector(
    selectIsModalAddTransactionOpen
  );

  return (
    <>
      <AddTrnsctnBtn />
      {isModalAddTransactionOpen && <AddTransactionModal />}

      {media.isMobile && (
        <Grid
          templateAreas={`"nav nav"
                  "main main"`}
          gridTemplateRows={' 1fr'}
          gridTemplateColumns={'1fr'}
          color="textMain"
          fontFamily="heading"
        >
          <GridItem bg={theme.colors.BgMain} area={'nav'} h="148px">
            <NavigationMobile />
            <BalanceBlockMob theme={theme}>
              <Balance />
            </BalanceBlockMob>
          </GridItem>
          <GridItem
            bg={theme.colors.BgMain}
            area={'main'}
            minHeight="800px"
            paddingTop="32px"
          >
            <HomeTab />
          </GridItem>
        </Grid>
      )}
      {media.isTablet && (
        <BubleWrapper h="100vh">
          <Grid
            templateAreas={`"nav nav"
                  "main main"`}
            gridTemplateRows={'1fr 30px'}
            gridTemplateColumns={'1fr'}
            h="200px"
            color="blackAlpha.700"
            fontWeight="bold"
          >
            <GridItem area={'nav'} h="234px" display="flex" zIndex="1">
              <section>
                <NavigationTablet />
                <BalanceBlockTablet theme={theme}>
                  <Balance />
                </BalanceBlockTablet>
              </section>
              <Currency />
            </GridItem>
            <GridItem area={'main'} zIndex="2">
              <HomeTab />
            </GridItem>
          </Grid>
        </BubleWrapper>
      )}
      {media.isDesktop && (
        <BubleWrapper>
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
              zIndex="2"
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

            <GridItem zIndex="2" area={'main'} display="flex">
              <HomeTab />
            </GridItem>
          </Grid>
        </BubleWrapper>
      )}
    </>
  );
};

export default HomePage;
