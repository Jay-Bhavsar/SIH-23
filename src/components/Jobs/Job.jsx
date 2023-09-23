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
  Tag,
  TagLabel,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import imag from '../Assets/img/log.svg';
import {
  AiOutlineHome,
  AiOutlinePlayCircle,
  AiOutlineCalendar,
  AiFillCopy,
} from 'react-icons/ai';
import { BiPlusMedical } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Job = () => {
  return (
    <>
      <Box
        width={'100vw'}
        minHeight={'100vh'}
        display={'flex'}
        flexDir={'column'}
        // justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading
          textAlign={'center'}
          marginTop={'50px'}
          fontFamily={'montserrat'}
        >
          Find your dream job now !!
        </Heading>
        <Text textAlign={'center'} fontFamily={'montserrat'}>
          5 lakh+ jobs for you to explore
        </Text>
        <Link to={'/jobform'}>
          <Button
            textAlign={'center'}
            size={'lg'}
            colorScheme="orange"
            variant={'outline'}
            leftIcon={<BiPlusMedical fontWeight={'bolder'} />}
            marginTop={'40px'}
          >
            Add a new Job
          </Button>
        </Link>
        <Flex
          width={'90%'}
          margin={'auto'}
          justifyContent={'space-evenly'}
          flexWrap={'wrap'}
          flexDir={'row'}
        >
          <Card
            width="40%"
            boxShadow={'0px 10px 61px 26px rgba(0,0,0,0.1)'}
            margin={'20px'}
          >
            <CardBody>
              <VStack>
                <HStack justifyContent={'space-between'}>
                  <Flex
                    width={'70%'}
                    justifyContent={'space-between'}
                    flexDir={'column'}
                  >
                    <Text textAlign={'start'}>
                      <Badge ml="1" colorScheme="green">
                        Actively Hiring
                      </Badge>
                    </Text>
                    <Text
                      textAlign={'start'}
                      fontWeight={'bold'}
                      fontFamily={'roboto'}
                      fontSize={'20px'}
                    >
                      Stock Marketing Management{' '}
                      <Badge ml="1" colorScheme="green">
                        New
                      </Badge>
                    </Text>
                    <Text
                      fontFamily={'roboto'}
                      color={'grey'}
                      fontWeight={'bold'}
                      justifyContent={'start'}
                    >
                      GrowthClues
                    </Text>
                  </Flex>
                  <Image width={'20%'} src={imag} />
                </HStack>
                <Divider />
                <Flex
                  width={'100%'}
                  justifyContent={'flex-start'}
                  alignItems={'center'}
                >
                  <AiOutlineHome />
                  <Text fontFamily={'roboto'}>Jaipur, Rajasthan</Text>
                </Flex>
                <Divider />
                <HStack
                  width={'100%'}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <VStack>
                    <Flex alignItems={'center'}>
                      <AiOutlinePlayCircle color="grey" />
                      <Text
                        color={'grey'}
                        fontFamily={'roboto'}
                        textTransform={'uppercase'}
                      >
                        Start date
                      </Text>
                    </Flex>
                    <Text fontFamily={'roboto'} textTransform={'uppercase'}>
                      Immediately
                    </Text>
                  </VStack>
                  <VStack>
                    <Flex alignItems={'center'}>
                      <AiOutlineCalendar color="grey" />
                      <Text
                        textTransform={'uppercase'}
                        color={'grey'}
                        fontFamily={'roboto'}
                      >
                        Duration
                      </Text>
                    </Flex>
                    <Text textTransform={'uppercase'} fontFamily={'roboto'}>
                      1Month
                    </Text>
                  </VStack>
                  <VStack>
                    <Flex alignItems={'center'}>
                      <AiFillCopy color="grey" />
                      <Text
                        textTransform={'uppercase'}
                        color={'grey'}
                        fontFamily={'roboto'}
                      >
                        Stipend
                      </Text>
                    </Flex>
                    <Text textTransform={'uppercase'} fontFamily={'roboto'}>
                      1000rs-2000rs/month
                    </Text>
                  </VStack>
                </HStack>
                <HStack
                  spacing={'4'}
                  width={'100%'}
                  justifyContent={'start'}
                  marginTop={'15px'}
                >
                  <Tag variant="subtle" colorScheme="blackAlpha">
                    <TagLabel fontFamily={'roboto'} color={'grey'}>
                      2 Weeks Ago
                    </TagLabel>
                  </Tag>
                  <Tag variant="subtle" colorScheme="blackAlpha">
                    <TagLabel fontFamily={'roboto'} color={'grey'}>
                      Internship
                    </TagLabel>
                  </Tag>
                  <Tag variant="subtle" colorScheme="blackAlpha">
                    <TagLabel fontFamily={'roboto'} color={'grey'}>
                      Part Time
                    </TagLabel>
                  </Tag>
                </HStack>
              </VStack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link to={'/jobs'}>
                  <Button
                    fontFamily={'montserrat'}
                    variant="ghost"
                    colorScheme="orange"
                  >
                    View Details
                  </Button>
                  <Button
                    fontFamily={'montserrat'}
                    variant="solid"
                    colorScheme="orange"
                  >
                    Apply Now
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Flex>
      </Box>
    </>
  );
};

export default Job;
