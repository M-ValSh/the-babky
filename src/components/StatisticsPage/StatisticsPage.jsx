import { Balance } from 'components/Balance/Balance';
import { useTheme } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import {
  BalanceBlockDesk,
  BalanceBlockTablet,
} from 'components/Balance/Balance.styled';
import {
  NavigationMobile,
  NavigationTablet,
  NavigationDesktop,
} from 'components/Navigations/Navigation';
import { Currency } from 'components/Currency/Currency';
import { DiagramTab } from 'components/DiagramTab/DiagramTab';
import { BubleWrapper } from 'components/Navigations/Navigation.styled';

const { Grid, GridItem } = require('@chakra-ui/react');

const StatisticsPage = () => {
  const media = useMedia();
  const theme = useTheme();
  return (
    <>
      {media.isMobile && (
        <Grid
          templateAreas={`"nav nav"
                  "main main"`}
          gridTemplateRows={' 1fr 30px'}
          gridTemplateColumns={'1fr'}
          gap="0"
          color="textMain"
          fontFamily="heading"
        >
          <GridItem
            bg={theme.colors.BgMain}
            area={'nav'}
            h="68px"
            width="100vw"
          >
            <NavigationMobile />
          </GridItem>
          <GridItem bg={theme.colors.BgMain} area={'main'} h="100vh">
            <DiagramTab />
          </GridItem>
        </Grid>
      )}
      {media.isTablet && (
        <BubleWrapper>
          <Grid
            templateAreas={`"nav nav"
                  "main main"`}
            gridTemplateRows={'1fr 30px'}
            gridTemplateColumns={'1fr'}
            h="200px"
            color="blackAlpha.700"
            fontWeight="bold"
          >
            <GridItem zIndex="2" area={'nav'} h="234px" display="flex" w="100%">
              <section>
                <NavigationTablet />
                <BalanceBlockTablet theme={theme}>
                  <Balance />
                </BalanceBlockTablet>
              </section>
              <Currency />
            </GridItem>
            <GridItem zIndex="2" h="100vh" area={'main'}>
              <DiagramTab />
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
            <GridItem zIndex="2" area={'main'} h="100vh">
              <DiagramTab />
            </GridItem>
          </Grid>
        </BubleWrapper>
      )}
    </>
  );
};

export default StatisticsPage;
