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
} from '@chakra-ui/react';
import React from 'react';
import { IoIosRocket } from 'react-icons/io';
const OrgReg = () => {
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
            <IoIosRocket widsth fontSize={'300px'} color="white" />
            <Text
              color={'whiteAlpha.900'}
              fontSize={'40px'}
              fontWeight={'bold'}
            >
              Welcome !
            </Text>
            <Text
              fontSize={'25px'}
              color={'whiteAlpha.900'}
              textAlign={'center'}
            >
              Apply as a new Organization
            </Text>
            <Text
              fontSize={'20px'}
              color={'whiteAlpha.900'}
              textAlign={'center'}
            >
              We help you find the skillful and compatible candidate for your
              organization !!
            </Text>
          </VStack>
          <VStack width={'70%'} >
            <Stack marginTop={"50px"} spacing={4} overflowX={'scroll'}>
              <HStack>
                <Input
                  variant={'filled'}
                  _placeholder={{ color: 'black' }}
                  placeholder="Organization Name"
                  size="md"
                />
                
              </HStack>
              <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  type="tel"
                  variant={'filled'}
                  placeholder="phone number"
                />
              </InputGroup>
              <InputGroup size="md">
                  <InputLeftAddon children="https://" />
                  <Input _placeholder={'black'} placeholder="Company Website URL" variant={'filled'}  />
                </InputGroup>
                <Input
                variant={'filled'}
                _placeholder={{ color: 'black' }}
                placeholder="Organization Email"
                size="md"
              />
              <Input
                variant={'filled'}
                _placeholder={{ color: 'black' }}
                placeholder="Enter Your Address"
                size="md"
              />
              <Input
                variant={'filled'}
                _placeholder={{ color: 'black' }}
                placeholder="Address Pincode"
                size="md"
              />
              <HStack>
                <Input
                  variant={'filled'}
                  _placeholder={{ color: 'black' }}
                  placeholder="City"
                  size="md"
                />
                <Input
                  variant={'filled'}
                  _placeholder={{ color: 'black' }}
                  placeholder="State"
                  size="md"
                />
              </HStack>
              <Select placeholder="Nu. of Employees" variant={'filled'}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Select placeholder="Category of Company" variant={'filled'}>
                <option value="option1">Less than 2years </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Input
                variant={'filled'}
                _placeholder={{ color: 'black' }}
                placeholder="Founded In"
                size="md"
              />
              <Textarea variant={'filled'} placeholder='About Your Company' />
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

export default OrgReg;
