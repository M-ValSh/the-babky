import { Grid, GridItem } from '@chakra-ui/react';

export const Headers = () => {
  return (
    <Grid
      templateAreas={`"header header"`}
      gridTemplateRows={'60px 1fr'}
      gridTemplateColumns={'150px 1fr'}
      gap="0.5"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={'header'}>
        Header
      </GridItem>
    </Grid>
  );
};
