import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import profimg from "../Assets/img/karan.jpg";
import { LocationOn, Person } from "@mui/icons-material";
import { FaLaptopCode } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import AboutUser from "./AboutUser";
import CourseUser from "./CourseUser";
import JobUser from "./JobUser";

const Profile = () => {
  return (
    <>
      <Box width={"100vw"} minHeight={"100vh"}>
        <VStack width={"90%"} margin={"auto"} height={"100%"} display={'flex'}>
          <Heading
            marginTop={"30px"}
            fontFamily={"montserrat"}
            textTransform={"uppercase"}
            color={"#ff9933"}
            fontWeight={'medium'}
          >
            Profile
          </Heading>
          <HStack width={"100%"} height={"90%"}>
            <Box
              padding={"20px"}
              height={"100vh"}
              width={"30%"}
              margin={"auto"}
              //   border={"1px solid black"}
            >
              <VStack>
                <Image width={"80%"} src={profimg} />
                <VStack width={"100%"}>
                  <VStack width={"100%"} marginBottom={"20px"}>
                    <Text
                      fontWeight={"bold"}
                      textAlign={"start"}
                      color={"grey"}
                    >
                      ______________SKILLS________________
                    </Text>
                    <VStack width={"100%"}>
                      <Text textAlign={"start"}>Graphic Designing</Text>
                      <Text textAlign={"start"}>Graphic Designing</Text>
                      <Text textAlign={"start"}>Graphic Designing</Text>
                      <Text textAlign={"start"}>Graphic Designing</Text>
                    </VStack>
                  </VStack>
                  <VStack width={"100%"} marginBottom={"20px"}>
                    <Text
                      fontWeight={"bold"}
                      textAlign={"start"}
                      color={"grey"}
                    >
                      ____________INTEREST______________
                    </Text>
                    <VStack width={"100%"}>
                      <Text textAlign={"start"}>Graphic Designing</Text>
                      <Text textAlign={"start"}>Graphic Designing</Text>
                      <Text textAlign={"start"}>Graphic Designing</Text>
                      <Text textAlign={"start"}>Graphic Designing</Text>
                    </VStack>
                  </VStack>
                </VStack>
              </VStack>
            </Box>
            <Box
              minHeight={"100vh"}
              width={"60%"}
              margin={"auto"}
              //   border={"1px solid black"}
            >
              <HStack marginTop={'50px'}>
                <Heading fontFamily={"andika"} fontSize={"35px"}>
                  Karan Sharma
                </Heading>
                <Text
                  fontSize={"15px"}
                  color={"grey"}
                  fontFamily={"montserrat"}
                  alignItems={"center"}
                >
                  <LocationOn fontSize={"15px"} />
                  Jaipur, Rajasthan
                </Text>
              </HStack>
              <Heading
                fontSize={"15px"}
                color={"blue"}
                fontWeight={"medium"}
                fontStyle={"italic"}
                marginTop={"5px"}
              >
                Web Developer
              </Heading>
              <Heading
                fontSize={"20px"}
                fontWeight={"medium"}
                marginTop={"15px"}
              >
                <span style={{ color: "grey", fontWeight: "bold" }}>
                  Professional Experience :{" "}
                </span>{" "}
                2 Years
              </Heading>
              <HStack marginTop={'20px'}>
                <Heading
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  color={"grey"}
                //   marginTop={"5px"}
                >
                  Resume :
                </Heading>
                <Text fontSize={"20px"} textDecor={'underline'} color={'blue'}>Resume.pdf</Text>
                <Button marginX={'20px'} colorScheme="orange" size={'sm'} variant={'outline'}>Add/Update Resume</Button>
              </HStack>
              <Tabs size="lg" variant="enclosed" marginTop={"50px"}>
                <TabList>
                  <Tab
                    fontSize={"17px"}
                    fontFamily={"montserrat"}
                    fontWeight={"medium"}
                    marginX={"19px"}
                  >
                    <Person /> About
                  </Tab>
                  <Tab
                    fontSize={"17px"}
                    fontFamily={"montserrat"}
                    fontWeight={"medium"}
                    marginX={"19px"}
                  >
                    <FaLaptopCode />
                      Courses Applied
                  </Tab>
                  <Tab
                    fontSize={"17px"}
                    fontFamily={"montserrat"}
                    fontWeight={"medium"}
                    marginX={"19px"}
                  >
                    <BsBriefcaseFill />
                    Jobs Applied
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <AboutUser />
                  </TabPanel>
                  <TabPanel>
                    <CourseUser/>
                  </TabPanel>
                  <TabPanel>
                    <JobUser/>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Profile;
