import { Avatar, Box, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import user1 from '../Assets/img/pro1.png'
import user2 from '../Assets/img/pro2.png'
import user3 from '../Assets/img/pro3.png'
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
                                <Avatar size={'xl'} name='Dan Abrahmov' src={user1} />
                                <VStack spacing={'0'} >
                                    <Text textAlign={'start'} fontSize={'30px'} fontWeight={'bold'} fontFamily={'roboto'}>Jack Joseph</Text>
                                    <Text textAlign={'start'} fontSize={'14px'} fontWeight={'light'} fontFamily={'montserrat'}>Recent Graduate</Text>
                                </VStack>
                            </HStack>
                            <Text fontFamily={'montserrat'}>
                            I recently graduated and was navigating the daunting world of job hunting. PGRKAM came to my rescue with its user-friendly design and innovative features. 'Auto Resume Parsing' made applying for jobs a breeze, and the 'Skills Provider' feature helped me acquire essential skills. The 'AR' feature is like magic, guiding me to job opportunities right on my smartphone. PGRKAM has turned my career journey into an exciting adventure, and I'm grateful for the opportunities it has unlocked.
                            </Text>
                        </Box>
                        <Box width={['100%','30%']} margin={'auto'} className='boxdesign' paddingX={'30px'} paddingY={'20px'} borderRadius={'10px'} boxShadow={'0px 10px 61px 26px rgba(0,0,0,0.1)'}>
                            <HStack marginBottom={'15px'}>
                                <Avatar size={'xl'} name='Dan Abrahmov' src={user2} />
                                <VStack spacing={'0'} >
                                    <Text textAlign={'start'} fontSize={'30px'} fontWeight={'bold'} fontFamily={'roboto'}>Sumina Sen</Text>
                                    <Text textAlign={'start'} fontSize={'14px'} fontWeight={'light'} fontFamily={'montserrat'}>College Student</Text>
                                </VStack>
                            </HStack>
                            <Text fontFamily={'montserrat'}>
                            As a college student with ambitious career goals, PGRKAM has been a game-changer. Its user-friendly design makes it easy to use, 'Skills Provider' introduced me to relevant skill development programs, boosting my employability. But the real star is the 'AR' feature, which feels like my personal job-search assistant. It's exciting to see how PGRKAM is shaping my career path, and I can't wait to see where it leads.
                            </Text>
                        </Box>
                        <Box width={['100%','30%']} margin={'auto'} className='boxdesign' paddingX={'30px'} paddingY={'20px'} borderRadius={'10px'} boxShadow={'0px 10px 61px 26px rgba(0,0,0,0.1)'}>
                            <HStack marginBottom={'15px'}>
                                <Avatar size={'xl'} name='Dan Abrahmov' src={user3} />
                                <VStack spacing={'0'} >
                                    <Text textAlign={'start'} fontSize={'30px'} fontWeight={'bold'} fontFamily={'roboto'}>Mukesh Gehlot</Text>
                                    <Text textAlign={'start'} fontSize={'14px'} fontWeight={'light'} fontFamily={'montserrat'}>Experienced Professional</Text>
                                </VStack>
                            </HStack>
                            <Text fontFamily={'montserrat'}>
                            As a seasoned professional in the job market, I can confidently say that the PGRKAM application has revolutionized my job search. The 'Auto Resume Parsing' feature streamlined the application process, saving me time and effort. The 'Skills Provider' feature connected me with valuable skill development programs, enhancing my qualifications. However, what truly sets this app apart is the 'AR' feature, which feels like having a personal job-search assistant. It's an invaluable tool for anyone looking to advance their career.
                            </Text>
                        </Box>
                        
                    </Stack>
                </VStack>
            </Box>
        </>
    )
}

export default Testimonials
