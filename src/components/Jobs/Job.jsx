import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import imag from "../Assets/img/log.svg";
import {
  AiOutlineHome,
  AiOutlinePlayCircle,
  AiOutlineCalendar,
  AiFillCopy,
} from "react-icons/ai";
import { BiPlusMedical } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://sih23-backend.vercel.app/allJobs", {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resposne) => resposne.json())
      .then((data) => {
        setIsLoading(!isLoading);
        setJobs([...data]);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    setIsLoading(false);
  }, []);

  const JobCard = (item, index) => {
    return (
      <Card
        key={index}
        width={["100%", "40%"]}
        boxShadow={"0px 10px 61px 26px rgba(0,0,0,0.1)"}
        margin={"20px"}
      >
        <CardBody>
          <VStack>
            <HStack justifyContent={"space-between"}>
              <Flex
                width={"60%"}
                justifyContent={"space-between"}
                flexDir={"column"}
              >
                <Text textAlign={"start"}>
                  <Badge ml="1" colorScheme="green">
                    {" "}
                    Actively Hiring{" "}
                  </Badge>
                </Text>
                <Text
                  textAlign={"start"}
                  fontWeight={"bold"}
                  fontFamily={"roboto"}
                  fontSize={"20px"}
                >
                  {item.item.jobName}
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                </Text>
                <Text
                  fontFamily={"roboto"}
                  color={"grey"}
                  fontWeight={"bold"}
                  justifyContent={"start"}
                >
                  GrowthClues
                </Text>
              </Flex>
              <Image width={['40%',"20%"]} src={imag} />
            </HStack>
            <Divider />
            <Flex
              width={"100%"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <AiOutlineHome />
              <Text fontFamily={"roboto"}>{item.item.location}</Text>
            </Flex>
            <Divider />
            <HStack
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <VStack>
                <Flex alignItems={"center"}>
                  <AiOutlinePlayCircle color="grey" />
                  <Text
                    color={"grey"}
                    fontFamily={"roboto"}
                    textTransform={"uppercase"} fontSize={['10px','16px']}
                  >
                    Start date
                  </Text>
                </Flex>
                <Text fontFamily={"roboto"} textTransform={"uppercase"} fontSize={['10px','16px']}>
                  {item.item.lastDate}
                </Text>
              </VStack>
              <VStack>
                <Flex alignItems={"center"}>
                  <AiOutlineCalendar color="grey" />
                  <Text
                    textTransform={"uppercase"}
                    color={"grey"}
                    fontFamily={"roboto"}
                    fontSize={['10px','16px']}
                  >
                    Duration
                  </Text>
                </Flex>
                <Text textTransform={"uppercase"} fontFamily={"roboto"} fontSize={['10px','16px']}>
                  1Month
                </Text>
              </VStack>
              <VStack>
                <Flex alignItems={"center"}>
                  <AiFillCopy color="grey" />
                  <Text
                    textTransform={"uppercase"}
                    color={"grey"}
                    fontFamily={"roboto"}
                    fontSize={['10px','16px']}
                  >
                    Stipend
                  </Text>
                </Flex>
                <Text textTransform={"uppercase"} fontFamily={"roboto"} fontSize={['10px','16px']}>
                  {item.item.salRange + " /month"}
                </Text>
              </VStack>
            </HStack>
            <HStack
              spacing={"4"}
              width={"100%"}
              justifyContent={"start"}
              marginTop={"15px"}
            >
              <Tag variant="subtle" colorScheme="blackAlpha">
                <TagLabel fontFamily={"roboto"} color={"grey"}>
                  2 Weeks Ago
                </TagLabel>
              </Tag>
              <Tag variant="subtle" colorScheme="blackAlpha">
                <TagLabel fontFamily={"roboto"} color={"grey"}>
                  Internship
                </TagLabel>
              </Tag>
              <Tag variant="subtle" colorScheme="blackAlpha">
                <TagLabel fontFamily={"roboto"} color={"grey"}>
                  Part Time
                </TagLabel>
              </Tag>
            </HStack>
          </VStack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to={"/jobs"}>
              <Button
                fontFamily={"montserrat"}
                variant="ghost"
                colorScheme="orange"
              >
                View Details
              </Button>
              <Button
                fontFamily={"montserrat"}
                variant="solid"
                colorScheme="orange"
              >
                Apply Now
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  };

  return (
    <>
      <Box
        width={"100vw"}
        minHeight={"100vh"}
        display={"flex"}
        flexDir={"column"}
        // justifyContent={'center'}
        alignItems={"center"}
      >
        <Heading
          textAlign={"center"}
          marginTop={['100px',"50px"]}
          fontFamily={"montserrat"}
        >
          Find your dream job now !!
        </Heading>
        <Text textAlign={"center"} fontFamily={"montserrat"}>
          5 lakh+ jobs for you to explore
        </Text>
        <Stack width={'100%'} spacing={'2'} flexDir={['column','row']} display={'flex'} justify={'center'} alignItems={'center'}>
          <Link to={"/jobform"}>
              <Button
                textAlign={"center"}
                size={"lg"}
                colorScheme="orange"
                variant={"ghost"}
                leftIcon={<BiPlusMedical fontWeight={"bolder"} />}
                marginTop={"40px"}
              >
                Add a new Job
              </Button>
          </Link>
          <Link>
            <Button
              textAlign={"center"}
              size={"lg"}
              colorScheme="orange"
              variant={"ghost"}
              leftIcon={<Search fontWeight={"bolder"} />}
              marginTop={['5px',"40px"]}
            >
              Search Nearby jobs
            </Button>
          </Link>
        </Stack>
        <Flex
          width={"100%"}
          margin={"auto"}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
          flexDir={"row"}
        >
          {jobs.map((item, index) => (
            <JobCard item={item} index={index} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Job;
