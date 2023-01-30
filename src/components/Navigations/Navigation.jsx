import { NavLink, useLocation } from 'react-router-dom';
import {
  NavigationTab,
  NavigationDesk,
  NavigationMob,
  NavigationIcon,
  NavigationIconMob,
} from 'components/Navigations/Navigation.styled';
import StatSvg from 'assets/images/icons/statistics-icon.svg';
import StatActiveSvg from 'assets/images/icons/statistics-icon-active.svg';
import HomeActiveSvg from 'assets/images/icons/home-icon-active.svg';
import HomeSvg from 'assets/images/icons/home-icon.svg';
import CurrencySvg from 'assets/images/icons/currency-icon.svg';
import CurrencyActiveSvg from 'assets/images/icons/currency-icon-active.svg';
import { theme } from 'Styles/theme';

export const NavigationMobile = () => {
  const loc = useLocation();

  return (
    <NavigationMob theme={theme}>
      <NavLink to="/">
        <NavigationIconMob
          src={loc.pathname === '/' ? HomeActiveSvg : HomeSvg}
          style={
            loc.pathname === '/'
              ? {
                  filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))',
                }
              : null
          }
        />
      </NavLink>
      <NavLink to="/statistics">
        <NavigationIconMob
          src={loc.pathname === '/statistics' ? StatActiveSvg : StatSvg}
          style={
            loc.pathname === '/statistics'
              ? {
                  filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))',
                }
              : null
          }
        />
      </NavLink>
      <NavLink to="/currency">
        <NavigationIconMob
          src={loc.pathname === '/currency' ? CurrencyActiveSvg : CurrencySvg}
          style={
            loc.pathname === '/currency'
              ? {
                  filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))',
                }
              : null
          }
        />
      </NavLink>
    </NavigationMob>
  );
};

export const NavigationTablet = () => {
  const location = useLocation();

  return (
    <NavigationTab theme={theme}>
      <NavLink
        to="/"
        style={{
          fontWeight: location.pathname === '/' && 700,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <NavigationIcon
          src={location.pathname === '/' ? HomeActiveSvg : HomeSvg}
          style={
            location.pathname === '/'
              ? {
                  filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))',
                }
              : null
          }
        />
        Home
      </NavLink>
      <NavLink
        to="/statistics"
        style={{
          fontWeight: location.pathname === '/statistics' && 700,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <NavigationIcon
          src={location.pathname === '/statistics' ? StatActiveSvg : StatSvg}
          style={
            location.pathname === '/statistics'
              ? {
                  filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))',
                }
              : null
          }
        />
        Statistics
      </NavLink>
    </NavigationTab>
  );
};

export const NavigationDesktop = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <NavigationDesk theme={theme}>
      <NavLink
        to="/"
        style={{
          fontWeight: location.pathname === '/' && 700,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <NavigationIcon
          src={location.pathname === '/' ? HomeActiveSvg : HomeSvg}
          style={
            location.pathname === '/'
              ? {
                  filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))',
                }
              : null
          }
        />
        Home
      </NavLink>
      <NavLink
        to="/statistics"
        style={{
          fontWeight: location.pathname === '/statistics' && 700,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <NavigationIcon
          src={location.pathname === '/statistics' ? StatActiveSvg : StatSvg}
          style={
            location.pathname === '/statistics'
              ? {
                  filter: 'drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5))',
                }
              : null
          }
        />
        Statistics
      </NavLink>
    </NavigationDesk>
  );
};
