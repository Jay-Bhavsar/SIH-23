import { Box, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { IoIosRocket } from 'react-icons/io';
import mission from '../Assets/img/pngwing.com.png';
const OurMission = () => {
  return (
    <>
      <Box width={'100%'} minHeight={'100vh'}>
        <Box
          width={['90%','80%']}
          minHeight={'100vh'}
          margin={'auto'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'column'}
        >
          <Stack direction={['column-reverse','row']}>
            <VStack width={['100%','60%']} margin={'auto'}>
              <Box
                padding={'20px'}
                boxShadow={'0px 10px 61px 26px rgba(0,0,0,0.1)'}
              >
                <AiFillEye color="#ff9933" fontSize={'100px'} />
                <Heading
                  fontWeight={'medium'}
                  fontFamily={'roboto'}
                  textTransform={'uppercase'}
                >
                  Vision
                </Heading>
                <Text
                  fontSize={'15px'}
                  fontFamily={'montserrat'}
                  textAlign={'justify'}
                >
                  To be a pioneering force in reshaping the employment landscape through cutting-edge technology, envisioning a future where job seekers effortlessly access, connect with, and thrive in suitable career opportunities tailored to their location and skills. PGRKAM aims to empower candidates with real-time, geospatially precise job notifications via Augmented Reality (AR) and Global Positioning System (GPS) integration. By harnessing the power of Machine Learning (ML) and Data Science, we aspire to provide personalized recommendations, revolutionizing the way individuals discover and pursue meaningful employment, ultimately contributing to professional growth and economic prosperity.
                </Text>
              </Box>
              <Box
                marginTop={'20px'}
                padding={'20px'}
                boxShadow={'0px 10px 61px 26px rgba(0,0,0,0.1)'}
              >
                <IoIosRocket color="#ff9933" fontSize={'100px'} />
                <Heading
                  fontWeight={'medium'}
                  fontFamily={'roboto'}
                  textTransform={'uppercase'}
                >
                  Mission
                </Heading>
                <Text
                  fontSize={'15px'}
                  fontFamily={'montserrat'}
                  textAlign={'justify'}
                >
                 Our mission is to provide prospective candidates with a state-of-the-art employment data platform through the PGRKAM web application. We are dedicated to delivering real-time, geospatially accurate job notifications using Augmented Reality (AR) and Global Positioning System (GPS) technologies. We strive to connect job seekers with employers and skill development initiatives effortlessly while offering personalized recommendations through Machine Learning (ML) and Data Science. Our goal is to enhance user experiences, foster professional growth, and ensure that every candidate can find their ideal job within their geographical area.
                </Text>
              </Box>
            </VStack>
            <Box margin={'auto'} marginTop={'100px'} width={['100%','40%']} >
              <Image width={'90%'} src={mission} />
            </Box>
          </Stack>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default OurMission;
