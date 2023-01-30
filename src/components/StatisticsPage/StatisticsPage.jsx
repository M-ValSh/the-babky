import { Balance } from 'components/Balance/Balance';
import { useTheme } from '@chakra-ui/react';
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
import { Currency } from 'components/Currency/Currency';
import { DiagramTab } from 'components/DiagramTab/DiagramTab';

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
            <Currency />
          </GridItem>
          <GridItem pl="2" bg="green.300" area={'main'}>
            Main
            <DiagramTab />
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
            <Currency />
          </GridItem>
          <GridItem pl="2" bg="green.300" area={'main'}>
            Main
            <DiagramTab />
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
            <DiagramTab />
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default StatisticsPage;
