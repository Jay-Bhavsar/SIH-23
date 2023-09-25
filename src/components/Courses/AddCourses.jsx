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
  const interest =["Intersts1", "Interests2", "Interests3", "Interests4", "Interests5", "Interests6", "Interests7", "Interests8"]
  const skills = ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7"];
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const template = {
    courseName : "",
    thumbnail : "",
    creator : "",
    price : "",
    numOfLecttures : "",
    category : "",
    description : "",
  }
  const [course, setCourse] = useState({...template});
  
  function submitCourse() {
    console.log("Clicked submit course");
    const uid = sessionStorage.getItem("uid");
    // Fetch company Id and put her (Very important)
    const temp = {
      ...course,
      uid: uid,
      skills : selectedSkills,
      categories : selectedInterests
    };
    fetch("https://sih23-backend.vercel.app/course", {
      method: "POST",
      body: JSON.stringify(temp),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resposne) => resposne.json())
      .then((data) => {
        console.log(data);
        setCourse(template);
        setSelectedInterests([]);
        setSelectedSkills([]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

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
            <FaLaptopCode fontSize={"300px"} color="white" />
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
                  value={course.courseName}
                    onChange={(e) =>
                      setCourse({ ...course, courseName: e.target.value })
                    }
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
                value={course.creator}
                onChange={(e) =>
                  setCourse({ ...course, creator: e.target.value })
                }
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Name of Creator"
                size="md"
              />
              <InputGroup>
                <Input 
                  variant={"filled"} 
                  value={course.price}
                  onChange={(e) =>
                    setCourse({ ...course, price: e.target.value })
                  } placeholder="Price of Course" 
                />
              <Input 
                value={course.numOfLecttures}
                onChange={(e) =>
                  setCourse({ ...course, numOfLecttures: e.target.value })
                }
                variant={"filled"}
                placeholder="Number of Lectures"
               />
              </InputGroup>

              <Multiselect
                placeholder="Select the Categories"
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
                placeholder="Skills to be gained"
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

              <Textarea
                 value={course.description}
                  onChange={(e) =>
                    setCourse({ ...course, description: e.target.value })
                  }
                placeholder="Description of Course"
              />
              <Button onClick = {submitCourse} size={"lg"} colorScheme="orange" variant={"solid"}>
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
