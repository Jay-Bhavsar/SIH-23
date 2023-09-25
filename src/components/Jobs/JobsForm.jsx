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
import React, { useState } from "react";
import { IoIosDocument } from "react-icons/io";

const JobsForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const template = {
    jobName: "",
    lastDate: "",
    location: "",
    openings: "",
    salRange: "",
    requirements: "",
    jobDesc: "",
    type: "",
    skills: "",
  };
  const [job, setJob] = useState({ ...template });
  function submitJob() {
    setIsLoading(false);
    console.log("submit job hit");
    // Fetch company Id and put her (Very important)
    const temp = {
      ...job,
      companyId: "123xyz",
      skills: ["Communication", "SAP"],
      interests: ["Business"],
    };
    fetch("https://sih23-backend.vercel.app/job", {
      method: "POST",
      body: JSON.stringify(temp),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resposne) => resposne.json())
      .then((data) => {
        setIsLoading(!isLoading);
        setShowForm(!showForm);
        setJob(template);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  console.log(job);
  return (
    <>
      {showForm ? (
        <>
          <Box className="userReg" width={"100vw"} minHeight={"100vh"}>
            <Stack
              width={"100vw"}
              minheight={"70vh"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              direction={["column", "row"]}
              // margin={'auto'}
            >
              <VStack display={['none','flex']} width={["80%", "25%"]}  marginTop={["500px", "1px"]}>
                <Text fontSize={['100px','300px']}>
                  <IoIosDocument color="white" />
                </Text>
                <Text
                  color={"whiteAlpha.900"}
                  fontSize={"40px"}
                  fontWeight={"bold"}
                >
                  Add a New Job
                </Text>
              </VStack>
              <VStack width={["90%", "75%"]} minHeight={'100vh'} >
                <Stack
                  spacing={4}
                  overflowX={"scroll"}
                  minHeight={"100vh"}
                  marginTop={['100px',"150px"]}
                >
                  <Input
                    value={job.jobName}
                    onChange={(e) =>
                      setJob({ ...job, jobName: e.target.value })
                    }
                    variant={"filled"}
                    _placeholder={{ color: "black" }}
                    placeholder="Job Role"
                    size="md"
                  />
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                  />
                  <Input
                    value={job.lastDate}
                    onChange={(e) =>
                      setJob({ ...job, lastDate: e.target.value })
                    }
                    variant={"filled"}
                    _placeholder={{ color: "black" }}
                    placeholder="Last Date to Apply"
                    size="md"
                  />
                  <HStack>
                    <Input
                      value={job.location}
                      onChange={(e) =>
                        setJob({ ...job, location: e.target.value })
                      }
                      variant={"filled"}
                      _placeholder={{ color: "black" }}
                      placeholder="Location"
                      size="md"
                    />
                    <Input
                      value={job.openings}
                      onChange={(e) =>
                        setJob({ ...job, openings: e.target.value })
                      }
                      variant={"filled"}
                      _placeholder={{ color: "black" }}
                      placeholder="Number of Openings"
                      size="md"
                    />
                  </HStack>
                  <Input
                    value={job.salRange}
                    onChange={(e) =>
                      setJob({ ...job, salRange: e.target.value })
                    }
                    variant={"filled"}
                    _placeholder={{ color: "black" }}
                    placeholder="Salary Range"
                    size="md"
                  />
                  <Textarea
                    value={job.requirements}
                    onChange={(e) =>
                      setJob({ ...job, requirements: e.target.value })
                    }
                    variant={"filled"}
                    placeholder="Who can Apply ?"
                  />

                  <Textarea
                    value={job.jobDesc}
                    onChange={(e) =>
                      setJob({ ...job, jobDesc: e.target.value })
                    }
                    variant={"filled"}
                    placeholder="Job Description"
                  />

                  <Select placeholder="Job Type" variant={"filled"}>
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
                  <Textarea
                    value={job.skills}
                    onChange={(e) => setJob({ ...job, skills: e.target.value })}
                    variant={"filled"}
                    placeholder="Skills Required"
                  />
                  <Button
                    type="submit"
                    onClick={submitJob}
                    size={"lg"}
                    colorScheme="orange"
                    variant={"solid"}
                  >
                    Submit
                  </Button>
                </Stack>
              </VStack>
            </Stack>
          </Box>
        </>
      ) : (
        <>
          <Box className="userReg" width={"100vw"} minHeight={"100vh"}>
            <HStack
              width={"100vw"}
              height={"100vh"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              // margin={'auto'}
            >
              <VStack width={"25%"}>
                <IoIosDocument fontSize={"300px"} color="white" />
                <Text
                  color={"whiteAlpha.900"}
                  fontSize={"40px"}
                  fontWeight={"bold"}
                >
                  Add a New Job
                </Text>
                <Text
                  fontSize={"20px"}
                  color={"whiteAlpha.900"}
                  textAlign={"center"}
                ></Text>
              </VStack>
              <VStack width={"70%"}>
                <Heading
                  marginBottom={"40px"}
                  fontWeight={"medium"}
                  fontFamily={"roboto"}
                >
                  Job Posted Successfully !
                </Heading>
                <Button
                  type="submit"
                  onClick={submitJob}
                  size={"lg"}
                  colorScheme="orange"
                  variant={"solid"}
                >
                  Post Another Job
                </Button>
              </VStack>
            </HStack>
          </Box>
        </>
      )}
    </>
  );
};

export default JobsForm;
