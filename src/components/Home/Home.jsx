import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react';
import hero from '../Assets/img/home.png';
const Home = () => {
  return (
    <>
      <Box className="hero " width={'100vw'} height={'100vh'}>
        <Box width={'90vw'} height={'100vh'} margin={'auto'}>
          <HStack marginTop={'60px'} justifyContent={'space-between'}>
            <VStack width={'45%'}>
              <Heading
                textAlign={'start'}
                fontWeight={'medium'}
                color={'#dd6b20'}
                fontFamily={'montserrat'}
              >
                PGRKAM{' '}
                <span style={{ color: 'black', fontFamily: 'montserrat' }}>
                  -Program
                </span>
              </Heading>
              <Text fontFamily={'montserrat'} color={'grey'} textAlign="center">
                Revolutionizing Job Searches. Experience AR-powered job alerts,
                GPS-based skill matching, and AI-driven recommendations for a
                smarter, personalized career path.
                {/* Introducing PGRKAM, your ultimate career companion! With PGRKAM, job seekers experience the future of job hunting – effortlessly receive job notifications through cutting-edge Augmented Reality (AR), connect with employers in real-time using GPS technology, and enjoy personalized recommendations powered by AI, all designed to transform your job search into a smarter and more efficient journey. */}
              </Text>
              <HStack>
                <Button variant={'outline'} colorScheme="orange">Our Mission !</Button>
                <Button variant={'outline'} colorScheme="orange">Login</Button>
                <Button variant={'outline'} colorScheme="orange">Find Jobs</Button>
              </HStack>
            </VStack>
            <Image
              justifyContent={'flex-start'}
              border
              width={'50%'}
              src={hero}
            />
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
