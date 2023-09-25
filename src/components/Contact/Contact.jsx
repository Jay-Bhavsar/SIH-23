import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiCurrentLocation, BiGlobe, BiPhone } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={['150vh',"100vh"]}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        marginTop={'50px'}
      >
        <Stack
          width={['90%',"80%"]}
          height={"70%"}
          margin={"auto"}
          boxShadow={"0px 10px 61px 26px rgba(0,0,0,0.1)"}
          marginTop={"40px"}
          direction={['column','row']}
        >
          <HStack
          width={['100%',"60%"]}
            height={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            padding={'20px'}
          >
            <VStack width={'100%'}>
              <Heading
                marginY={"20px"}
                fontWeight={"medium"}
                textTransform={"uppercase"}
                fontFamily={"montserrat"}
              >
                Contact Us
              </Heading>
              <HStack>
                <Input _placeholder={"black"} placeholder="Name" size="md" />
                <Input placeholder="Email" size="md" />
              </HStack>
              <Input placeholder="Subject" size="md" />
              <Textarea rows={"10"} placeholder="Message" />
              <Button variant={"solid"} size={"lg"} colorScheme="orange">
                Submit
              </Button>
            </VStack>
          </HStack>
          <Box width={"100%"} height={"100%"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750640.8605455519!2d74.09176708178154!3d31.02010763357356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1695449049956!5m2!1sen!2sin"
              width={"100%"}
              height="100%"
            ></iframe>
          </Box>
        </Stack>
        <HStack height={"30%"} width={"90%"}>
          <HStack
            minHeight={"100%"}
            width={"100%"}
            margin={"auto"}
            display={"flex"}
            flexWrap={"wrap"}
          >
            <VStack width={["40%", "20%"]} margin={"auto"}>
              <VStack
                width={"50px"}
                height={"50px"}
                borderRadius={"50%"}
                background={"orange"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"columnn"}
              >
                <AiOutlineMail fontSize={"30px"} color="white" />
              </VStack>
              <Text textAlign={"center"}>
                <b>Email</b> <br />
                <Link>sharma.karan27oct@gmail.com</Link>
              </Text>
            </VStack>
            <VStack width={["40%", "20%"]} margin={"auto"}>
              <VStack
                width={"50px"}
                height={"50px"}
                borderRadius={"50%"}
                background={"orange"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"columnn"}
              >
                <BiCurrentLocation fontSize={"30px"} color="white" />
              </VStack>
              <Text textAlign={"center"}>
                <b>Address</b>
                <br />
                Punjab, India
              </Text>
            </VStack>
            <VStack width={["40%", "20%"]} margin={"auto"}>
              <VStack
                width={"50px"}
                height={"50px"}
                borderRadius={"50%"}
                background={"orange"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"columnn"}
              >
                <BiPhone fontSize={"30px"} color="white" />
              </VStack>
              <Text textAlign={"center"}>
                <b>Phone</b>
                <br /> +91 6377535991
              </Text>
            </VStack>

            <VStack width={["40%", "20%"]} margin={"auto"}>
              <VStack
                width={"50px"}
                height={"50px"}
                borderRadius={"50%"}
                background={"orange"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"columnn"}
              >
                <BiGlobe fontSize={"30px"} color="white" />
              </VStack>
              <Text textAlign={"center"}>
                <b>Website</b>
                <br />
                <Link>sharma.karan27oct@gmail.com</Link>
              </Text>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default Contact;
