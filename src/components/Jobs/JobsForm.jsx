import {
    Box,
    Button,
    HStack,
    Heading,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { IoIosDocument } from 'react-icons/io';
  const JobsForm = () => {
    return (
      <>
        <Box className="userReg" width={'100vw'} height={'100vh'}>
          <HStack
            width={'100vw'}
            height={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            // margin={'auto'}
          >
            <VStack width={'25%'}>
              <IoIosDocument widsth fontSize={'300px'} color="white" />
              <Text
                color={'whiteAlpha.900'}
                fontSize={'40px'}
                fontWeight={'bold'}
              >
                Add a New Job
              </Text>
              <Text
                fontSize={'20px'}
                color={'whiteAlpha.900'}
                textAlign={'center'}
              >
              </Text>
            </VStack>
            <VStack width={'70%'} >
              <Heading
                marginBottom={'40px'}
                fontWeight={'medium'}
                fontFamily={'roboto'}
              >
                Add a new Job
              </Heading>
              <Stack spacing={4} overflowX={'scroll'}>
                <HStack>
                  <Input
                    variant={'filled'}
                    _placeholder={{ color: 'black' }}
                    placeholder="Company ID"
                    size="md"
                  />
                  
                </HStack>
                <Input
                  variant={'filled'}
                  _placeholder={{ color: 'black' }}
                  placeholder="Job Role"
                  size="md"
                />
                <Input
                  variant={'filled'}
                  _placeholder={{ color: 'black' }}
                  placeholder="Last Date to Apply"
                  size="md"
                />
                <HStack>
                  <Input
                    variant={'filled'}
                    _placeholder={{ color: 'black' }}
                    placeholder="Location"
                    size="md"
                  />
                  <Input
                    variant={'filled'}
                    _placeholder={{ color: 'black' }}
                    placeholder="Number of Openings"
                    size="md"
                  />
                </HStack>
                <Input
                    variant={'filled'}
                    _placeholder={{ color: 'black' }}
                    placeholder="Salary Range"
                    size="md"
                  />
                <Textarea variant={'filled'} placeholder='Who can Apply ?' />
                <Textarea variant={'filled'} placeholder='Job Description' />

                <Select placeholder="Job Type" variant={'filled'}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 4</option>
                  <option value="option4">Option 5</option>
                  <option value="option5">Option 6</option>
                  <option value="option6">Option 7</option>
                  <option value="option7">Option 8</option>
                  <option value="option8">Option 9</option>
                  <option value="option9">Option 10</option>
                  <option value="option10">Option 11</option>
                  <option value="option11">Option 12</option>
                  <option value="option12">Option 13</option>
                </Select>
                <Textarea variant={'filled'} placeholder='Skills Required' />
                <Button size={'lg'} colorScheme="orange" variant={'solid'}>
                  Submit
                </Button>
              </Stack>
            </VStack>
          </HStack>
        </Box>
      </>
    );
  };
  
  export default JobsForm;
  