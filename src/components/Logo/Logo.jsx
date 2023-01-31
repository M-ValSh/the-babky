import { Flex, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import logoSvg from 'assets/images/icons/logo-icon.svg';
import { LogoMob } from 'components/Headers/Headers.styled';

import logo from '../../img/logo.png';

export const Logo = () => {

    return (
        <LinkBox>
            <LinkOverlay href='#'>
                <Flex alignItems='center' gap='20px' fontFamily='main' fontWeight='700' fontSize='30px' color='textMain' >
                    {/* <Image src={logo} alt='Wallet Logo'/>
                    <Text>Wallet</Text> */}
                    <LogoMob src={logoSvg} />
                </Flex>
            </LinkOverlay>
        </LinkBox>
    );
}
