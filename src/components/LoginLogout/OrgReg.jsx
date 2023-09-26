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
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosRocket } from "react-icons/io";
const OrgReg = () => {
  const template = {
    name: "",
    dob: "",
    phone: "",
    url: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    numberOfEmployees: "",
    categoryOfCompany: "",
    foundedyear: "",
    message: "",
  };

  const [user, setUser] = useState({ ...template });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState({});
  const regCompany = () => {
    setIsLoading(true);
    const uid = sessionStorage.getItem("uid");
    
    const temp = {
      ...user,
      uid: uid,
      numberOfEmployees: user.numberOfEmployees,
      categoryOfCompany: user.categoryOfCompany,
      userType: "company",
      coordinates:userLocation,
    };
    fetch("https://sih23-backend.vercel.app/register", {
      method: "POST",
      body: JSON.stringify(temp),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resposne) => resposne.json())
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          setIsLoading(!isLoading);
          setUser(template);
          sessionStorage.setItem("userType", "user");
          navigate("/jobs");
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [])
  
  return (
    <>
      <Box className="userReg" width={"100vw"} height={"100vh"}>
        <HStack
          width={"100vw"}
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          // margin={'auto'}
        >
          <VStack width={"25%"} display={["flex", "block"]}>
            <IoIosRocket widsth fontSize={"300px"} color="white" />
            <Text
              color={"whiteAlpha.900"}
              fontSize={"40px"}
              fontWeight={"bold"}
            >
              Welcome !
            </Text>
            <Text
              fontSize={"25px"}
              color={"whiteAlpha.900"}
              textAlign={"center"}
            >
              Apply as a new Organization
            </Text>
            <Text
              fontSize={"20px"}
              color={"whiteAlpha.900"}
              textAlign={"center"}
            >
              We help you find the skillful and compatible candidate for your
              organization !!
            </Text>
          </VStack>
          <VStack width={["100%", "70%"]}>
            <Stack marginTop={"50px"} spacing={4} overflowX={"scroll"}>
              <HStack>
                <Input
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="Organization Name"
                  size="md"
                />
              </HStack>
              <input
                type="file"
                className="file-input file-input-bordered file-input-warning w-full max-w-xs"
              />
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  type="tel"
                  variant={"filled"}
                  placeholder="phone number"
                />
              </InputGroup>
              <InputGroup size="md">
                <InputLeftAddon children="https://" />
                <Input
                  value={user.url}
                  onChange={(e) => setUser({ ...user, url: e.target.value })}
                  _placeholder={"black"}
                  placeholder="Company Website URL"
                  variant={"filled"}
                />
              </InputGroup>
              <Input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Organization Email"
                size="md"
              />
              <Input
                value={user.address}
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Enter Your Address"
                size="md"
              />
              <Input
                value={user.pincode}
                onChange={(e) => setUser({ ...user, pincode: e.target.value })}
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Address Pincode"
                size="md"
              />
              <HStack>
                <Input
                  value={user.city}
                  onChange={(e) => setUser({ ...user, city: e.target.value })}
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="City"
                  size="md"
                />
                <Input
                  value={user.state}
                  onChange={(e) => setUser({ ...user, state: e.target.value })}
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="State"
                  size="md"
                />
              </HStack>
              <Select
                value={user.numberOfEmployees}
                onChange={(e) =>
                  setUser({ ...user, numberOfEmployees: e.target.value })
                }
                placeholder="No. of Employees"
                variant={"filled"}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Select
                value={user.categoryOfCompany}
                onChange={(e) =>
                  setUser({ ...user, categoryOfCompany: e.target.value })
                }
                placeholder="Category of Company"
                variant={"filled"}
              >
                <option value="option1">Less than 2years </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Input
                value={user.foundedyear}
                onChange={(e) =>
                  setUser({ ...user, foundedyear: e.target.value })
                }
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Founded In"
                size="md"
              />
              <Textarea
                value={user.message}
                onChange={(e) => setUser({ ...user, message: e.target.value })}
                variant={"filled"}
                placeholder="About Your Company"
              />
              <Button
                onClick={regCompany}
                size={"lg"}
                colorScheme="orange"
                variant={"solid"}
              >
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
