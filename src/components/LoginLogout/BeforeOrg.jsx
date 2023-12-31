import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import {  useNavigate } from "react-router-dom";
import { IoIosRocket } from "react-icons/io";

const BeforeUser = () => {
  const [firstname, setFirstname] = useState("");
  const [mobNo, setmobNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Step 1
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [error, setError] = useState();
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    console.log("Hello ");
    // Step 3: Check if the password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const newUser = {
      email,
      role: "company",
    };

    try {
      await signUp(email, password, newUser);
      navigate("/regorg");
      alert("You have signed up successfully");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Box className="userReg" width={"100vw"} height={"100vh"}>
        <HStack
          width={"100vw"}
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <VStack width={"25%"} display={['none','flex']}>
            <IoIosRocket widsth fontSize={"300px"} color="white" />
            <Text
              color={"whiteAlpha.900"}
              fontSize={"40px"}
              fontWeight={"bold"}
            >
              Welcome!
            </Text>
            <Text
              fontSize={"25px"}
              color={"whiteAlpha.900"}
              textAlign={"center"}
            >
              Sign Up here
            </Text>
            <Text
              fontSize={"20px"}
              color={"whiteAlpha.900"}
              textAlign={"center"}
            >
              We help you find the skillful and compatible candidate for your organization!
            </Text>
          </VStack>

          <VStack width={"100%"}>
            <Stack marginTop={"50px"} spacing={4} overflowX={"scroll"}>
              <form
                action=""
                onSubmit={handleSubmit2}
                className="flex justify-start w-[90%] md:w-[100%]"
              >
                  <Input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="w-[90%]"
                    required
                    placeholder="Enter your email Address" marginTop={'20px'} size={'lg'}
                  />

                  <Input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="w-[90%]"
                    required
                    placeholder="Enter your Password" marginTop={'20px'} size={'lg'}
                  />

                {/* Step 2: Add Confirm Password field */}
                  <Input
                    type="password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    className="w-[90%]"
                    required
                    placeholder="Confirm Password" marginTop={'20px'} size={'lg'}
                  />
                {/* Display an error message if passwords do not match */}
                {error && (
                  <p style={{ color: "red" }}>{error}</p>
                )}

                  <Button onClick={handleSubmit2} variant={'solid'} colorScheme="orange" marginTop={'20px'} size={'lg'}>Sign Up</Button>
              </form>
            </Stack>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default BeforeUser;
