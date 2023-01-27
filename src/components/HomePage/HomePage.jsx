import { Grid, GridItem } from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';

import { useMedia } from 'components/Media/useMedia';

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
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h="200px"
          gap="0.5"
          color="textMain"
          // fontWeight="bold"
          fontFamily="mainHeaders"
        >
          <GridItem pl="2" bg="pink.300" area={'nav'}>
            <div
              style={{
                fontSize: 40,
                fontFamily: 'Poppins Bold',
              }}
            >
              TEST tets font FONT
            </div>
            Nav
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
      )}
      {media.isDesktop && (
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
      )}
    </>
  );
};

export default HomePage;
