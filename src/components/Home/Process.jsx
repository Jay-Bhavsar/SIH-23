import React from 'react';
import {
  Box,
  Image,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  VStack,
  useSteps,
} from '@chakra-ui/react';
import punjab from '../Assets/img/Bg Process.svg';
const Process = () => {
  const steps = [
    { title: 'First Step', description: 'Registration/Login' },
    { title: 'Second Step', description: 'Profile Setup' },
    { title: 'Third Step', description: 'Home Screen' },
    { title: 'Fourth Step', description: 'AR Job Notifications' },
    { title: 'Fifth Step', description: 'GPS-Based Skill Matching' },
  ];
  const steps2 = [
    { title: 'Sixth Step', description: 'Personalized Notifications' },
    { title: 'Seventh Step', description: 'Personalization and History' },
    { title: 'Eighth Step', description: 'Job Search' },
    { title: 'Nineth Step', description: 'Application and Interactions' },
    { title: 'Tenth Step ', description: 'Logout' },
  ];

  function Example() {
    const { activeStep } = useSteps({
      index: 4,
      count: steps.length,
    });
    return (
      <Stepper
        index={activeStep}
        colorScheme={'orange'}
        orientation="vertical"
        height="80vh"
        gap="0"
      >
        {steps.map((step, index) => (
          <Step fontFamily={'Roboto'} color={'orange'} key={index}>
            <StepIndicator color={'orange'}>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
                color={'orange'}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle fontFamily={'Roboto'}>{step.title}</StepTitle>
              <StepDescription fontFamily={'Roboto'}>
                {step.description}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    );
  }
  function Example2() {
    const { activeStep } = useSteps({
      index: 0,
      count: steps2.length,
    });
    return (
      <Stepper
        index={activeStep}
        colorScheme={'orange'}
        orientation="vertical"
        height="80vh"
        gap="0"
      >
        {steps2.map((step, index) => (
          <Step fontFamily={'Roboto'} color={'orange'} key={index}>
            <StepIndicator color={'orange'}>
              <StepStatus
                complete={<StepIcon />}
                incomplete={index+6}
                active={index+6}
                color={'orange'}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle fontFamily={'Roboto'}>{step.title}</StepTitle>
              <StepDescription fontFamily={'Roboto'}>
                {step.description}
              </StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    );
  }
  return (
    <>
      <Box width={'90%'} margin={'auto'} minHeight={'100vh'}>
        <Box backgroundColor={'#ff9933'}>
          <Text
            fontFamily={'Montserrat'}
            textAlign={'center'}
            margin={'4'}
            fontSize={['20px', '26px']}
            padding={'2'}
          >
            {' '}
            Process of getting Started with<b> PGRKAM</b>
          </Text>
        </Box>
        <Stack
          flexDirection={['column', 'row']}
          justifyContent={'space-around'}
        >
          <VStack>
            <Example />
          </VStack>
          <VStack>
            <Image boxSize={'600px'} src={punjab} />
          </VStack>
          <VStack>
            <Example2 />
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Process;
