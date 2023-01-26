import { Grid, GridItem } from '@chakra-ui/react';
import { useMedia } from 'components/Media/useMedia';
import NotFound from 'components/NotFound/NotFound';

const HomePage = () => {
  const media = useMedia();

  switch (media) {
    case media.isMobile:
      return (
        <Grid
          templateAreas={`"nav nav"
                  "main main"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h="200px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="pink.300" area={'nav'}>
            Nav
          </GridItem>
          <GridItem pl="2" bg="green.300" area={'main'}>
            Main
          </GridItem>
        </Grid>
      );
      break;
    case media.isTablet:
      return (
        <Grid
          templateAreas={`"nav nav"
                  "main main"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h="200px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="pink.300" area={'nav'}>
            Nav
          </GridItem>
          <GridItem pl="2" bg="green.300" area={'main'}>
            Main
          </GridItem>
        </Grid>
      );
      break;
    case media.isDesktop:
      return (
        <Grid
          templateAreas={`"nav main"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h="200px"
          gap="0.5"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="pink.300" area={'nav'}>
            Nav
          </GridItem>
          <GridItem pl="2" bg="green.300" area={'main'}>
            Main
          </GridItem>
        </Grid>
      );
      break;
    default:
      return <NotFound />;
  }
};

export default HomePage;
