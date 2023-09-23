import React from 'react'
import {
    Box,
    VStack,
    Image,
    HStack,
    Text,
    Divider
} from '@chakra-ui/react';
import govtLogo from '../Assets/Logos/pgrkam.png'
const Footer = () => {
    return (
        <>
            
            <Box css={{ backgroundColor: '#ff9933' }}>
                <VStack width={['95%', "80%"]} margin={'auto'}  >
                    <HStack>
                        <Image boxSize={['70px','100px']} src={govtLogo} />
                        <VStack spacing={'1'} align={'flex-start'}>
                            <Text fontFamily={'Roboto'} fontSize={['17px','20px']}><b>PUNJAB GHAR GHAR ROZGAR</b></Text>
                            <Text fontFamily={'Roboto'} fontSize={['13px','17px']}>Department of Employment Generation,</Text>
                            <Text fontFamily={'Roboto'} fontSize={['12px','17px']}>Skill Development & Training- Govt. Of Punjab, India</Text>
                        </VStack>
                    </HStack>
                    <Divider color='white' />
                    <HStack marginBottom={'4'}>
                        <Text fontSize={['12px','17px']}>© 2023, All Rights Reserved by Punjab Ghar Ghar Rozgar and Karobar Mission, Punjab, India PGRKAM ,<b>Created by Team Error 404</b></Text>
                    </HStack>
                </VStack>
            </Box>
            <Box css={{ backgroundColor: '#F4C430' }}>
                <Text  textAlign={'center'} padding={'10px'} fontSize={['15px','18px']}>Website Visit Count: 484848</Text>
            </Box>
        </>
    )
}

export default Footer
