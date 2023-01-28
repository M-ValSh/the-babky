import { Balance } from 'components/Balance/Balance';
import { useTheme } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import {
  BalanceBlockDesk,
  BalanceBlockTablet,
  BalanceBlockMob,
} from 'components/Balance/Balance.styled';
import {
  NavigationTablet,
  NavigationDesk,
  NavigationMob,
  NavigationIconActive,
  NavigationIcon,
  NavigationIconActiveMob,
  NavigationIconMob,
} from 'components/Navigations/Navigation.styled';
import { Currency } from 'components/Currency/Currency';
import { NavLink } from 'react-router-dom';
import StatSvg from 'assets/images/icons/statistics-icon.svg';
import HomeSvg from 'assets/images/icons/home-icon.svg';
import CurrencySvg from 'assets/images/icons/currency-icon.svg';

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
            <NavigationMob theme={theme}>
              <NavLink to="/">
                <NavigationIconMob src={HomeSvg} />
              </NavLink>
              <NavLink to="/statistics">
                <NavigationIconActiveMob src={StatSvg} />
              </NavLink>
              <NavLink to="/">
                <NavigationIconMob src={CurrencySvg} />
              </NavLink>
            </NavigationMob>
            <BalanceBlockMob theme={theme}>
              <Balance />
            </BalanceBlockMob>
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
            <NavigationTablet theme={theme}>
              <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <NavigationIcon src={HomeSvg} />
                Home
              </NavLink>
              <NavLink
                to="/statistics"
                style={isActive => ({
                  fontWeight: isActive && 700,
                  display: 'flex',
                  alignItems: 'center',
                })}
              >
                <NavigationIconActive src={StatSvg} />
                Stat
              </NavLink>
            </NavigationTablet>
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
            <NavigationDesk theme={theme}>
              <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <NavigationIcon src={HomeSvg} /> Home
              </NavLink>
              <NavLink
                to="/statistics"
                style={isActive => ({
                  fontWeight: isActive && 700,
                  display: 'flex',
                  alignItems: 'center',
                })}
              >
                <NavigationIconActive src={StatSvg} />
                Stat
              </NavLink>
            </NavigationDesk>
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

export default StatisticsPage;
