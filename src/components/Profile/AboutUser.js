import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const AboutUser = () => {
  return (
    <>
        <VStack align={'start'} spacing={'5'}>
            <HStack>
                <Text fontSize={'20px'} fontWeight={'bold'} >Phone: </Text>
                <Text color={'grey'}> +91 6377535991</Text>
            </HStack>
            <HStack>
                <Text fontSize={'20px'} fontWeight={'bold'} >Address: </Text>
                <Text color={'grey'}> 88, Hari Marg, Civil Lines </Text>
            </HStack>
            <HStack>
                <Text fontSize={'20px'} fontWeight={'bold'} >City: </Text>
                <Text color={'grey'}> Jaipur </Text>
            </HStack>
            <HStack>
                <Text fontSize={'20px'} fontWeight={'bold'} >State: </Text>
                <Text color={'grey'}> Rajasthan </Text>
            </HStack>
            <HStack>
                <Text fontSize={'20px'} fontWeight={'bold'} >Pincode: </Text>
                <Text color={'grey'}> 302006 </Text>
            </HStack>
            <HStack>
                <Text fontSize={'20px'} fontWeight={'bold'} >Email: </Text>
                <Text color={'grey'}> sharma.karan27oct@gmail.com</Text>
            </HStack>
            <HStack>
                <Text fontSize={'20px'} fontWeight={'bold'} >Adhhar Card: </Text>
                <Text color={'grey'}> 1982 1928 4719 1783</Text>
            </HStack>
            
        </VStack>
    </>
  )
}

export default AboutUser
