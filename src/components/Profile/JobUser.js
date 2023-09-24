import React from 'react'
import imag from "../../components/Assets/img/log.svg";
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Image,
  Tag,
  TagLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlinePlayCircle,
  AiOutlineCalendar,
  AiFillCopy,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const JobUser = () => {
    return (
        <>
            <HStack width={'100%'} overflowX={'scroll'} margin={'auto'}>
                <Card
                    minW="50%"
                    maxW={'50%'}
                    boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.1)"}
                    margin={"20px"}
                >
                    <CardBody>
                        <VStack>
                            <HStack justifyContent={"space-between"}>
                                <Flex
                                    width={"70%"}
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
                                        Mechenical Engineer
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
                                <Image width={"20%"} src={imag} />
                            </HStack>
                            <Divider />
                            <Flex
                                width={"100%"}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                            >
                                <AiOutlineHome />
                                <Text fontFamily={"roboto"}>Jaipur, Rajasthan</Text>
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
                                            textTransform={"uppercase"}
                                        >
                                            Start date
                                        </Text>
                                    </Flex>
                                    <Text fontFamily={"roboto"} textTransform={"uppercase"}>
                                        27-10
                                    </Text>
                                </VStack>
                                <VStack>
                                    <Flex alignItems={"center"}>
                                        <AiOutlineCalendar color="grey" />
                                        <Text
                                            textTransform={"uppercase"}
                                            color={"grey"}
                                            fontFamily={"roboto"}
                                        >
                                            Duration
                                        </Text>
                                    </Flex>
                                    <Text textTransform={"uppercase"} fontFamily={"roboto"}>
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
                                        >
                                            Stipend
                                        </Text>
                                    </Flex>
                                    <Text textTransform={"uppercase"} fontFamily={"roboto"}>
                                        20000-30000
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
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card
                    minW="50%"
                    maxW={'50%'}
                    boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.1)"}
                    margin={"20px"}
                >
                    <CardBody>
                        <VStack>
                            <HStack justifyContent={"space-between"}>
                                <Flex
                                    width={"70%"}
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
                                        Mechenical Engineer
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
                                <Image width={"20%"} src={imag} />
                            </HStack>
                            <Divider />
                            <Flex
                                width={"100%"}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                            >
                                <AiOutlineHome />
                                <Text fontFamily={"roboto"}>Jaipur, Rajasthan</Text>
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
                                            textTransform={"uppercase"}
                                        >
                                            Start date
                                        </Text>
                                    </Flex>
                                    <Text fontFamily={"roboto"} textTransform={"uppercase"}>
                                        27-10
                                    </Text>
                                </VStack>
                                <VStack>
                                    <Flex alignItems={"center"}>
                                        <AiOutlineCalendar color="grey" />
                                        <Text
                                            textTransform={"uppercase"}
                                            color={"grey"}
                                            fontFamily={"roboto"}
                                        >
                                            Duration
                                        </Text>
                                    </Flex>
                                    <Text textTransform={"uppercase"} fontFamily={"roboto"}>
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
                                        >
                                            Stipend
                                        </Text>
                                    </Flex>
                                    <Text textTransform={"uppercase"} fontFamily={"roboto"}>
                                        20000-30000
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
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card
                    minW="50%"
                    maxW={'50%'}
                    boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.1)"}
                    margin={"20px"}
                >
                    <CardBody>
                        <VStack>
                            <HStack justifyContent={"space-between"}>
                                <Flex
                                    width={"70%"}
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
                                        Mechenical Engineer
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
                                <Image width={"20%"} src={imag} />
                            </HStack>
                            <Divider />
                            <Flex
                                width={"100%"}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                            >
                                <AiOutlineHome />
                                <Text fontFamily={"roboto"}>Jaipur, Rajasthan</Text>
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
                                            textTransform={"uppercase"}
                                        >
                                            Start date
                                        </Text>
                                    </Flex>
                                    <Text fontFamily={"roboto"} textTransform={"uppercase"}>
                                        27-10
                                    </Text>
                                </VStack>
                                <VStack>
                                    <Flex alignItems={"center"}>
                                        <AiOutlineCalendar color="grey" />
                                        <Text
                                            textTransform={"uppercase"}
                                            color={"grey"}
                                            fontFamily={"roboto"}
                                        >
                                            Duration
                                        </Text>
                                    </Flex>
                                    <Text textTransform={"uppercase"} fontFamily={"roboto"}>
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
                                        >
                                            Stipend
                                        </Text>
                                    </Flex>
                                    <Text textTransform={"uppercase"} fontFamily={"roboto"}>
                                        20000-30000
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
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card
                    minW="50%"
                    maxW={'50%'}
                    boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.1)"}
                    margin={"20px"}
                >
                    <CardBody>
                        <VStack>
                            <HStack justifyContent={"space-between"}>
                                <Flex
                                    width={"70%"}
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
                                        Mechenical Engineer
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
                                <Image width={"20%"} src={imag} />
                            </HStack>
                            <Divider />
                            <Flex
                                width={"100%"}
                                justifyContent={"flex-start"}
                                alignItems={"center"}
                            >
                                <AiOutlineHome />
                                <Text fontFamily={"roboto"}>Jaipur, Rajasthan</Text>
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
                                            textTransform={"uppercase"}
                                        >
                                            Start date
                                        </Text>
                                    </Flex>
                                    <Text fontFamily={"roboto"} textTransform={"uppercase"}>
                                        27-10
                                    </Text>
                                </VStack>
                                <VStack>
                                    <Flex alignItems={"center"}>
                                        <AiOutlineCalendar color="grey" />
                                        <Text
                                            textTransform={"uppercase"}
                                            color={"grey"}
                                            fontFamily={"roboto"}
                                        >
                                            Duration
                                        </Text>
                                    </Flex>
                                    <Text textTransform={"uppercase"} fontFamily={"roboto"}>
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
                                        >
                                            Stipend
                                        </Text>
                                    </Flex>
                                    <Text textTransform={"uppercase"} fontFamily={"roboto"}>
                                        20000-30000
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
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                
            </HStack>

        </>
    )
}

export default JobUser
