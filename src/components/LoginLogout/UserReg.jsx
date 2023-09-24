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
  const skills = ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7"]
  const interest =["Intersts1", "Interests2", "Interests3", "Interests4", "Interests5", "Interests6", "Interests7", "Interests8"]
  
  const [selectedSkills, setSelectedSkills ] = useState([]);
  const [selectedInterests, setSelectedInterests ] = useState([]);
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
            <IoIosRocket fontSize={"300px"} color="white" />
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
              Apply as a new User
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
              <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
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
              <Select
                placeholder="Select your Professional Experience"
                variant={"filled"}
              >
                <option value="option1">0 - 1 Years</option>
                <option value="option2">1 - 2 Years</option>
                <option value="option3">2 - 3 Years</option>
                <option value="option3">3 - 4 Years</option>
                <option value="option3">4 - 5 Years</option>
                <option value="option3">5+ Years</option>
              </Select>

              <Multiselect
                placeholder="Selct your interests"
                isObject={false}
                showCheckbox={true}
                avoidHighlightFirstOption={true}
                showArrow={true}
                onRemove={(event) => {
                  setSelectedInterests(event);
                }}
                onSelect={(event) => {
                  setSelectedInterests(event);
                }}
                options={interest}
              />
              
              <Multiselect
                placeholder={"Tell us about your skills"}
                isObject={false}
                showCheckbox={true}
                avoidHighlightFirstOption={true}
                showArrow={true}
                onRemove={(event) => {
                  setSelectedSkills(event);
                }}
                onSelect={(event) => {
                  setSelectedSkills(event);
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
