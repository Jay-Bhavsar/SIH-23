import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  Box,
  Divider,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
const Recruiters = () => {
  return (
    <>
      <Box width={'90%'} margin={'auto'} minHeight={'auto'}>
        <Box  background={'#ff9933'} marginBottom={'100px'}>
          <Text  fontSize={['20px','27px']} padding={'2'} marginBottom={'5'} textAlign={'center'}>
            Our Companies & Recruiters
          </Text>
        </Box>
        <Swiper
          spaceBetween={50}
          slidesPerView={3.2}
          
        >
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>
              <Divider />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>
              <Divider />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>
              <Divider />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>
              <Divider />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>
              <Divider />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>
              <Divider />
            </Card>
          </SwiperSlide>
          <HStack justifyContent={'center'} margin={'20px'} marginBottom={'100px'}>
            <Text
              background={'black'}
              color={'trasparent'}
              borderRadius={'50%'}
              height={'10px'}
              width={'10px'}
            >
              1
            </Text>
            <Text
              background={'black'}
              color={'trasparent'}
              borderRadius={'50%'}
              height={'10px'}
              width={'10px'}
            >
              1
            </Text>
            <Text
              background={'black'}
              color={'trasparent'}
              borderRadius={'50%'}
              height={'10px'}
              width={'10px'}
            >
              1
            </Text>
          </HStack>
        </Swiper>
      </Box>
    </>
  );
};

export default Recruiters;
