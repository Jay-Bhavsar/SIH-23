import {
    Box,
    Button,
    HStack,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Stack,
    Text,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { IoIosRocket } from "react-icons/io";
  import { Link } from "react-router-dom";
  const BeforeUser = () => {
    return (
      <>
        <Box className="userReg" width={"100vw"} height={"100vh"}>
          <HStack
            width={"100vw"}
            height={"100vh"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            // margin={'auto'}
          >
            <VStack width={"25%"}>
              <IoIosRocket widsth fontSize={"300px"} color="white" />
              <Text
                color={"whiteAlpha.900"}
                fontSize={"40px"}
                fontWeight={"bold"}
              >
                Welcome !
              </Text>
              <Text
                fontSize={"25px"}
                color={"whiteAlpha.900"}
                textAlign={"center"}
              >
                Sign Up here
              </Text>
              <Text
                fontSize={"20px"}
                color={"whiteAlpha.900"}
                textAlign={"center"}
              >
                We help you find the skillful and compatible candidate for your
                organization !!
              </Text>
            </VStack>
            <VStack width={"70%"}>
              <Stack marginTop={"50px"} spacing={4} overflowX={"scroll"}>
                <Input
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="Enter Email ID"
                  size="lg"
                />
                <Input
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="Enter Password"
                  size="lg"
                />
                <Input
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="Confirm Password"
                  size="lg"
                />
                <Link to={'/reguser'}>
                  <Button size={"lg"} colorScheme="orange" variant={"solid"}>
                    Submit
                  </Button>
                </Link>
              </Stack>
            </VStack>
          </HStack>
        </Box>
      </>
    );
  };
  
  export default BeforeUser;
  