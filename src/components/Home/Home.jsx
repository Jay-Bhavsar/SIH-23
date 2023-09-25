import React from "react";
import {
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import hero from "../Assets/img/home.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Box className="hero " width={"100vw"} height={"100vh"}>
        <Box width={"90vw"} height={"100vh"} margin={"auto"}>
          <Stack marginTop={"60px"} justifyContent={"space-between"} direction={['column','row']}>
            <VStack width={["90%","45%"]} alignContent={'center'} margin={['auto','0']}>
              <Heading
                textAlign={"center"}
                fontWeight={"medium"}
                color={"#dd6b20"}
                fontFamily={"montserrat"}
                fontSize={["30px", "45px"]}
                marginTop={['40px','200px']}
              >
                PGRKAM{" "}
                <span style={{ color: "black", fontFamily: "montserrat" }}>
                  - Program
                </span>
                <br />
                Punjab Ghar Ghar Rojgar
              </Heading>
              <Text
                fontFamily={"montserrat"}
                fontSize={["15px","25px"]}
                color={"grey"}
                textAlign="center"
              >
                Revolutionizing Job Searches. Experience AR-powered job alerts,
                GPS-based skill matching, and AI-driven recommendations for a
                smarter, personalized career path.
                {/* Introducing PGRKAM, your ultimate career companion! With PGRKAM, job seekers experience the future of job hunting – effortlessly receive job notifications through cutting-edge Augmented Reality (AR), connect with employers in real-time using GPS technology, and enjoy personalized recommendations powered by AI, all designed to transform your job search into a smarter and more efficient journey. */}
              </Text>
              <HStack>
                <Link to={"/login"}>
                  <Button variant={"solid"} size={"lg"} colorScheme="orange">
                    Login
                  </Button>
                </Link>
                <Link to={"/jobs"}>
                  <Button variant={"solid"} size={"lg"} colorScheme="orange">
                    Find Jobs
                  </Button>
                </Link>
              </HStack>
            </VStack>
            <Image
              justifyContent={["center","flex-start"]}
              border
              width={["90%","50%"]}
              src={hero}
              marginTop={['50px','0']}
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
