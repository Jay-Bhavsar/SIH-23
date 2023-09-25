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
import Multiselect from "multiselect-react-dropdown";

const JobsForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const skills = ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7"];
  const [selectedSkills, setSelectedSkills] = useState([]);
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
                <IoIosDocument widsth fontSize={"300px"} color="white" />
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
              <VStack width={"70%"} >
                <Stack spacing={4} overflowX={"scroll"} minHeight={'100vh'} marginTop={'150px'}>
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
                  <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
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
                    <option value="Internship">Internship</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Contract Based">Contract Based</option>
                    <option value="Frelance">Frelance</option>
                    <option value="Part Time">Part Time</option>
                  </Select>

                  <Multiselect
                    placeholder="Skills Gained"
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
            </HStack>
          </Box>
        </>
      ) : (
        <>
          <Box className="userReg" width={"100vw"} minHeight={"120vh"}>
            <HStack
              width={"100vw"}
              height={"100vh"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              // margin={'auto'}
            >
              <VStack width={"25%"}>
                <IoIosDocument widsth fontSize={"300px"} color="white" />
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
