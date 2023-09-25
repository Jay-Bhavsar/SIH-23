import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Box, HStack, Text } from "@chakra-ui/react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
const Data = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <Box width={"90%"} margin={"auto"} minHeight={"auto"}>
          <Box background={"#ff9933"}>
            <Text
              fontFamily={"montserrat"}
              fontSize={["20px", "27px"]}
              padding={"2"}
              margin={"5"}
              textAlign={"center"}
            >
              Data Analytics
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDir={["column", "row"]}
            marginTop={"100px"}
            marginBottom={"100px"}
          >
            <Box width={["90%", "20%"]} margin={"auto"} marginBottom={'10px'}>
              <Box
                height={"80px"}
                borderTopLeftRadius={"10px"}
                borderTopRightRadius={"10px"}
                border={"2px solid grey"}
                borderBottom={"none"}
                background={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={"-1px 17px 16px -3px grey"}
              >
                <Text fontSize={"25px"} textAlign={"center"}>
                  {counterOn && (
                    <CountUp start={0} end={20956} duration={2} delay={0} />
                  )}
                  +
                </Text>
              </Box>
              <Box
                height={"80px"}
                border={"2px solid grey"}
                borderTop={"none"}
                borderBottomLeftRadius={"10px"}
                borderBottomRightRadius={"10px"}
                background={"orange"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={"-1px 17px 16px -3px grey"}
              >
                <Text fontSize={"20px"} textAlign={"center"}>
                  Available Govt Jobs
                </Text>
              </Box>
            </Box>
            <Box width={["90%", "20%"]} margin={"auto"} marginBottom={'10px'}>
              <Box
                height={"80px"}
                borderTopLeftRadius={"10px"}
                borderTopRightRadius={"10px"}
                border={"2px solid grey"}
                borderBottom={"none"}
                background={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={"-1px 17px 16px -3px grey"}
              >
                <Text fontSize={"25px"} textAlign={"center"}>
                  {counterOn && (
                    <CountUp start={0} end={66850} duration={2} delay={1} />
                  )}
                  +
                </Text>
              </Box>
              <Box
                height={"80px"}
                border={"2px solid grey"}
                borderTop={"none"}
                borderBottomLeftRadius={"10px"}
                borderBottomRightRadius={"10px"}
                background={"orange"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                boxShadow={"-1px 17px 16px -3px grey"}
              >
                <Text fontSize={"20px"} textAlign={"center"}>
                  Available Private Jobs
                </Text>
              </Box>
            </Box>
            <Box width={["90%", "20%"]} margin={"auto"} marginBottom={'10px'}>
              <Box
                height={"80px"}
                borderTopLeftRadius={"10px"}
                boxShadow={"-1px 17px 16px -3px grey"}
                borderTopRightRadius={"10px"}
                border={"2px solid grey"}
                borderBottom={"none"}
                background={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontSize={"25px"} textAlign={"center"}>
                  {counterOn && (
                    <CountUp start={0} end={1983669} duration={2} delay={3} />
                  )}
                  +
                </Text>
              </Box>
              <Box
                height={"80px"}
                border={"2px solid grey"}
                borderTop={"none"}
                borderBottomLeftRadius={"10px"}
                boxShadow={"-1px 17px 16px -3px grey"}
                borderBottomRightRadius={"10px"}
                background={"orange"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontSize={"20px"} textAlign={"center"}>
                  Registered Job Seekers
                </Text>
              </Box>
            </Box>
            <Box width={["90%", "20%"]} margin={"auto"} marginBottom={'10px'}>
              <Box
                height={"80px"}
                borderTopLeftRadius={"10px"}
                borderTopRightRadius={"10px"}
                border={"2px solid grey"}
                boxShadow={"-1px 17px 16px -3px grey"}
                borderBottom={"none"}
                background={"white"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontSize={"25px"} textAlign={"center"}>
                  {counterOn && (
                    <CountUp start={0} end={17093} duration={2} delay={5} />
                  )}
                  +
                </Text>
              </Box>
              <Box
                height={"80px"}
                border={"2px solid grey"}
                borderTop={"none"}
                borderBottomLeftRadius={"10px"}
                borderBottomRightRadius={"10px"}
                boxShadow={"-1px 17px 16px -3px grey"}
                background={"orange"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text fontSize={"20px"} textAlign={"center"}>
                  Registered Employers
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollTrigger>
    </>
  );
};

export default Data;
