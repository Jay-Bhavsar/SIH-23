import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const Features = () => {
  return (
    <>
      <Box width={'90%'} margin={'auto'}>
        <Box background={'#ff9933'} marginBottom={'100px'}>
          <Text
            fontSize={['20px', '27px']}
            padding={'2'}
            margin={'5'}
            textAlign={'center'}
          >
            Features
          </Text>
        </Box>
        <VStack overflowX={'auto'} margin={'auto'}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="filled"
            width={'80%'}
            margin={'auto'}
            marginBottom={'40px'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '300px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading
                  size="lg"
                  fontFamily={'montserrat'}
                  fontWeight={'medium'}
                >
                  Job related notifications
                </Heading>

                <Text py="2" fontFamily={'montserrat'}>
                  This enables users to create skill profiles and receive
                  real-time, highly targeted job notifications based on their
                  qualifications and expertise. Utilizing a skill matching
                  algorithm, the tool ensures that candidates are promptly
                  alerted to job opportunities closely aligned with their skill
                  sets, streamlining the job search process, increasing job
                  satisfaction, and promoting continuous skill development,
                  ultimately providing users with a competitive edge in the job
                  market.
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row-reverse' }}
            overflow="hidden"
            variant="filled"
            width={'80%'}
            margin={'auto'}
            marginBottom={'40px'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '300px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading
                  size="lg"
                  fontFamily={'montserrat'}
                  fontWeight={'medium'}
                >
                  Skills Enhancement
                </Heading>

                <Text py="2" fontFamily={'montserrat'}>
                  2.The feature serves as a centralized hub for users to
                  discover, evaluate, and access skill development programs,
                  courses, and training providers. Users can explore a diverse
                  range of skill development opportunities based on their
                  preferences and career goals, with detailed program
                  descriptions, schedules, and direct application options. This
                  feature not only simplifies the process of skill enhancement
                  but also empowers users to make informed decisions, fostering
                  continuous learning and professional growth, and ultimately
                  contributing to their career advancement and personal
                  development.
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="filled"
            width={'80%'}
            margin={'auto'}
            marginBottom={'40px'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '300px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading
                  size="lg"
                  fontFamily={'montserrat'}
                  fontWeight={'medium'}
                >
                  Foreign counseling
                </Heading>

                <Text py="2" fontFamily={'montserrat'}>
                  Connects users with individuals who have gained valuable
                  experience from living and working in foreign countries.
                  Through this feature, users can learn firsthand from these
                  experienced individuals about international education, career
                  opportunities, cultural insights, and practical advice for
                  success abroad. Users have the opportunity to schedule
                  counseling sessions and gain invaluable knowledge from those
                  who have navigated the challenges and opportunities of living
                  and working in foreign countries.
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row-reverse' }}
            overflow="hidden"
            variant="filled"
            width={'80%'}
            margin={'auto'}
            marginBottom={'40px'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '300px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading
                  size="lg"
                  fontFamily={'montserrat'}
                  fontWeight={'medium'}
                >
                  GPS enabled high tech Solution
                </Heading>

                <Text py="2" fontFamily={'montserrat'}>
                  The "GPS-Enabled High-Tech Technology" feature leverages
                  advanced geospatial technology to provide users with precise
                  and real-time location-based services. Users can effortlessly
                  discover job opportunities available in close proximity to
                  their current location, making their job search process more
                  efficient and tailored to their surroundings. This
                  transformative technology revolutionizes the way users connect
                  with employers and resources, facilitating informed decisions
                  and enhancing their career development journey.
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="filled"
            width={'80%'}
            margin={'auto'}
            marginBottom={'40px'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '300px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading
                  size="lg"
                  fontFamily={'montserrat'}
                  fontWeight={'medium'}
                >
                  AI generated recommendations
                </Heading>

                <Text py="2" fontFamily={'montserrat'}>
                  This feature employs advanced artificial intelligence to
                  provide users with personalized suggestions for job
                  opportunities, skill development programs, and foreign
                  counseling services. By analyzing user profiles, preferences,
                  and past interactions, the AI algorithm generates tailored
                  recommendations that align with each user's unique
                  qualifications, career goals, and interests. This feature not
                  only streamlines the decision-making process but also enhances
                  the user experience by ensuring that users are presented with
                  opportunities that best match their individual needs.
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row-reverse' }}
            overflow="hidden"
            variant="filled"
            width={'80%'}
            margin={'auto'}
            marginBottom={'40px'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '300px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading
                  size="lg"
                  fontFamily={'montserrat'}
                  fontWeight={'medium'}
                >
                  Auto resume parsing
                </Heading>

                <Text py="2" fontFamily={'montserrat'}>
                  6.This simplifies the job application process by automatically
                  extracting and organizing essential information from
                  user-submitted resumes. Leveraging advanced parsing algorithms
                  and natural language processing, this feature swiftly and
                  accurately identifies key details such as education, work
                  experience, skills, and contact information. By eliminating
                  the need for manual data entry, it not only saves users time
                  but also ensures that their job applications are complete and
                  error-free.
                </Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="filled"
            width={'80%'}
            margin={'auto'}
            marginBottom={'40px'}
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '300px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading
                  size="lg"
                  fontFamily={'montserrat'}
                  fontWeight={'medium'}
                >
                  Augmented Reality:
                </Heading>

                <Text py="2" fontFamily={'montserrat'}>
                  The "Augmented Reality (AR)" feature transforms the job search
                  experience by merging the physical and digital worlds. When
                  users point their Smartphone cameras at specific buildings or
                  locations within their geographical area, this feature
                  delivers real-time job notifications, gig opportunities, skill
                  development initiatives, and foreign counseling services that
                  are directly relevant to the identified location. Users
                  receive on-screen notifications, access detailed information,
                  and can navigate to application web links, all through the
                  seamless integration of AR technology.
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </VStack>
      </Box>
    </>
  );
};

export default Features;
