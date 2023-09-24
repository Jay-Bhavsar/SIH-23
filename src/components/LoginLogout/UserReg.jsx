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
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosRocket } from "react-icons/io";
import Multiselect from "multiselect-react-dropdown";
import { Navigate } from "react-router-dom";
const UserReg = () => {
  const skills = ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7"]
  const interest =["Intersts1", "Interests2", "Interests3", "Interests4", "Interests5", "Interests6", "Interests7", "Interests8"]
  const template = {
    name : "",
    dob : "",
    phone : "",
    address : "",
    pincode : "",
    city : "",
    state : "",
    aadhar : "",
   };
  
  const [user, setUser] = useState({ ...template });
  const [selectedSkills, setSelectedSkills ] = useState([]);
  const [selectedInterests, setSelectedInterests ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const regUser = () => {
    setIsLoading(true);
    const uid = sessionStorage.getItem("uid");
    const temp = {...user, selectedSkills : selectedSkills, selectedInterests : selectedInterests, uid : uid, userType: "user"};
    fetch("https://sih23-backend.vercel.app/register", {
      method: "POST",
      body: JSON.stringify(temp),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    .then((resposne) => resposne.json())
    .then((data) => {
      console.log(data);
      if(data.status === 200) {
        setIsLoading(!isLoading);
        setUser(template);
        sessionStorage.setItem("userType", "user");
        navigate("/profile")
      }
      else {
        console.log("Something went wrong");
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
  } 
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
          <VStack width={"25%"}>
            <IoIosRocket fontSize={"300px"} color="white" />
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
              Apply as a new User
            </Text>
            <Text
              fontSize={"20px"}
              color={"whiteAlpha.900"}
              textAlign={"center"}
            >
              You are just 30min away from getting your Skill based job near you
              !!
            </Text>
          </VStack>
          <VStack width={"70%"}>
            <Stack spacing={4}>
              <HStack>
                <Input
                  value={user.name}
                  onChange={(e) =>
                    setUser({ ...user, name: e.target.value })
                  }
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="Full Name"
                  size="md"
                />
                <Input
                  value={user.dob}
                  onChange={(e) =>
                    setUser({ ...user, dob: e.target.value })
                  }
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="DOB"
                  size="md"
                  type="datetime-local"
                />
              </HStack>
              <InputGroup>
                <InputLeftAddon children="+91" />
                <Input
                  value={user.phone}
                  onChange={(e) =>
                    setUser({ ...user, phone: e.target.value })
                  }
                  type="tel"
                  variant={"filled"}
                  placeholder="phone number"
                />
              </InputGroup>
              <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
              <Input
                value={user.address}
                onChange={(e) =>
                  setUser({ ...user, address: e.target.value })
                }
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Enter Your Address"
                size="md"
              />
              <Input
                value={user.pincode}
                  onChange={(e) =>
                    setUser({ ...user, pincode: e.target.value })
                  }
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Address Pincode"
                size="md"
              />
              <HStack>
                <Input
                  value={user.city}
                  onChange={(e) =>
                    setUser({ ...user, city: e.target.value })
                  }
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="City"
                  size="md"
                />
                <Input
                  value={user.state}
                  onChange={(e) =>
                    setUser({ ...user, state: e.target.value })
                  }
                  variant={"filled"}
                  _placeholder={{ color: "black" }}
                  placeholder="State"
                  size="md"
                />
              </HStack>

              <Input
                value={user.aadhar}
                  onChange={(e) =>
                    setUser({ ...user, aadhar: e.target.value })
                  }
                variant={"filled"}
                _placeholder={{ color: "black" }}
                placeholder="Adhhar Number"
                size="md"
              />
              <Select
                onChange={(e) => 
                  setUser({...user, experience : e.target.value})
                }
                placeholder="Select your Professional Experience"
                variant={"filled"}
              >
                <option value="0 - 1 Years">0 - 1 Years</option>
                <option value="1 - 2 Years">1 - 2 Years</option>
                <option value="2 - 3 Years">2 - 3 Years</option>
                <option value="3 - 4 Years">3 - 4 Years</option>
                <option value="4 - 5 Years">4 - 5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </Select>

              <Multiselect
                placeholder="Selct your interests"
                isObject={false}
                showCheckbox={true}
                avoidHighlightFirstOption={true}
                showArrow={true}
                onRemove={(event) => {
                  setSelectedInterests(event);
                }}
                onSelect={(event) => {
                  setSelectedInterests(event);
                }}
                options={interest}
              />
              
              <Multiselect
                placeholder={"Tell us about your skills"}
                isObject={false}
                showCheckbox={true}
                avoidHighlightFirstOption={true}
                showArrow={true}
                onRemove={(event) => {
                  setSelectedSkills(event);
                }}
                onSelect={(event) => {
                  setSelectedSkills(event);
                }}
                options={skills}
              />
              <Button onClick = {regUser} size={"lg"} colorScheme="orange" variant={"solid"}>
                Submit
              </Button>
            </Stack>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default UserReg;
