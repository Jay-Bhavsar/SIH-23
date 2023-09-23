import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { IoIosRocket } from "react-icons/io";
import Multiselect from "multiselect-react-dropdown";
const UserReg = () => {
  const [interest, setinterest] = useState(['web development','machine learning'])
  const [skills, setskills] = useState(['dancing','gaming'])
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
              fontSize={"20px"}
              color={"whiteAlpha.900"}
              textAlign={"center"}
            >
              You are just 30min away from getting your Skill based job near you
              !!
            </Text>
          </VStack>
          <VStack width={"70%"}>
            <Heading
              marginBottom={"40px"}
              fontWeight={"medium"}
              fontFamily={"roboto"}
            >
              Apply as a User
            </Heading>
            <Stack spacing={4}>
              <HStack>
                <Input
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="Full Name"
                  size="md"
                />
                <Input
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="DOB"
                  size="md"
                  type="datetime-local"
                />
              </HStack>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  variant={"filled"}
                  placeholder="phone number"
                />
              </InputGroup>

              <Input
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Enter Your Address"
                size="md"
              />
              <Input
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Address Pincode"
                size="md"
              />
              <HStack>
                <Input
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="City"
                  size="md"
                />
                <Input
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="State"
                  size="md"
                />
              </HStack>

              <Input
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Adhhar Number"
                size="md"
              />
              <Multiselect
                isObject={false}
                onRemove={(event) => {
                  console.log(event);
                }}
                onSelect={(event) => {
                  console.log(event);
                }}
                options={interest}
              />
              <Select
                placeholder="Select your Professional Experience"
                variant={"filled"}
              >
                <option value="option1">Less than 2years </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Multiselect
                isObject={false}
                onRemove={(event) => {
                  console.log(event);
                }}
                onSelect={(event) => {
                  console.log(event);
                }}
                options={skills}
              />
              <Button size={"lg"} colorScheme="orange" variant={"solid"}>
                Submit
              </Button>
            </Stack>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default UserReg;
