import {
    Heading,
    HStack,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import StarPicker from "react-star-picker";
import imag from "../../components/Assets/img/log.svg";
const addToPlaylistHandler1 = () => {
    console.log("Playlist added");
};
const Course = ({ title, imageScr, id, creator, description }) => {

    return (
        <VStack
            minWidth={['80%',"40%"]}
            className="course"
            alignItems={["center", "flex-start"]}
            boxShadow={"0px 0px 10px 0px rgba(0,0,0,0.1) "}
            padding={"20px"}
            marginY={"20px"}
        >
            <Image src={imageScr} boxSize="60" objectFit={"contain"} />
            <Heading
                textAlign={["center", "left"]}
                children={title}
                maxW="200px"
                fontFamily={"sans-serif"}
                noOfLines="3"
                size={"sm"}
            />
            <Text children={description} noOfLines="2" />
            <HStack>
                <Text
                    children={creator}
                    textTransform="uppercase"
                    fontFamily={"body"}
                />
            </HStack>
            <HStack>
                <StarPicker colorScheme={"orange"} value={4.5} />
                <Text>4.5 (1202)</Text>
            </HStack>
            <HStack>
                <Text>₹5,000</Text>
            </HStack>
        </VStack>
    );
};
const CourseUser = () => {
    return (
        <>
            <HStack width={'100%'} overflowX={'scroll'} margin={'auto'}>
                <Course
                    views="2"
                    title="Web Development"
                    imageScr={imag}
                    id="sample"
                    addToPlaylistHandler={addToPlaylistHandler1}
                    creator="Dr.Luis Anderson"
                    description="sample"
                    lectureCount="5"
                />
                <Course
                    views="2"
                    title="Web Development"
                    imageScr={imag}
                    id="sample"
                    addToPlaylistHandler={addToPlaylistHandler1}
                    creator="Dr.Luis Anderson"
                    description="sample"
                    lectureCount="5"
                />
                <Course
                    views="2"
                    title="Web Development"
                    imageScr={imag}
                    id="sample"
                    addToPlaylistHandler={addToPlaylistHandler1}
                    creator="Dr.Luis Anderson"
                    description="sample"
                    lectureCount="5"
                />
                <Course
                    views="2"
                    title="Web Development"
                    imageScr={imag}
                    id="sample"
                    addToPlaylistHandler={addToPlaylistHandler1}
                    creator="Dr.Luis Anderson"
                    description="sample"
                    lectureCount="5"
                />
                <Course
                    views="2"
                    title="Web Development"
                    imageScr={imag}
                    id="sample"
                    addToPlaylistHandler={addToPlaylistHandler1}
                    creator="Dr.Luis Anderson"
                    description="sample"
                    lectureCount="5"
                />
                <Course
                    views="2"
                    title="Web Development"
                    imageScr={imag}
                    id="sample"
                    addToPlaylistHandler={addToPlaylistHandler1}
                    creator="Dr.Luis Anderson"
                    description="sample"
                    lectureCount="5"
                />
            </HStack>
        </>
    )
}

export default CourseUser
