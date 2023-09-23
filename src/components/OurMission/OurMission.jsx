import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { IoIosRocket } from 'react-icons/io';
import mission from '../Assets/img/pngwing.com.png';
const OurMission = () => {
  return (
    <>
      <Box width={'100%'} minHeight={'100vh'}>
        <Box
          width={'80%'}
          minHeight={'100vh'}
          margin={'auto'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'column'}
        >
          <HStack>
            <VStack width={'60%'} margin={'auto'}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore ea enim facere reprehenderit, voluptas optio placeat
                  ullam similique itaque saepe magnam suscipit corporis harum
                  doloremque perspiciatis? Omnis tempora saepe, animi
                  consectetur ex, itaque corporis natus asperiores repudiandae,
                  at voluptatem cupiditate quo accusamus nisi atque aspernatur
                  corrupti laboriosam blanditiis? Et maxime totam sed similique,
                  rem quasi ratione optio vel. Sit eos maxime quis, perspiciatis
                  porro quas dolorum ex vero similique aliquid, quasi dolore
                  quam consequatur! Tempore, dolor nesciunt. Itaque, tenetur?
                  Soluta autem ut incidunt impedit neque quis, mollitia eum
                  tempore voluptas sequi excepturi rem quam omnis aut facere,
                  quasi ipsum voluptate!
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore ea enim facere reprehenderit, voluptas optio placeat
                  ullam similique itaque saepe magnam suscipit corporis harum
                  doloremque perspiciatis? Omnis tempora saepe, animi
                  consectetur ex, itaque corporis natus asperiores repudiandae,
                  at voluptatem cupiditate quo accusamus nisi atque aspernatur
                  corrupti laboriosam blanditiis? Et maxime totam sed similique,
                  rem quasi ratione optio vel. Sit eos maxime quis, perspiciatis
                  porro quas dolorum ex vero similique aliquid, quasi dolore
                  quam consequatur! Tempore, dolor nesciunt. Itaque, tenetur?
                  Soluta autem ut incidunt impedit neque quis, mollitia eum
                  tempore voluptas sequi excepturi rem quam omnis aut facere,
                  quasi ipsum voluptate!
                </Text>
              </Box>
            </VStack>
            <Box width={'40%'} >
              <Image width={'90%'} src={mission} />
            </Box>
          </HStack>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default OurMission;
