import { Grid, GridItem } from '@chakra-ui/react';

const HomePage = () => {
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
};

export default HomePage;
