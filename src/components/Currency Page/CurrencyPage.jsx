import { Balance } from 'components/Balance/Balance';
import { useTheme } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import { NavigationMobile } from 'components/Navigations/Navigation';
import { Currency } from 'components/Currency/Currency';

const { Grid, GridItem } = require('@chakra-ui/react');

const CurrencyPage = () => {
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
          <GridItem
            pl="0"
            bg={theme.colors.BgMain}
            backdropFilter="blur(25px)"
            area={'nav'}
            h="100vh"
          >
            <NavigationMobile />
            <Currency />
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default CurrencyPage;
