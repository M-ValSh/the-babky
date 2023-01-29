import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { Logo } from 'components/Logo/Logo';

export const Headers = () => {
  return (
    <Box p='20px 0' pl='16px' bgColor='textSecondary'>
      <Flex alignItems='center'>
        <Logo />
        <Box display='flex' alignItems='center' gap='24px' ml='auto' mr='16px' fontFamily='secondary' fontSize='18px' fontWeight='400' color='placeholder'>
          <Text>Name</Text>
          <Button >Exit</Button>
        </Box>
      </Flex>
    </Box>
    // <Grid
    //   templateAreas={`"header header"`}
    //   gridTemplateRows={'60px 1fr'}
    //   gridTemplateColumns={'150px 1fr'}
    //   gap="0.5"
    //   color="blackAlpha.700"
    //   fontWeight="bold"
    // >
    //   {/* <GridItem pl="2" bg="orange.300" area={'header'}>
    //     Header
    //   </GridItem> */}
    //   <Logo />
    // </Grid>
  );
};
