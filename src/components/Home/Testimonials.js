import { Avatar, Box, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Testimonials = () => {
    return (
        <>
            <Box width={'100%'} minHeight={'100vh'} className='testi' display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <VStack width={'80%'} margin={'auto'} >
                    <Heading>
                        Our Testimonials
                    </Heading>
                    <Text >Customer Review is Very Important</Text>
                    <Box width={['80%','40%']} margin={'auto'} height={'10px'} borderRadius={"60%"} backgroundColor={'orange'}></Box>
                    <Stack width={"100%"} marginY={'50px'} direction={['column','row']}>
                        <Box width={['100%','30%']} margin={'auto'} className='boxdesign' paddingX={'30px'} paddingY={'20px'} borderRadius={'10px'} boxShadow={'0px 10px 61px 26px rgba(0,0,0,0.1)'}>
                            <HStack marginBottom={'15px'}>
                                <Avatar size={'xl'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <VStack spacing={'0'} >
                                    <Text textAlign={'start'} fontSize={'30px'} fontWeight={'bold'} fontFamily={'roboto'}>John Doe</Text>
                                    <Text textAlign={'start'} fontSize={'14px'} fontWeight={'light'} fontFamily={'montserrat'}>Designation</Text>
                                </VStack>
                            </HStack>
                            <Text fontFamily={'montserrat'}>
                                The "Auto Resume Parsing" feature made job applications effortless, and she describes the "AR" feature as nothing short of remarkable, likening it to a personal job-search assistant. Her testimonial reflects the app's role in making her career journey exciting and promising as a high school student with ambitious goals.
                            </Text>
                        </Box>
                        <Box width={['100%','30%']} margin={'auto'} className='boxdesign' paddingX={'30px'} paddingY={'20px'} borderRadius={'10px'} boxShadow={'0px 10px 61px 26px rgba(0,0,0,0.1)'}>
                            <HStack marginBottom={'15px'}>
                                <Avatar size={'xl'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <VStack spacing={'0'} >
                                    <Text textAlign={'start'} fontSize={'30px'} fontWeight={'bold'} fontFamily={'roboto'}>John Doe</Text>
                                    <Text textAlign={'start'} fontSize={'14px'} fontWeight={'light'} fontFamily={'montserrat'}>Designation</Text>
                                </VStack>
                            </HStack>
                            <Text fontFamily={'montserrat'}>
                                The "Auto Resume Parsing" feature made job applications effortless, and she describes the "AR" feature as nothing short of remarkable, likening it to a personal job-search assistant. Her testimonial reflects the app's role in making her career journey exciting and promising as a high school student with ambitious goals.
                            </Text>
                        </Box>
                        <Box width={['100%','30%']} margin={'auto'} className='boxdesign' paddingX={'30px'} paddingY={'20px'} borderRadius={'10px'} boxShadow={'0px 10px 61px 26px rgba(0,0,0,0.1)'}>
                            <HStack marginBottom={'15px'}>
                                <Avatar size={'xl'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <VStack spacing={'0'} >
                                    <Text textAlign={'start'} fontSize={'30px'} fontWeight={'bold'} fontFamily={'roboto'}>John Doe</Text>
                                    <Text textAlign={'start'} fontSize={'14px'} fontWeight={'light'} fontFamily={'montserrat'}>Designation</Text>
                                </VStack>
                            </HStack>
                            <Text fontFamily={'montserrat'}>
                                The "Auto Resume Parsing" feature made job applications effortless, and she describes the "AR" feature as nothing short of remarkable, likening it to a personal job-search assistant. Her testimonial reflects the app's role in making her career journey exciting and promising as a high school student with ambitious goals.
                            </Text>
                        </Box>
                        
                    </Stack>
                </VStack>
            </Box>
        </>
    )
}

export default Testimonials
