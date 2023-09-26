import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Divider, HStack, Image, Text } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import c1 from '../Assets/img/c1.png'
import c2 from '../Assets/img/c2.png'
import c3 from '../Assets/img/c3.png'
import c4 from '../Assets/img/c4.png'
import c5 from '../Assets/img/c5.png'
import c6 from '../Assets/img/c6.png'
import c7 from '../Assets/img/c7.png'
const Recruiters = () => {
  return (
    <>
      <Box width={"90%"} margin={"auto"} minHeight={"auto"} display={['none','block']}>
        <Box background={"#ff9933"} marginBottom={"100px"}>
          <Text
            fontSize={["20px", "27px"]}
            padding={"2"}
            marginBottom={"5"}
            textAlign={"center"}
          >
            Our Companies & Recruiters
          </Text>
        </Box>
        <Swiper spaceBetween={10} slidesPerView={3.2}>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src={c1}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  width={'100%'}
                  
                />
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src={c2}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  width={'100%'}
                />
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src={c3}
                  borderRadius="lg"
                  width={'50%'}
                  align={'center'}
                />
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src={c4}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  width={'100%'}
                />
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src={c5}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  width={'100%'}
                />
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src={c6}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  width={'100%'}
                />
              </CardBody>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card variant="filled" maxW="sm">
              <CardBody>
                <Image
                  src={c7}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  width={'100%'}
                />
              </CardBody>
            </Card>
          </SwiperSlide>
          <HStack
            justifyContent={"center"}
            margin={"20px"}
            marginBottom={"100px"}
          >
            <Text
              background={"black"}
              color={"trasparent"}
              borderRadius={"50%"}
              height={"10px"}
              width={"10px"}
            >
              1
            </Text>
            <Text
              background={"black"}
              color={"trasparent"}
              borderRadius={"50%"}
              height={"10px"}
              width={"10px"}
            >
              1
            </Text>
            <Text
              background={"black"}
              color={"trasparent"}
              borderRadius={"50%"}
              height={"10px"}
              width={"10px"}
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
