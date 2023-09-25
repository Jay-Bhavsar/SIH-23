import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imag from "../../components/Assets/img/log.svg";
import StarPicker from "react-star-picker";
const Course = ({ item, index }) => {

  return (
    <VStack
      key = {index}
      width={['90%',"30%"]}
      className="course"
      alignItems={["center", "flex-start"]}
      boxShadow={"0px 10px 61px 26px rgba(0,0,0,0.1) "}
      padding={"20px"}
      marginY={"20px"}
    >
      <Image src={imag} boxSize="60" objectFit={"contain"} />
      <Heading
        textAlign={["center", "left"]}
        children={item.courseName}
        maxW="200px"
        fontFamily={"sans-serif"}
        noOfLines="3"
        size={['lg',"sm"]}
      />
      <Text children={item.description}  noOfLines="2" />
      <HStack>
        <Text
          children={item.creator}
          textTransform="uppercase"
          fontFamily={"body"}
        />
      </HStack>
      <HStack>
        <StarPicker colorScheme={"orange"} value={4.5} />
        <Text>4.5 (1202)</Text>
      </HStack>
      <HStack>
        <Text>₹{item.price}</Text>
      </HStack>
      <Stack alignItems={"center"} direction={["column", "row"]}>
        <Link to={`/course/${item.courseId}`}>
          <Button colorScheme={"orange"}>Buy Now</Button>
        </Link>
      </Stack>
    </VStack>
  );
};
const addToPlaylistHandler1 = () => {
  console.log("Playlist added");
};
const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const categories = [
    "Web Development",
    "Artificial Intelligence",
    "Data Structures &Algorithms",
    "App Development",
    "Data Science",
    "Game Development",
  ];

  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://sih23-backend.vercel.app/allCourse", {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((resposne) => resposne.json())
      .then((data) => {
        setIsLoading(!isLoading);
        setCourses([...data]);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    setIsLoading(false);
  }, []);

  return (
    <Container minH={"100vh"} maxW={"container.lg"} paddingY={"8"}>
      <Heading children="All Courses" marginTop={'100px'} />
      <HStack
        width={"100%"}
        height={"100px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          placeholder="Search a Course ...."
          type={"text"}
          focusBorderColor="orange.500"
        />
        <Link to={'/addcourse'}>
          <Button marginTop={"20px"} colorScheme="orange" alignItems={"center"}>
            Add Course
          </Button>
        </Link>
      </HStack>

      <HStack overflowX={"auto"} paddingY={"8"}>
        {categories.map((item, index) => (
          <Button
            variant={"outline"}
            colorScheme="orange"
            key={index}
            onClick={() => setCategory(item)}
            minW={"60"}
          >
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={["column", "row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >


        {courses.map((item, index) => (
          <Course item={item} index={index} />
        ))} 
          
      </Stack>
    </Container>
  );
};

export default Courses;
