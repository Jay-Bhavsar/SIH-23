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
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import Multiselect from "multiselect-react-dropdown";
const AddCourses = () => {
  const [interest, setinterest] = useState([
    "web development",
    "machine learning",
  ]);
  const [skills, setskills] = useState(["dancing", "gaming"]);
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
            <FaLaptopCode widsth fontSize={"300px"} color="white" />
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
              Add a new Course
            </Text>
          </VStack>
          <VStack width={"70%"}>
            <Stack spacing={4}>
              <HStack>
                <Input
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="Name of Course"
                  size="md"
                />
              </HStack>
                <Text fontFamily={'montserrat'}>Thumbnail Profile</Text>
                <input
                  type="file"
                  placeholder="Select your avatar"
                  className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                />
              <Input
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Name of Creator"
                size="md"
              />
              <InputGroup>
                <Input variant={"filled"} placeholder="Price of Course" />
                <Input variant={"filled"} placeholder="Number of Lectures" />
              </InputGroup>
              <Multiselect
                isObject={false}
                onRemove={(event) => {
                  console.log(event);
                }}
                onSelect={(event) => {
                  console.log(event);
                }}
                options={interest}
                placeholder="Skills to be provided"
              />
              <Select placeholder="Category of Course" variant={"filled"}>
                <option value="option1">Less than 2years </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Textarea placeholder="Description of Course" />
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

export default AddCourses;
