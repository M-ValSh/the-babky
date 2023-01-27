import { Grid, GridItem } from '@chakra-ui/react';
import { Currency } from 'components/Currency/Currency';

const HomePage = () => {
  return (
    <Grid
      templateAreas={`"nav main"`}
      gridTemplateRows={'150px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h="200px"
      gap="0.5"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="pink.300" area={'nav'}>
        Nav
        <Currency />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={'main'}>
        Main
      </GridItem>
    </Grid>
  );
};

export default HomePage;
